import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { Button, Input, Card, CardContent } from "@/components/ui";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [testResult, setTestResult] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setRecommendations(docSnap.data().recommendations);
        }
      }
    });
  }, []);

  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), { recommendations: [] });
    } catch (error) {
      console.error(error);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const takeTest = () => {
    const storedQuizData = JSON.parse(localStorage.getItem("quizAnswers"));
    if (!storedQuizData) {
      alert("Сначала пройдите тест!");
      return;
    }
    setQuizData(storedQuizData);

    const result = storedQuizData.question1 === "Да!" ? "Эколог" : "Средний уровень";
    setTestResult(result);
    
    const recs = result === "Эколог" ? ["Сдача макулатуры", "Энергосбережение"] : ["Сортировка мусора", "Экономия воды"];
    setRecommendations(recs);
    if (user) {
      setDoc(doc(db, "users", user.uid), { recommendations: recs });
    }
  };

  return (
    <div className="p-4">
      {!user ? (
        <Card className="p-4">
          <CardContent>
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={register}>Регистрация</Button>
            <Button onClick={login}>Войти</Button>
          </CardContent>
        </Card>
      ) : (
        <Card className="p-4">
          <CardContent>
            <h2>Личный кабинет</h2>
            <p>Email: {user.email}</p>
            <h3>Зачёты на основе теста:</h3>
            <ul>
              {recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
      <Button onClick={takeTest}>Обновить зачёты</Button>
    </div>
  );
}
