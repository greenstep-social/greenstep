
const answerToAdvice = {
    1: {
      "Нет": "Поставьте контейнеры для бумаги и пластика дома.",
      "Иногда": "Начните регулярно сортировать бумагу, пластик и стекло."
    },
    2: {
      "Почти не использую": "Возьмите одну многоразовую сумку и пользуйтесь ею всю неделю.",
      "Стараюсь заменять": "Приобретите стильный и удобный вариант, который вам будет нравится."
    },
    3: {
      "Никогда": "Заменяйте электронные чеки вместо бумажных всю неделю.",
      "Иногда": "Поставьте коробку для бумаг и сдавайте её при заполнении."
    },
    4: {
      "Никогда": "Попробуйте продать 3 вещи онлайн или сдайте в фонд.",
      "Иногда": "Переберите ваш гардероб. Отфильтруйте те вещи, которые вам не нужны и продайте их онлайн."
    },
    5: {
      "Иногда": "Используйте сухие дрова или выберите альтернативное отопление.",
      "Регулярно": "Поставьте энергоэффективную печь или используйте древесные брикеты на протяжении месяца."
    },
    7: {
      "Нет": "Закрывайте кран — это как сохранить бутылку воды за минуту.",
      "Иногда": "Поставьте стакан рядом с раковиной для полоскания."
    },
    8: {
      "Регулярно": "Купите одну многоразовую бутылку.",
      "Иногда": "Попробуйте месяц без пластика: фильтр дома, бутылка, напитки в стекле."
    },
    9: {
      "Часто": "Перейдите на электрокар, если это возможно.",
      "Иногда": "Измените вид топлива на более экологичный."
    },
    10: {
      "6+ раз": "Попробуйте поездки “эко-такси” в течение недели.",
      "4–5 раз": "Замените использование такси на общественный транспорт в течение недели."
    },
    11: {
      "Регулярно": "Для коротких расстояний попробуйте пешие прогулки.",
      "Часто": "Дополняйте свои поездки на метро использованием велосипеда в течение недели."
    },
    12: {
      "Регулярно": "Замените транспорт на короткие расстояния на велосипед или пеший шаг на неделю.",
      "Часто": "Комбинируйте автобус с прогулками или велосипедом на протяжении месяца."
    },
    13: {
      "Никогда": "Попробуйте электросамокат или велосипед для повседневных поездок.",
      "Иногда": "Попробуйте электросамокат или велосипед для повседневных поездок."
    },
    14: {
      "Мало": "Замените короткие поездки на прогулки пешком.",
      "Иногда": "Ходите пешком чаще — это полезно и для вас, и для природы."
    },
    15: {
      "3+ раза": "По максимуму замените перелёты на поезда.",
      "1–2 раза": "Используйте поезда для дальних поездок."
    },
    16: {
      "Да, на постоянной основе": "Замените часть мяса на птицу или рыбу.",
      "Редко / рыба": "Введите больше растительных замен(бобовые, тофу, соевые продукты)."
    },
    17: {
      "Часто ем": "Замените молоко и сыр на растительные аналоги.",
      "Редко ем": "Добавьте растительные альтернативы в вашу диету."
    },
    18: {
      "4–8 раз в месяц": "Готовьте дома из свежих продуктов на протяжении месяца.",
      "8+ раз в месяц": "Попробуйте в течение недели готовить сами, исключая фаст фуд."
    },
    19: {
      "2–3 гаджета в год": "Используйте технику дольше, ремонтируйте при необходимости.",
      "3+ гаджетов в год": "Не спешите менять технику, если старая работает."
    },
    20: {
      "Не слежу": "Отключайте приборы из розеток.",
      "Обычное количество": "Перейдите на LED-лампы и технику класса A+ и выше."
    },
    21: {
      "3+": "Отключайте ненужные устройства, чтобы снизить расходы и выбросы.",
      "2–3": "Используйте фильтр с кнопкой, чтобы отключать всё одним нажатием."
    },
    23: {
      "Нет": "Поставьте насадку на душ.",
      "На некоторых кранах": "Установите насадки везде."
    },
    24: {
      "Меньшая часть/половина": "Выбирайте качественные вещи, они служат дольше.",
      "Большая часть": "Приобретайте вещи секонд-хендах на протяжении месяца."
    },
    25: {
      "Меньше половины / половина": "Замените 4 лампы на LED.",
      "Большинство": "Замените хотя бы одну лампу на LED и посчитайте выгоду."
    },
    27: {
      "Никогда": "Уберите мусор в парке рядом с домом.",
      "1–2 раза в месяц": "Позовите друзей или коллег на экологическую прогулку-субботник."
    },
    28: {
      "6–15 вещей": "Попробуйте месяц без покупок вещей.",
      "15+ вещей": "С каждой покупкой избавляйтесь от ненужной вещи в течение месяца."
    },
    29: {
      "Газовая": "Готовьте на среднем огне и плотно закрывайте крышки.",
      "Электрическая": "Приобретите и используйте посуду с толстым дном.",
      "Индукционная": "Готовьте на малом или среднем огне для экономии ресурсов в течение недели."
    }
  };

function submitAnswers() {
    const question1 = document.querySelector('input[name="question1"]:checked');
    const question2 = document.querySelector('input[name="question2"]:checked');
    const question3 = document.querySelector('input[name="question3"]:checked');
    const question4 = document.querySelector('input[name="question4"]:checked');
    const question5 = document.querySelector('input[name="question5"]:checked');
    const question6 = document.querySelector('input[name="question6"]:checked');
    const question7 = document.querySelector('input[name="question7"]:checked');
    const question8 = document.querySelector('input[name="question8"]:checked');
    const question9 = document.querySelector('input[name="question9"]:checked');
    const question10 = document.querySelector('input[name="question10"]:checked');
    const question11 = document.querySelector('input[name="question11"]:checked');
    const question12 = document.querySelector('input[name="question12"]:checked');
    const question13 = document.querySelector('input[name="question13"]:checked');
    const question14 = document.querySelector('input[name="question14"]:checked');
    const question15 = document.querySelector('input[name="question15"]:checked');
    const question16 = document.querySelector('input[name="question16"]:checked');
    const question17 = document.querySelector('input[name="question17"]:checked');
    const question18 = document.querySelector('input[name="question18"]:checked');
    const question19 = document.querySelector('input[name="question19"]:checked');
    const question20 = document.querySelector('input[name="question20"]:checked');
    const question21 = document.querySelector('input[name="question21"]:checked');
    const question22 = document.querySelector('input[name="question22"]:checked');
    const question23 = document.querySelector('input[name="question23"]:checked');
    const question24 = document.querySelector('input[name="question24"]:checked');
    const question25 = document.querySelector('input[name="question25"]:checked');
    const question26 = document.querySelector('input[name="question26"]:checked');
    const question27 = document.querySelector('input[name="question27"]:checked');
    const question28 = document.querySelector('input[name="question28"]:checked');
    const question29 = document.querySelector('input[name="question29"]:checked');

    if (!question1 || !question2 || !question3 || !question4 || !question5 || !question6 || !question7 || !question8 || !question9 || !question10 || !question11 || !question12 || !question13 || !question14 || !question15 || !question16 || !question17 || !question18 || !question19 || !question20 || !question21 || !question22 || !question23 || !question24 || !question25 || !question26 || !question27 || !question28 || !question29) {
        alert("Пожалуйста, ответьте на все вопросы!");
        return;
    }

    const answers = {
        question1: question1.value,
        question2: question2.value,
        question3: question3.value,
        question4: question4.value,
        question5: question5.value,
        question6: question6.value,
        question7: question7.value,
        question8: question8.value,
        question9: question9.value,
        question10: question10.value,
        question11: question11.value,
        question12: question12.value,
        question13: question13.value,
        question14: question14.value,
        question15: question15.value,
        question16: question16.value,
        question17: question17.value,
        question18: question18.value,
        question19: question19.value,
        question20: question20.value,
        question21: question21.value,
        question22: question22.value,
        question23: question23.value,
        question24: question24.value,
        question25: question25.value,
        question26: question26.value,
        question27: question27.value,
        question28: question28.value,
        question29: question29.value
    };

    localStorage.setItem("quizAnswers", JSON.stringify(answers));


    window.location.href = "results.html";
}

function formatAdvice(advice) {
    return advice.split('. ').join('.<br>'); 
}

function displayResults() {
    const answers = JSON.parse(localStorage.getItem("quizAnswers"));
    if (!answers) {
        alert("Ошибка: Ответы не найдены.");
        return;
    }

    let totalCO2 = 0;
    let ecology_advice = '';
    let water_advice = '';
    let car_advice = '';
    let energy_advice = '';
    let food_advice = '';
    let shop_advice = '';

    
    if (answers.question1 === 'Нет') {
        totalCO2 += 500;
        ecology_advice += "Вы не сортируете мусор, что может привести к высоким выбросам CO₂. Попробуйте начать сортировать! ";
    } else if (answers.question1 === 'Иногда') {
        totalCO2 += 350;
        ecology_advice += "Вы иногда сортируете мусор, но можно улучшить результаты, если будете делать это регулярно. ";
    } else if (answers.question1 === 'Да!') {
        totalCO2 += 100;
        ecology_advice += "Вы сортируете мусор, что снижает выбросы CO₂. Отличная привычка! ";
    }

 
    if (answers.question2 === 'Почти не использую') {
        totalCO2 += 100;
        ecology_advice += " Попробуйте заменить одноразовые предметы на многоразовые — это поможет уменьшить выбросы CO₂. ";
    } else if (answers.question2 === 'Стараюсь заменять') {
        totalCO2 += 75;
        ecology_advice += " Вы стараетесь использовать многоразовые изделия — это снижает выбросы CO₂, продолжайте в том же духе. ";
    } else if (answers.question2 === 'На постоянной основе') {
        totalCO2 += 50;
        ecology_advice += " Вы активно используете многоразовые изделия, что значительно снижает выбросы CO₂. Отлично! ";
    }

    if (answers.question3 === "Никогда") {
        totalCO2 += 100;
        ecology_advice += " Советуем вам заменить бумажные счета и чеки на электронные версии. Это сократит количество ненужной бумаги, а сдача макулатуры станет следующим логичным шагом.";
    } else if (answers.question3 === 'Иногда') {
        totalCO2 += 75;
        ecology_advice += " Установите в доме отдельную коробку для ненужных бумаг и газет. Как только она заполнится — сдавайте в пункт переработки. Это удобно и помогает природе!";
    } else if (answers.question3 === 'Регулярно') {
        totalCO2 += 50;
        ecology_advice += " Молодец, что регулярно сдаёте макулатуру! Это важный шаг к уменьшению количества мусора и сохранению природных ресурсов.";
    }

    if (answers.question4 === "Никогда") {
        totalCO2 += 100;
        ecology_advice += " Ещё мы рекомендуем рекомендуем вам сначала продать ненужные вещи на сайтах вторичного использования (Avito, Vinted). Если продать не удалось — сдайте в фонд или переработку.";
    } else if (answers.question4 === 'Иногда') {
        totalCO2 += 75;
        ecology_advice += " Раз в сезон проводите чистку гардероба — если вещь не надевалась год, вероятно, она уже не понадобится. Отдайте её тому, кто действительно в ней нуждается.";
    } else if (answers.question4 === 'Регулярно') {
        totalCO2 += 50;
        ecology_advice += " Прекрасно, что вы регулярно отдаёте вещи на благотворительность! Это помогает не только людям, но и способствует меньшему потреблению и переработке.";
    }

    if (answers.question5 === "Регулярно") {
        totalCO2 += 300;
        ecology_advice += " Вы часто разжигаете огонь/камин. Если есть возможность, установите печь с высокой энергоэффективностью или используйте брикеты из отходов древесины, которые выделяют меньше CO₂.";
    } else if (answers.question5 === 'Иногда') {
        totalCO2 += 200;
        ecology_advice += " Вы иногда разжигаете костер/камин. Используйте сухие дрова, они горят эффективнее и выделяют меньше дыма. А ещё лучше — попробуйте альтернативное отопление, например, газовые или инфракрасные обогреватели.";
    } else if (answers.question5 === 'Почти никогда') {
        totalCO2 += 100;
        ecology_advice += " Вы редко разжигаете костер/камин, отлично! Если все же разжигаете то, используйте экологичные дрова, чтобы минимизировать выбросы.";
    }

    if (answers.question6 === "20+ минут") {
        totalCO2 += 150;
    } else if (answers.question6 === '10–20 минут') {
        totalCO2 += 100;
    } else if (answers.question6 === 'До 10 минут') {
        totalCO2 += 50;
    }

    if (answers.question7 === "Нет") {
        totalCO2 += 100;
        water_advice += " Вы не выключаете воду при умывании, но представьте, что за каждую минуту работы крана вы теряете бутылку воды! Выключение крана — маленький шаг, но с большим эффектом.";
    } else if (answers.question7 === 'Иногда') {
        totalCO2 += 75;
        water_advice += " Вы не всегда выключаете воду при умывании. Поставьте стакан с водой рядом с раковиной. Используйте его для полоскания рта вместо того, чтобы оставлять кран открытым."
    } else if (answers.question7 === 'Да, всегда') {
        totalCO2 += 50;
        water_advice += " Вы выключаете воду при умывании, отлично! Такие маленькие привычки имеют огромное значение для экономии ресурсов.";
    }

    if (answers.question8 === "Регулярно") {
        totalCO2 += 100;
        ecology_advice += " Вы любитель одноразовых бутылок и сумок, начните с одной многоразовой бутылки. Она прослужит годами, а ещё можно выбрать красивый дизайн, который будет приятно носить с собой.";
    } else if (answers.question8 === 'Иногда') {
        totalCO2 += 75;
        ecology_advice += " Проведите эксперимент: попробуйте месяц без пластиковых бутылок. Варианты замены: фильтр для воды дома, многоразовая бутылка или покупка напитков в стекле.";
    } else if (answers.question8 === 'Почти никогда') {
        totalCO2 += 50;
        ecology_advice += " Вы не пользуетесь одноразовыми бутылками, супер! Использование многоразовых бутылок и сумок — это важный шаг к сокращению пластиковых отходов.";
    }

    if (answers.question9 === "Часто (1000+ км в месяц)") {
        totalCO2 += 300;
        car_advice += " Начните использовать экологичный транспорт — например, электрический автомобиль или переходите на велосипед для коротких поездок. Это сократит количество выбросов CO₂ и будет полезно для вашего здоровья.";
    } else if (answers.question9 === 'Иногда (200–1000 км в месяц)') {
        totalCO2 += 200;
        car_advice += " Попробуйте уменьшить количество поездок на автомобиле, особенно, если можно использовать общественный транспорт или велосипед. Каждая поездка на метро или автобусе — это шаг к меньшим выбросам!";
    } else if (answers.question9 === 'Редко (0–200 км в месяц)') {
        totalCO2 += 100;
        car_advice += " Вы уже уменьшаете выбросы CO₂, используя личный автомобиль только в необходимых случаях, отлично!";
    }

    if (answers.question10 === "6+ раз") {
        totalCO2 += 200;
        car_advice += " Вместо такси, используйте общественный транспорт или велосипед для коротких поездок. Также, вы можете рассмотреть “Эко Такси” для быстрого передвижения без вреда природе!";
    } else if (answers.question10 === '4–5 раз') {
        totalCO2 += 150;
        car_advice += " Вместо такси, попробуйте использовать карпулинг (поездки с друзьями или коллегами). Это снизит выбросы CO₂ на каждого человека и может быть удобным!";
    } else if (answers.question10 === '0–3 раза') {
        totalCO2 += 100;
        car_advice += " Ваше потребление такси не влияет на состояние озонового слоя, это классно!";
    }

    if (answers.question11 === "Регулярно") {
        totalCO2 += 150;
        car_advice += " Отлично, что вы часто выбираете метро, но подумайте, не можете ли вы уменьшить частоту поездок, например, с помощью пеших прогулок на более короткие расстояния.";
    } else if (answers.question11 === 'Иногда') {
        totalCO2 += 100;
        car_advice += " Вы уже делаете большой вклад в экологию, если выбираете метро! Продолжайте его использовать, а для коротких поездок подумайте о пеших прогулках или велосипеде.";
    } else if (answers.question11 === 'Редко') {
        totalCO2 += 50;
    }

    if (answers.question12 === "Регулярно") {
        totalCO2 += 100;
        car_advice += " Вместо автобусов, на короткие расстояния, попробуйте ходить пешком или использовать велосипед. Это сократит ваши выбросы CO₂ и улучшит физическую форму!";
    } else if (answers.question12 === 'Иногда') {
        totalCO2 += 70;
        car_advice += " Отлично, что вы используете общественный транспорт! Попробуйте в будущем комбинировать поездки на автобусе с велосипедами или пешими прогулками для ещё большего снижения выбросов.";
    } else if (answers.question12 === 'Редко') {
        totalCO2 += 40;
        car_advice += " Вы редко пользуетесь на автобусом/троллейбусом, молодец!"
    }

    if (answers.question13 === "Редко") {
        car_advice += " Ещё мы советуем вам рассмотреть переход на экологичный транспорт — электросамокат или велосипед. Это поможет не только снизить выбросы CO₂, но и улучшить ваше здоровье.";
    } else if (answers.question13 === 'Иногда') {
        totalCO2 -= 50;
        car_advice += " Также попробуйте использовать экологичный транспорт, как основное средство передвижения для коротких поездок. Электрический самокат или велосипед могут быть удобными и экологичными альтернативами.";
    } else if (answers.question13 === 'Регулярно') {
        totalCO2 += 100;
    }

    if (answers.question14 === "Мало, пользуюсь транспортом") {
        totalCO2 += 50;
        car_advice += " Вы редко ходите пешком, начните с кратких прогулок. Замените короткие поездки на ходьбу пешком, чтобы снизить выбросы CO₂ и побудить себя к здоровому образу жизни.";
    } else if (answers.question14 === 'Иногда') {
        totalCO2 -= 25;
        car_advice += " Вы иногда предпочитаете ходьбу пешком поездкам, это хорошо! Поднимите свою физическую активность и почаще ходите на короткие расстояния. Это не только уменьшит выбросы CO₂, но и улучшит вашу физическую форму!";
    } else if (answers.question14 === 'Регулярно, не пользуюсь авто') {
        totalCO2 -= 75;
        car_advice += " Также круто, что вы заменяете автомобиль прогулками пешком! Это полезно не только для природы, но и для вас самих.";
    }

    if (answers.question15 === "0 раз") {
        totalCO2 += 0;
        car_advice += " Вы не пользуетесь самолётами, замечательно! Путешествия без перелётов — это лучший способ сэкономить углерод.";
    } else if (answers.question15 === '1–2 раза') {
        totalCO2 += 125;
    } else if (answers.question15 === '3+ раза') {
        totalCO2 += 200;
        car_advice += " Постарайтесь снизить количество полётов на самолёте. Попробуйте использовать поезда для поездок на средние расстояния — это снизит выбросы CO₂ и позволит увидеть больше интересных мест по пути.";
    }

    if (answers.question16 === "Нет, не употребляю данный продукт") {
        totalCO2 += 0;
    } else if (answers.question16 === 'В принципе - нет, но иногда употребляю') {
        totalCO2 += 600;
    } else if (answers.question16 === 'Да, ем на постоянной основе') {
        totalCO2 += 1000;
        food_advice += " Попробуйте постепенно снижать потребление красного мяса, например, замените его на птицу или рыбу, чтобы снизить углеродный след вашего рациона.";
    }

    if (answers.question17 === "Стараюсь избегать молочных продуктов") {
        totalCO2 += 0;
    } else if (answers.question17 === 'Редко ем') {
        totalCO2 += 350;
        food_advice += " Советуем вам перейти на растительные альтернативы молочным продуктам — такие, как миндальное молоко";
    } else if (answers.question17 === 'Часто ем') {
        totalCO2 += 500;
        food_advice += " Рекомендуем вам сократить потребление молочных продуктов. Вместо молока выбирайте растительные напитки, а вместо сыра попробуйте аналогичные продукты на растительной основе.";
    }

    if (answers.question18 === "0–3 раза в месяц") {
        totalCO2 += 25;
    } else if (answers.question18 === '4–8 раз в месяц') {
        totalCO2 += 100;
        food_advice += " Попробуйте вместо полуфабрикатов, готовить самим с использованием свежих продуктов. Это будет намного полезнее!";
    } else if (answers.question18 === '8+ раз в месяц') {
        totalCO2 += 150;
        food_advice += " Также мы советуем вам сократить потребление фастфуда и полуфабрикатов, лучше готовьте сами с использованием свежих ингредиентов!";
    }

    if (answers.question19 === "0–1 гаджет в год") {
        totalCO2 += 100;
    } else if (answers.question19 === '2–3 гаджета в год') {
        totalCO2 += 200;
        shop_advice += " Вместо покупок нового гаджета, попробуйте воспользоваться услугами ремонта или гарантии от компаний, чтобы продлить срок службы старого";
    } else if (answers.question19 === '3+ гаджета в год') {
        totalCO2 += 300;
        shop_advice += " Прежде чем обновлять технику, убедитесь, что старое устройство уже не выполняет все ваши задачи.";
    }

    if (answers.question20 === "Мало, стараюсь экономить и слежу за потреблением") {
        totalCO2 += 100;
        energy_advice += " Вы экономите электричество и не напрасно! Природа вас благодарит 🙂";
    } else if (answers.question20 === 'Обычное количество (выключаю свет, когда выхожу из комнаты и т. д.)') {
        totalCO2 += 350;
        energy_advice += " Мы рекомендуем вам перейти на LED-лампы и использовать технику с классом энергоэффективности А+ и выше. Это поможет снизить потребление энергии без потери комфорта.";
    } else if (answers.question20 === 'Не слежу/много') {
        totalCO2 += 500;
        energy_advice += " Начните отключать приборы из розеток, когда не используете их. Это простой шаг, который может уменьшить ваше энергопотребление на 10–15%!";
    }

    if (answers.question21 === "0–1") {
        totalCO2 += 25;
    } else if (answers.question21 === '2-3') {
        totalCO2 += 75;
    } else if (answers.question21 === '3+') {
        totalCO2 += 150;
        energy_advice += " Еще советуем проверить, какие приборы действительно должны быть постоянно включены в розетку. Может, телевизор и ноутбук работают впустую? Отключение ненужных устройств может сократить выбросы CO₂ и снизить ваш счёт за электричество.";
    }

    if (answers.question22 === "Централизованное отопление") {
        totalCO2 += 150;
    } else if (answers.question22 === 'Газовый котёл') {
        totalCO2 += 300;
    } else if (answers.question22 === 'Дровяная печь/камин') {
        totalCO2 += 500;
    } else if (answers.question22 === 'Я не знаю') {
        totalCO2 += 300;
    }

    if (answers.question23 === "Везде") {
        totalCO2 += 25;
    } else if (answers.question23 === 'На некоторых кранах/душах') {
        totalCO2 += 75;
        water_advice += " А ещё мы думаем, что установка водосберегающих насадки на все краны — отличная идея, они уменьшают расход воды без потери комфорта и позволяют экономить до 50% воды!";
    } else if (answers.question23 === 'Нет') {
        totalCO2 += 100;
        water_advice += " Ещё мы хотим вам напомнить, что установка водосберегающей насадки на душ — это минутное дело, а экономия воды и электричества (на её нагрев) будет значительной";
    } else if (answers.question23 === 'Я не знаю') {
        totalCO2 += 75;
    }

     if (answers.question24 === "Не имею подобный вид вещей") {
        totalCO2 += 50;
    } else if (answers.question24 === 'Меньшая часть/половина') {
        totalCO2 += 75;
        shop_advice += " Попробуйте придерживаться правила «медленной моды» — вместо покупки новых вещей инвестируйте в качественную одежду, которая прослужит дольше.";
    } else if (answers.question24 === 'Большая часть') {
        totalCO2 += 100;
        shop_advice += " Попробуйте придерживаться правила «медленной моды» — вместо покупки новых вещей инвестируйте в качественную одежду, которая прослужит дольше.";
    } else if (answers.question24 === 'Я не знаю') {
        totalCO2 += 75;
    }

    if (answers.question25 === "Большинство") {
        totalCO2 -= 200;
    } else if (answers.question25 === 'Меньшая часть/половина') {
        totalCO2 -= 100;
        energy_advice += " И еще: постепенно заменяйте обычные лампочки на LED-аналоги — они служат в 10 раз дольше и снижают потребление электроэнергии!";
    } else if (answers.question25 === 'Нет, не использую') {
        totalCO2 += 200
        energy_advice += " И как насчёт того, чтобы заменить хотя бы одну лампочку на энергосберегающую и посчитать экономию на счетах за электричество. Возможно, это вас приятно удивит!";
    } else if (answers.question25 === 'Я не знаю') {
        totalCO2 += 100;
    }

    if (answers.question26 === "Полная система очистки") {
        totalCO2 -= 200;
    } else if (answers.question26 === 'Фильтр для питьевой воды') {
        totalCO2 -= 100;
        water_advice += " Вы поставили фильтр для питьевой воды, отличный шаг! Не забудьте также использовать фильтры для душа, чтобы сократить потребление неочищенной воды";
    } else if (answers.question26 === 'Нет, не использую') {
        totalCO2 += 100
        water_advice += " Кстати, еще мы советуем вам установить просто фильтр для воды, ведь он помогает снизить потребность в бутилированной воде и уменьшить выбросы CO₂.";
    } else if (answers.question26 === 'Я не знаю') {
        totalCO2 += 50;
    }

    if (answers.question27 === "Регулярно") {
        totalCO2 -= 200;
    } else if (answers.question27 === 'Иногда') {
        totalCO2 -= 50;
        ecology_advice += " Вы не очень часто участвуете в субботниках, попробуйте вовлекать друзей и коллег в экологические акции. Вместе это не только полезнее, но и веселее!";
    } else if (answers.question27 === 'Никогда') {
        totalCO2 += 100
        ecology_advice += " Вы не любитель субботников, но начните с малого — например, уберите мусор в парке рядом с домом. Возможно, это вдохновит вас на более активное участие в экодвижении";
    }

    if (answers.question28 === "0–5 вещей") {
        totalCO2 += 50;
    } else if (answers.question28 === '6–15 вещей') {
        totalCO2 += 100;
        shop_advice += " А ещё мы предлагаем устроить эксперимент — месяц без новых покупок. Это поможет осознанно подойти к выбору вещей и снизить углеродный след.";
    } else if (answers.question28 === '15+ вещей') {
        totalCO2 += 150
        shop_advice += " А ещё мы предлагаем вам новую стратегию «одна новая вещь — одна на переработку». Так ваш гардероб станет осознаннее, а окружающая среда — чище.";
    }

    if (answers.question29 === "Газовая") {
        totalCO2 += 200;
        energy_advice += " Ну и используйте сковороды и кастрюли с толстым дном — они нагреваются быстрее и сокращают расход электроэнергии.";

    } else if (answers.question29 === 'Электрическая') {
        totalCO2 += 100;
        energy_advice += " Ну и попробуйте готовить на среднем или малом огне — это экономит газ и снижает выбросы CO₂.";
    } else if (answers.question29 === 'Индукционная') {
        totalCO2 += 50;
    }

    document.getElementById("co2_amount").textContent = totalCO2;
    localStorage.setItem("co2", totalCO2.toString());
    const co2Level = totalCO2 < 3070 ? 'Низкий' : totalCO2 < 5000 ? 'Средний' : 'Высокий';
    document.getElementById("co2_level").textContent = co2Level;
    localStorage.setItem("co2_level", co2Level);
    document.getElementById("ecology_advice").innerHTML = ecology_advice.split('. ').join('.<br>');
    document.getElementById("water_advice").innerHTML = water_advice.split('. ').join('.<br>');
    document.getElementById("energy_advice").innerHTML = energy_advice.split('. ').join('.<br>');
    document.getElementById("food_advice").innerHTML = food_advice.split('. ').join('.<br>');
    document.getElementById("car_advice").innerHTML = car_advice.split('. ').join('.<br>');
    document.getElementById("shop_advice").innerHTML = shop_advice.split('. ').join('.<br>');
}

if (window.location.pathname.includes("results.html")) {
    displayResults();
}

function redirectToRegistration() {
    window.location.href = "registration.html";
}


function loginUser() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    fetch(`https://sheetdb.io/api/v1/nje0wxphytbp8/search?login=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const user = data[0];
                localStorage.setItem("user", JSON.stringify({ username: user.login, password: user.password }));
                if (user.quizAnswers) {
                    localStorage.setItem("quizAnswers", user.quizAnswers);
                }
                if (user.co2) {
                    localStorage.setItem("co2", user.co2);
                }
                if (user.level) {
                    localStorage.setItem("co2_level", user.level);
                }
                alert("Вход выполнен успешно!");
                window.location.href = "profile.html";
            } else {
                alert("Неверный логин или пароль!");
            }
        });
}

function registerUser() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const co2 = localStorage.getItem("co2") || "0";
        const co2Level = localStorage.getItem("co2_level") || "-";
        const quizAnswers = localStorage.getItem("quizAnswers") || "";
        const date = new Date().toISOString().split('T')[0];
    
        localStorage.setItem("user", JSON.stringify({ username, password }));
    
        fetch('https://sheetdb.io/api/v1/nje0wxphytbp8', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                data: [
                    { 
                        login: username, 
                        password: password, 
                        co2: co2, 
                        level: co2Level, // обязательно!
                        quizAnswers: quizAnswers, // обязательно!
                        date: date 
                    }
                ]
            })
        })
        .then(() => {
            alert("Регистрация успешна!");
            window.location.href = "profile.html";
        })
        .catch((error) => {
            console.error("Ошибка при регистрации:", error);
            alert("Ошибка при регистрации. Попробуйте снова.");
        });
    }

function displayProfilePage() {
    const user = JSON.parse(localStorage.getItem("user"));
    let answers = localStorage.getItem("quizAnswers");
    if (answers) {
        try {
            answers = JSON.parse(answers);
        } catch {
            answers = null;
        }
    }
    const co2 = localStorage.getItem("co2") || "0";
    const co2Level = localStorage.getItem("co2_level") || "-";
    if (user && answers) {
        document.getElementById("profileUsername").textContent = user.username;
        document.getElementById("co2_amount").textContent = co2;
    document.getElementById("co2_level").textContent = co2Level;
        const recommendationsForm = document.getElementById("recommendationsForm");
        recommendationsForm.innerHTML = ""; // Clear previous


        const advices = [];
        for (let i = 1; i <= 29; i++) {
            const answer = answers[`question${i}`];
            const advice = answerToAdvice[i]?.[answer];
            if (advice) {
                advices.push(advice);
            }
        }


        advices.forEach((advice, idx) => {
            const label = document.createElement("label");
            label.style.display = "block";
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "adviceCheckbox";
            checkbox.value = advice;
            checkbox.classList.add("advice-checkbox");
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(" " + advice));
            recommendationsForm.appendChild(label);
        });


        let percentDiv = document.getElementById("completionPercent");
        if (!percentDiv) {
            percentDiv = document.createElement("div");
            percentDiv.id = "completionPercent";
            percentDiv.style.marginTop = "20px";
            recommendationsForm.parentNode.appendChild(percentDiv);
        }

  
        function updatePercent() {
            const checkboxes = recommendationsForm.querySelectorAll('.advice-checkbox');
            const total = checkboxes.length;
            const done = Array.from(checkboxes).filter(cb => cb.checked).length;
            const percent = total === 0 ? 0 : Math.round((done / total) * 100);
            percentDiv.textContent = `Выполнено: ${done} из ${total} (${percent}%)`;
        }

        updatePercent();

        recommendationsForm.addEventListener('change', updatePercent);
    } else {
        alert("Ошибка: данные пользователя или ответы не найдены.");
    }
} 

if (window.location.pathname.includes("profile.html")) {
    displayProfilePage();
}
function triggerFileInput() {
    document.getElementById('fileInput').click();
}

function changePhoto(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profilePhoto').style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
    }
}

function toggleComplete(item) {
    item.classList.toggle('completed');
}
document.addEventListener('DOMContentLoaded', () => {
    const profilePhoto = document.getElementById('profilePhoto');
    const photoUpload = document.getElementById('photoUpload');
    const changePhotoButton = document.getElementById('changePhotoButton');


    changePhotoButton.addEventListener('click', () => {
        photoUpload.click();
    });

    photoUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePhoto.style.backgroundImage = `url(${e.target.result})`;
            };
            reader.readAsDataURL(file);
        }
    });
});

