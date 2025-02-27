window.addEventListener('load', function () {
  clearLoc();

  const btnDownload = document.querySelector('#btnDownload'),
        textHoliday = document.querySelector('#textHoliday'),
        segment = document.querySelector('#segment'),
        btnGeneration = document.querySelector('.generation'),
        showBanner = document.querySelector('#showBanner'),
        holidayCategory = document.querySelector('#holidayCategory'),
        holiday = document.querySelector('#holiday'),
        holidayDiv = document.querySelector('#holidayDiv'),
        form = document.querySelector('#form'),
        card = document.querySelector('#card'),
        cardColor = document.querySelector('#cardColor'),
        cardBanner = document.querySelector('#cardBanner'),
        cardAppeal = document.querySelector('#cardAppeal'),
        cardMainText = document.querySelector('#cardMainText'),
        cardSignature = document.querySelector('#cardSignature'),
        cardHeaderBreak = document.querySelector('#cardHeader'),
        grade = document.querySelector('#grade');
        grade.style.display = "none";

  //в объект content добавить контент открытки только для предусмотренных сегментов. обязательные ключи - firstImgSrc, imgAlt, h1, text,
  //firstImgSrc - ссылка на баннер
  //imgAlt - alt-текст для баннера
  //h1 - заголовок открытки, обязательное добавление переноса '/n' при длинных словах 
  // text - основной текст открытки. \n\n - отделяются абзацы и переносы строк, неразрывный пробел - \u00A0
  const content = {
    birthday_v1: {
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/birthday%5Fv1.png',
        imgAlt: 'С днём рождения!',
        h1: 'С днём рождения!',
        text: 'Желаем достижения высот, открытия горизонтов и\u00A0воплощения\u00A0самых\u00A0смелых идей и проектов. Пусть\u00A0каждый\u00A0день\u00A0приносит новые возможности и\u00A0будет\u00A0наполнен\u00A0гармонией и благополучием.\n\nПоздравляем!',
        bg: 'background: linear-gradient(180deg, #259C98 43.65%, #1E5B6A 100%); color: #FFFFFF;'
      },
    },
    birthday_v2: {
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/birthday%5Fv2.png',
        imgAlt: 'С днём рождения!',
        h1: 'С днём рождения!',
        text: 'Желаем достижения высот, открытия горизонтов и\u00A0воплощения\u00A0самых\u00A0смелых идей и проектов. Пусть\u00A0каждый\u00A0день\u00A0приносит новые возможности и\u00A0будет\u00A0наполнен\u00A0гармонией и благополучием.\n\nПоздравляем!',
        bg: 'background: linear-gradient(180deg, #259C98 43.65%, #1E5B6A 100%); color: #FFFFFF;'
      },
    },
    birthday_v3: {
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/birthday%5Fv3.png',
        imgAlt: 'С днём рождения!',
        h1: 'С днём рождения!',
        text: 'Желаем достижения высот, открытия горизонтов и\u00A0воплощения\u00A0самых\u00A0смелых идей и проектов. Пусть\u00A0каждый\u00A0день\u00A0приносит новые возможности и\u00A0будет\u00A0наполнен\u00A0гармонией и благополучием.\n\nПоздравляем!',
        bg: 'background: linear-gradient(180deg, #339189 43.65%, #00766C 100%); color: #FFFFFF;'
      },
    },
    birthday_v4: {
      pro: {
        banner: 'single',
        firstImgSrc: 'https://eimage.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/birthday%5Fv4.png',
        imgAlt: 'С днём рождения!',
        h1: 'С днём рождения!',
        text: 'Желаем достижения высот, открытия горизонтов и\u00A0воплощения\u00A0самых\u00A0смелых идей и проектов. Пусть\u00A0каждый\u00A0день\u00A0приносит новые возможности и\u00A0будет\u00A0наполнен\u00A0гармонией и благополучием.\n\nПоздравляем!',
        bg: 'background: linear-gradient(180deg, #339189 43.65%, #00766C 100%); color: #FFFFFF;'
      },
    },
    birthday_v5: {
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/birthday%5Fv5.png',
        imgAlt: 'С днём рождения!',
        h1: 'С днём рождения!',
        text: 'Желаем достижения высот, открытия горизонтов и\u00A0воплощения\u00A0самых\u00A0смелых идей и проектов. Пусть\u00A0каждый\u00A0день\u00A0приносит новые возможности и\u00A0будет\u00A0наполнен\u00A0гармонией и благополучием.\n\nПоздравляем!',
        bg: 'background: linear-gradient(180deg, #339189 43.65%, #00766C 100%); color: #FFFFFF;'
      },
    },
    birthdayOld: {
      rgs: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/img/birthday%2Ddkk%2Drgs%2Dmin.png',
        imgAlt: 'С Днём рождения!',
        h1: 'С Днём рождения!',
        text: 'Пусть задуманные планы реализуются, заветные желания исполняются, а успех сопутствует любым начинаниям. Желаем\u00A0крепкого здоровья и\u00A0стойкости, благополучия и\u00A0бесконечной энергии. Спасибо, что\u00A0Вы\u00A0с\u00A0нами. \n\nСегодня Ваш день!',
        bg: 'background: linear-gradient(180deg, #FFFFFF 29.61%, #EFF3FE 66.64%); color: #353F47;'
      },
      dkk: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/img/birthday%2Ddkk%2Drgs%2Dmin.png',
        imgAlt: 'С Днём рождения!',
        h1: 'С Днём рождения!',
        text: 'Пусть задуманные планы реализуются, заветные желания исполняются, а успех сопутствует любым начинаниям. Желаем\u00A0крепкого здоровья и\u00A0стойкости, благополучия и\u00A0бесконечной энергии. Спасибо, что\u00A0вы\u00A0с\u00A0нами. \n\nСегодня ваш день!',
        bg: 'background: linear-gradient(180deg, #FFFFFF 29.61%, #EFF3FE 66.64%); color: #353F47;'
      }
    },
    companyBd: {
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/img/companyID%2Dksb.png',
        imgAlt: 'С юбилеем компании!',
        h1: 'С юбилеем \nкомпании!',
        text: 'Преданность любимому делу, поиск эффективных решений, амбициозные цели и\u00A0слаженная работа команды\u00A0— залог вашего\u00A0успеха! Мы\u00A0гордимся сотрудничеством с\u00A0вами, желаем\u00A0неиссякаемой энергии и\u00A0достижения новых высот!',
        bg: 'background:  linear-gradient(180deg, #00766C 60.47%, #0C5059 100%); color: #FFFFFF;'
      },
      dkk: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/img/companyID%2Ddkk.png',
        imgAlt: 'С юбилеем компании!',
        h1: 'С юбилеем \nкомпании!',
        text: 'Преданность любимому делу, поиск эффективных решений, амбициозные\u00A0цели и\u00A0слаженная работа команды\u00A0— залог вашего\u00A0успеха! Мы\u00A0гордимся сотрудничеством с\u00A0вами, желаем\u00A0неиссякаемой энергии и\u00A0достижения новых высот!',
        bg: 'background:  linear-gradient(179deg, #FFF 46.49%, #EFF3FE 92.80%); color: #333F48;'
      }
    },

    //2025
    china_NY_v1 : {
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/postcard%5Fdesigner/holidays/img/2025/china%5FNY%5Fv1.png',
        imgAlt: 'Китайский Новый год 22.01 (Вариант 1)',
        h1: 'С Китайским Новым годом!',
        text: 'В год Зелёной Деревянной Змеи желаем процветания, успешной\u00A0реализации\u00A0каждой инициативы, надёжных партнёров\u00A0и\u00A0лояльных клиентов.\n\nСпасибо, что выбираете Сбер в качестве\nбизнес-талисмана!',
        bg: 'background:  linear-gradient(136deg, #00766C 60.47%, #339189 100%); color: #FFFFFF;'
      },
    },
    china_NY_v2 : {
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/postcard%5Fdesigner/holidays/img/2025/china%5FNY%5Fv2.png',
        imgAlt: 'Китайский Новый год 22.01 (Вариант 2)',
        h1: 'С Китайским Новым годом!',
        text: 'Змея — символ обновления и трансформации. Желаем,\u00A0чтобы\u00A0этот год принёс много новых клиентов и\u00A0партнёров,\u00A0масштабных проектов и\u00A0выгодных сделок.\n\nУспехов, благополучия и крепкого здоровья!',
        bg: 'background:  linear-gradient(136deg, #00766C 60.47%, #339189 100%); color: #FFFFFF;'
      },
    },
    china_NY_v3 : {
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/postcard%5Fdesigner/holidays/img/2025/china%5FNY%5Fv3.png',
        imgAlt: 'Китайский Новый год 22.01 (Вариант 3)',
        h1: 'С Китайским Новым годом!',
        text: 'Желаем энергии, силы и процветания. Пусть год Змеи принесёт\u00A0множество\u00A0новых\u00A0побед, надёжных партнёров и\u00A0щедрых клиентов.\n\nСпасибо, что остаётесь со Сбером!',
        bg: 'background:  linear-gradient(136deg, #00766C 60.47%, #339189 100%); color: #FFFFFF;'
      },
    },
    china_NY_v4 : {
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/postcard%5Fdesigner/holidays/img/2025/china%5FNY%5Fv4.png',
        imgAlt: 'Китайский Новый год 22.01 (Вариант 4)',
        h1: 'С Китайским Новым годом!',
        text: 'Желаем энергии, силы и процветания. Пусть год Змеи принесёт\u00A0множество\u00A0новых\u00A0побед, надёжных партнёров и\u00A0щедрых клиентов.\n\nСпасибо, что остаётесь со Сбером!',
        bg: 'background:  linear-gradient(136deg, #00766C 60.47%, #339189 100%); color: #FFFFFF;'
      },
    },
    cnr_china_NY: {
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/cnr%5FnewYear.png',
        imgAlt: '祝您蛇年快乐!',
        h1: '祝您蛇年快乐!',
        text: '蛇年新春的脚步渐进，如同明媚的阳光洒落，\n愿您生活的每一处都充满 喜乐平安! 值此新年之际,\n祝您事业辉煌腾达, 业绩长虹! 祝愿您蛇年 宏图大展、\n及家人新春快乐, 顺遂安康!',
        bg: 'background:  linear-gradient(136deg, #00766C 60.47%, #339189 100%); color: #FFFFFF;'
      },
    },
    februar_23_v1: {
      biz: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/mmb/23%5Fmmb%5F1.png',
        imgAlt: 'С Днём защитника Отечества!',
        h1: 'С Днём\nзащитника Отечества!',
        text: 'Быть предпринимателем — призвание, которое требует\u00A0смелости\u00A0и\u00A0дисциплины. Желаем, чтобы ваши\u00A0лидерские\u00A0качества всегда приносили успех и\u00A0открывали\u00A0новые горизонты.\n\nКрепкого здоровья и больших побед!',
        bg: 'background:  linear-gradient(74deg, #31C2A7 21.47%, #107F8C 75%); color: #FFFFFF;'
      },
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/23%5Fksb%5F1.png',
        imgAlt: 'С Днём защитника Отечества!',
        h1: 'С Днём\nзащитника Отечества!',
        text: 'Быть лидером — значит всегда проявлять высочайшую\u00A0ответственность, несгибаемую волю и\u00A0железную решимость. Желаем, чтобы ваш управленческий\u00A0стиль всегда оставался примером для\u00A0партнёров,\u00A0контрагентов и\u00A0коллег.\n\nКрепкого здоровья и масштабных открытий!',
        bg: 'background:  linear-gradient(136deg, #00766C 60.47%, #339189 100%); color: #FFFFFF;'
      },
    },
    februar_23_v2: {
      biz: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/mmb/23%5Fmmb%5F2.png',
        imgAlt: 'С Днём защитника Отечества!',
        h1: 'С Днём\nзащитника Отечества!',
        text: 'Развитие своего дела — это маршрут, полный открытий.\u00A0Пусть\u00A0ваше лидерство всегда сопровождается\u00A0высокими результатами, а\u00A0близкие\u00A0будут надёжной опорой на пути\nк\u00A0успеху.\n\nЖелаем покорения всех вершин!',
        bg: 'background:  linear-gradient(74deg, #31C2A7 21.47%, #107F8C 75%); color: #FFFFFF;'
      },
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/23%5Fksb%5F2.png',
        imgAlt: 'С Днём защитника Отечества!',
        h1: 'С Днём\nзащитника Отечества!',
        text: 'Ответственность, дисциплина и твёрдость убеждений\u00A0—\u00A0качества, которые помогают вам принимать\u00A0правильные\u00A0решения. Желаем\u00A0всегда\u00A0оставаться лидером и быть примером\u00A0для\u00A0партнёров, коллег и родных.\n\nКрепкого здоровья и больших побед!',
        bg: 'background:  linear-gradient(136deg, #00766C 60.47%, #339189 100%); color: #FFFFFF;'
      },
    },
    avia_v1: {
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/avia%5Fv1.png',
        imgAlt: 'С Днём гражданской авиации!',
        h1: 'С Днём гражданской\nавиации!',
        text: 'Спасибо, что делаете полёты безопасными и комфортными. Ваша\u00A0ответственность,\u00A0внимательность, профессионализм — залог\u00A0спокойствия миллионов пассажиров.\n\nПусть работа приносит удовольствие, а небо будет ясным!',
        bg: 'background:  linear-gradient(136deg, #00766C 60.47%, #339189 100%); color: #FFFFFF;'
      },
    },
    avia_v2: {
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/avia%5Fv2.png',
        imgAlt: 'С Днём гражданской авиации!',
        h1: 'С Днём гражданской\nавиации!',
        text: 'Вы выполняете важную работу, давая крылья мечтам и\u00A0соединяя\u00A0людей. Благодаря вам легко преодолеть любые расстояния.\n\nЖелаем профессиональных высот и новых достижений!',
        bg: 'background:  linear-gradient(136deg, #00766C 60.47%, #339189 100%); color: #FFFFFF;'
      },
    },
    avia_v3: {
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/avia%5Fv3.png',
        imgAlt: 'С Днём гражданской авиации!',
        h1: 'С Днём гражданской\nавиации!',
        text: 'Спасибо за труд, профессионализм и преданность небу. Благодаря\u00A0вам\u00A0мы можем отправляться в путешествия, зная, что\u00A0наша\u00A0безопасность и комфорт в надёжных руках.\n\nПусть страсть к авиации приведёт к новым свершениям!',
        bg: 'background:  linear-gradient(136deg, #00766C 60.47%, #339189 100%); color: #FFFFFF;'
      },
    },
    avia_v4: {
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/avia%5Fv4.png',
        imgAlt: 'С Днём гражданской авиации!',
        h1: 'С Днём гражданской\nавиации!',
        text: 'Разгон, взлёт — и впереди целая вселенная! Создавая надёжную\u00A0и\u00A0современную отрасль, вы прокладываете путь для\u00A0будущих поколений авиаторов.\n\nПусть ваши достижения станут прочным фундаментом для\u00A0новых\u00A0свершений!',
        bg: 'background:  linear-gradient(136deg, #00766C 60.47%, #339189 100%); color: #FFFFFF;'
      }
    },
    mart_mmb: {
      biz: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/mmb/8%5Fmarch%5Fmmb%5F1.png',
        imgAlt: 'С 8 Марта!',
        h1: 'С 8 Марта!',
        text: 'Ваш профессионализм, смелость ставить высокие цели\u00A0и\u00A0принимать нестандартные решения вдохновляют.\u00A0Как и первые весенние цветы, вы\u00A0делаете\u00A0мир более красивым и удивительным. Пусть\u00A0рядом\u00A0будут те, кто поддерживает и любит, а\u00A0все\u00A0мечты превращаются в результаты.\n\nЯрких побед и солнечного настроения!',
        bg: 'background:  linear-gradient(74deg, #31C2A7 21.47%, #107F8C 75%); color: #FFFFFF;'
      }
    },
    mart_ksb: {
      pro: {
        banner: 'single',
        firstImgSrc: 'https://eimage.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/bnr%5F8%5Fmarch%5Fksb%5F3.png',
        imgAlt: 'С 8 Марта!',
        h1: 'С 8 Марта!',
        text: 'Ваш профессионализм, смелость ставить высокие цели и\u00A0принимать\u00A0нестандартные решения вдохновляют. Как\u00A0и\u00A0первые\u00A0весенние цветы, вы\u00A0делаете\u00A0мир более красивым и\u00A0удивительным. Пусть рядом будут те, кто поддерживает\u00A0и\u00A0любит, а\u00A0все\u00A0мечты превращаются в результаты.\n\nЯрких побед и солнечного настроения!',
        bg: 'background:  linear-gradient(136deg, #00766C 60.47%, #339189 100%); color: #FFFFFF;'
      },
    },
    mart_8_v2: {
      biz: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/mmb/8%5Fmarch%5Fmmb%5F2.png',
        imgAlt: 'С 8 Марта!',
        h1: 'С 8 Марта!',
        text: 'Вы превращаете мечты в цели, а цели — в\u00A0достижения,\u00A0ведь всё возможно, если вложить в\u00A0дело\u00A0сердце и заботу. Восхищаемся вашей мудростью,\u00A0красотой\u00A0и\u00A0внутренней силой, желаем ярких\u00A0идей\u00A0и\u00A0высоких результатов.\n\nПусть в душе всегда будет праздник весны!',
        bg: 'background:  linear-gradient(74deg, #31C2A7 21.47%, #107F8C 75%); color: #FFFFFF;'
      },
      pro: {
        banner: 'single',
        firstImgSrc: 'https://eimage.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/bnr%5F8%5Fmarch%5Fksb%5F2.png',
        imgAlt: 'С 8 Марта!',
        h1: 'С 8 Марта!',
        text: 'Вы превращаете мечты в цели, а цели — в\u00A0достижения,\u00A0ведь всё возможно, если вложить в\u00A0дело\u00A0сердце\u00A0и\u00A0заботу. Восхищаемся вашей мудростью,\u00A0красотой\u00A0и\u00A0внутренней силой, желаем ярких\u00A0идей\u00A0и\u00A0высоких результатов.\n\nПусть в душе всегда будет праздник весны!',
        bg: 'background:  linear-gradient(136deg, #00766C 60.47%, #339189 100%); color: #FFFFFF;'
      },
    },
    mart_8_v3: {
      biz: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/mmb/8%5Fmarch%5Fmmb%5F3.png',
        imgAlt: 'С 8 Марта!',
        h1: 'С 8 Марта!',
        text: 'Создавать, развивать, мотивировать — вы умеете делать\u00A0всё\u00A0с\u00A0пониманием и заботой. Спасибо за\u00A0бережное\u00A0отношение к миру и мудрые решения. Пусть\u00A0в\u00A0душе\u00A0всегда будет гармония и весна.\n\nЖелаем процветания любимому делу и личного\nсчастья!',
        bg: 'background:  linear-gradient(74deg, #31C2A7 21.47%, #107F8C 75%); color: #FFFFFF;'
      },
      pro: {
        banner: 'single',
        firstImgSrc: 'https://eimage.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/bnr%5F8%5Fmarch%5Fksb%5F1.png',
        imgAlt: 'С 8 Марта!',
        h1: 'С 8 Марта!',
        text: 'Создавать, развивать, мотивировать — вы умеете делать\u00A0всё\u00A0с\u00A0пониманием и\u00A0заботой. Спасибо за\u00A0бережное отношение к\u00A0миру и\u00A0мудрые решения. Пусть\u00A0в\u00A0душе всегда будет гармония\u00A0и\u00A0весна.\n\nЖелаем процветания любимому делу и личного\nсчастья!',
        bg: 'background:  linear-gradient(136deg, #00766C 60.47%, #339189 100%); color: #FFFFFF;'
      },
    },
    mart_8_v4: {
      biz: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/mmb/8%5Fmarch%5Fmmb%5F4%2Dmin.png',
        imgAlt: 'С 8 Марта!',
        h1: 'С 8 Марта!',
        text: 'Яркая, креативная, мудрая — это всё вы. Продолжайте\u00A0говорить\u00A0жизни «да» и изменять мир.\u00A0Пусть\u00A0путь\u00A0к\u00A0новым вершинам будет увлекательным\u00A0и\u00A0лёгким, как начало весны. Удивляйте\u00A0себя\u00A0и\u00A0всех вокруг!\n\nЖелаем воплощения самых невероятных идей!',
        bg: 'background:  linear-gradient(74deg, #31C2A7 21.47%, #107F8C 75%); color: #FFFFFF;'
      },
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/bnr%5F8%5Fmarch%5Fksb%5F4.png',
        imgAlt: 'С 8 Марта!',
        h1: 'С 8 Марта!',
        text: 'Яркая, креативная, мудрая — это всё вы. Продолжайте\u00A0говорить\u00A0жизни «да» и\u00A0изменять мир.\u00A0Пусть\u00A0путь к\u00A0новым вершинам будет увлекательным и лёгким, как начало весны. Удивляйте\u00A0себя\u00A0и\u00A0всех вокруг!\n\nЖелаем воплощения самых невероятных идей!',
        bg: 'background:  linear-gradient(136deg, #00766C 60.47%, #339189 100%); color: #FFFFFF;'
      },
    },
    mart_8_v5: {
      biz: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/mmb/8%5Fmarch%5Fmmb%5F5.png',
        imgAlt: 'С 8 Марта!',
        h1: 'С 8 Марта!',
        text: 'Создавать, развивать, мотивировать — вы умеете делать\u00A0всё\u00A0с\u00A0пониманием и заботой. Спасибо за\u00A0бережное\u00A0отношение к миру и мудрые решения. Пусть\u00A0в\u00A0душе\u00A0всегда будет гармония и весна.\n\nЖелаем процветания любимому делу и личного\nсчастья!',
        bg: 'background:  linear-gradient(74deg, #31C2A7 21.47%, #107F8C 75%); color: #FFFFFF;'
      },
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/bnr%5F8%5Fmarch%5Fksb%5F5.png',
        imgAlt: 'С 8 Марта!',
        h1: 'С 8 Марта!',
        text: 'Создавать, развивать, мотивировать — вы умеете делать\u00A0всё\u00A0с\u00A0пониманием и\u00A0заботой. Спасибо за\u00A0бережное\u00A0отношение к\u00A0миру\u00A0и\u00A0мудрые решения. Пусть\u00A0в\u00A0душе всегда будет гармония и\u00A0весна.\n\nЖелаем процветания любимому делу и личного\nсчастья!',
        bg: 'background:  linear-gradient(136deg, #00766C 60.47%, #339189 100%); color: #FFFFFF;'
      },
    },
    mart_8_v6: {
      biz: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/mmb/8%5Fmarch%5Fmmb%5F6.png',
        imgAlt: 'С 8 Марта!',
        h1: 'С 8 Марта!',
        text: 'Вы превращаете мечты в цели, а цели — в\u00A0достижения,\u00A0ведь\u00A0всё возможно, если вложить в\u00A0дело\u00A0сердце\u00A0и\u00A0заботу. Восхищаемся вашей мудростью,\u00A0красотой\u00A0и\u00A0внутренней силой, желаем ярких\u00A0идей\u00A0и\u00A0высоких результатов.\n\nПусть в душе всегда будет праздник весны!',
        bg: 'background:  linear-gradient(74deg, #31C2A7 21.47%, #107F8C 75%); color: #FFFFFF;'
      },
      pro: {
        banner: 'single',
        firstImgSrc: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/bnr%5F8%5Fmarch%5Fksb%5F6.png',
        imgAlt: 'С 8 Марта!',
        h1: 'С 8 Марта!',
        text: 'Вы превращаете мечты в цели, а цели — в\u00A0достижения,\u00A0ведь всё\u00A0возможно, если вложить в\u00A0дело\u00A0сердце и\u00A0заботу. Восхищаемся вашей мудростью,\u00A0красотой\u00A0и\u00A0внутренней силой,\u00A0желаем ярких\u00A0идей и высоких результатов.\n\nПусть в душе всегда будет праздник весны!',
        bg: 'background:  linear-gradient(136deg, #00766C 60.47%, #339189 100%); color: #FFFFFF;'
      },
    }
  }

  // добаляем обьест из content в зависимости от сегмента, какой сегмент нам нужен 
  // prof - профессиональные
  // other - другое
  const list = {
    prof: {
      biz: [],
      pro: [],
      rgs: [],
      dkk: []
    },
    other: {
      biz: [
        'mart_mmb', 
        'mart_8_v2',
        'mart_8_v3',
        'mart_8_v4',
        'mart_8_v5',
        'mart_8_v6'
      ],
      pro: [
        'companyBd', 
        'birthday_v1', 
        'birthday_v2', 
        'birthday_v3', 
        'birthday_v4', 
        'birthday_v5',
        'mart_ksb',
        'mart_8_v2',
        'mart_8_v3',
        'mart_8_v4',
        'mart_8_v5',
        'mart_8_v6'
        ],
        rgs: [],
        dkk: []
    }
  }

  // добавляем название, которое мы хотим видеть в поле выбора праздника
  const names = {
    // 2024 год
    companyBd: 'Юбилей компании',
    birthdayOld: 'День рождения клиента',
    birthday_v1: 'День рождения клиента (Вариант 1)',
    birthday_v2: 'День рождения клиента (Вариант 2)',
    birthday_v3: 'День рождения клиента (Вариант 3)',
    birthday_v4: 'День рождения клиента (Вариант 4)',
    birthday_v5: 'День рождения клиента (Вариант 5)',

    //2025 год
    china_NY_v1: 'Китайский Новый год 29.01 — текст на русском (Вариант 1)',
    china_NY_v2: 'Китайский Новый год 29.01 — текст на русском (Вариант 2)',
    china_NY_v3: 'Китайский Новый год 29.01 — текст на русском (Вариант 3)',
    china_NY_v4: 'Китайский Новый год 29.01 — текст на русском (Вариант 4)',
    cnr_china_NY: 'Китайский Новый год 29.01 — текст на китайском',
    februar_23_v1: 'День защитника Отечества 23.01 (Вариант 1)',
    februar_23_v2: 'День защитника Отечества 23.01 (Вариант 2)',
    avia_v1: 'День гражданской авиации 9.02 (Вариант 1)',
    avia_v2: 'День гражданской авиации 9.02 (Вариант 2)',
    avia_v3: 'День гражданской авиации 9.02 (Вариант 3)',
    avia_v4: 'День гражданской авиации 9.02 (Вариант 4)',
    mart_mmb: 'Международный женский день 08.03 (Вариант 1) &#11088; анимация',
    mart_ksb: 'Международный женский день 08.03 (Вариант 1) &#11088; анимация',
    mart_8_v2: 'Международный женский день 08.03 (Вариант 2)',
    mart_8_v3: 'Международный женский день 08.03 (Вариант 3)',
    mart_8_v4: 'Международный женский день 08.03 (Вариант 4)',
    mart_8_v5: 'Международный женский день 08.03 (Вариант 5)',
    mart_8_v6: 'Международный женский день 08.03 (Вариант 6)',
  }

  // добавление анимации
  document.querySelector('.gif-animate').addEventListener('click', function() {

    var loadingBlock = document.getElementById('loading'); 
    loadingBlock.style.display = 'block';

    const pictureUrl = {
        // добавление название ссылки и ссылку из на gif 
        animation_biz: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/gif/mart%5Fv1%5Fmmb.gif',
        animation_pro: 'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2025/gif/mart%5Fv1%5Fksb.gif',
        // animation_primer: 'ссылка из Sendsay'
    };

    // добавляем проверку и название скачиваемой gif открытки
    if (holiday.value === 'mart_mmb') {
        downloadImage(pictureUrl.animation_biz, 'Международный женский день (MMБ).gif');
    }  else if (holiday.value === 'mart_ksb') {
        downloadImage(pictureUrl.animation_pro, 'Международный женский день (КСБ).gif');
    }  
    
    // else if (holiday.value === 'primer_v1') {
    // downloadImage(pictureUrl.animation_primer, 'День радио.gif');
    // }
  
    function downloadImage(url, fileName) {
      setTimeout(function() {

        fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            loadingBlock.style.display = 'none';
            a.remove();
            window.URL.revokeObjectURL(url);
        })
        .catch(error => {
          loadingBlock.style.display = 'none';
          alert('Ошибка загрузки: ' + error.message);
          });
        }, 2000);

    }
  });


  // добаляем появление кнопки "скачать анимированую открытку" 
  function setAnimate() {
    const grade = document.getElementById("grade");
          grade.classList.add('show');
          grade.style.display = "flex";
  
          // добавить новый ключ сюда:
          const holidays = [
                            'mart_mmb', 
                            'mart_ksb',
                            'novii_v1'
                            // 'primer'
                          ]

    if (!holidays.includes(holiday.value)) {
      grade.style.display = "none";
    }
    return grade;
  }

  function setLocation(curLoc) {
    try {
      history.pushState(null, null, curLoc)
      return
    } catch (e) {}
      location.hash = '#' + curLoc
  }

  function clearLoc() {
    const loc = window.location.href
    const url = loc.split('?')
          console.log(url[0])
    try {
      history.pushState(null, null, url[0])
      return
    } catch (e) {}
    location.hash = '#' + url
  }

  const filterOptions = function (category, segment) {
    const holidays = Object.values(list[category][segment])
    return `<option value="start">Выберите из списка</option>` + holidays.map(holiday => `<option value="${holiday}">${names[holiday]}</option>`).join('')
  }

  function generateContent(holiday, segment) {
    textHoliday.value = content[holiday][segment].text
  }

  function insertBanner(holiday, segment) {
    cardBanner.setAttribute('alt', content[holiday][segment].imgAlt)
    cardHeaderBreak.className = "text-header-break";
    cardHeaderBreak.textContent = content[holiday][segment].h1;
    cardBanner.setAttribute('src', content[holiday][segment].firstImgSrc)
    return cardBanner
  }

  // изменяем обращение 
  function insertText() {
    const cardappealChoose = document.querySelector('#appeal').value,
          textHolidayChoose = document.querySelector('#textHoliday').value,
          signatureChoose = document.querySelector('#signature').value,

          cardLangChoose = document.querySelector('#appealChi').value,
          cardMartChoose = document.querySelector('#mart').value,
          signatureChiChoose = document.querySelector('#signatureChi').value;

          cardAppeal.textContent = cardappealChoose
          cardMainText.textContent = textHolidayChoose
          cardSignature.textContent = signatureChoose


          // праздники у которых есть новое обращение - Поздравляем с праздником!
          const holidayMart = [
            'mart_mmb', 
            'mart_ksb', 
            'mart_8_v2',
            'mart_8_v3',
            'mart_8_v4',
            'mart_8_v5',
            'mart_8_v6',
            // 'primer'
          ]
 
          if (holidayMart.includes(holiday.value)) {
            cardAppeal.textContent = cardMartChoose
          } 

          card.classList.remove('hide');
          card.classList.add('show');
          return card
  }

  function setBackground(holiday, segment) {
    cardColor.setAttribute('style', content[holiday][segment].bg)
  }

  function isEmpty(categoryTarget, segmentTarget) {
    if (list[categoryTarget][segmentTarget].length === 0) {
      alert('Нет доступных праздников')
      clearForm()
    }
  }

  function clearForm() {
    textHoliday.value = '';
    holidayDiv.style.display = 'none';
    showBanner.style.display = 'none';

    document.querySelectorAll('input[name="holiday"]').forEach(elem => {
      elem.checked = false;
    })
    document.querySelectorAll('input[name="banner"]').forEach(elem => {
      elem.checked = false;
    })
    // document.querySelector('#changeText').innerHTML = 'Шаг 2. Тип праздника';
  }

  segment.addEventListener('change', () => {
    clearForm()
    clearLoc()
  })

  holidayCategory.addEventListener('click', (e) => {

    if (segment.value === 'start') {
      alert('Выберите сегмент');
      document.querySelectorAll('input[name="holiday"]').forEach(elem => {
        elem.checked = false;
      })
      return false;
    }

    isEmpty(e.target.value, segment.value)

    document.querySelectorAll('input[name="holiday"]').forEach(elem => {
      if (elem.checked) {
        const categoryValue = e.target.value
        const segmentValue = segment.value

        holiday.innerHTML = filterOptions(categoryValue, segmentValue)
        holidayDiv.style.display = 'block';
        // document.querySelector('#changeText').innerHTML = 'Шаг 2. Выберите праздник';
      }
    })
  })

  holiday.addEventListener('change', (e) => {

    // праздники у которых изменилось обращение
    const onMart = [
      'mart_mmb',
      'mart_ksb',
      'mart_8_v2',
      'mart_8_v3',
      'mart_8_v4',
      'mart_8_v5',
      'mart_8_v6',
      // 'primer'
    ]

    if (onMart.includes(holiday.value)) {
      document.querySelector('#appeal').style.display = 'none';
      document.querySelector('#mart').style.display = 'block';
      document.querySelector('#signatureChi').style.display = 'none';
      document.querySelector('#appealChi').style.display = 'none';
      document.querySelector('#signature').style.display = 'block';
    } else {
      document.querySelector('#appeal').style.display = 'block';
      document.querySelector('#mart').style.display = 'none';
      document.querySelector('#appealChi').style.display = 'none';
      document.querySelector('#signatureChi').style.display = 'none';
      document.querySelector('#signature').style.display = 'block';
    }

    generateContent(holiday.value, segment.value)
  })

  bannerForm.addEventListener('change', (e) => {
    btnGeneration.classList.remove('btn-download-disabled');
  })

  btnGeneration.classList.remove('btn-download-disabled');

  btnGeneration.addEventListener('click', (e) => {
    e.preventDefault();

    if (showBanner.style.display === 'block' && (!bannerInput1.checked && !bannerInput2.checked)) {
      alert('Выберите баннер');
      return false
    }

    insertBanner(holiday.value, segment.value);
    insertText();
    setBackground(holiday.value, segment.value);
    btnDownload.classList.remove('btn-download-disabled', 'btn-secondary');
    btnDownload.classList.add('download');
    btnDownload.removeAttribute('disabled');
    setAnimate();
  });

  form.onsubmit = (e) => {
    e.preventDefault()

    const curLoc = `?download=${segment.value}_${holiday.value}&segment=${segment.value}&holiday=${holiday.value}`;
    setLocation(curLoc)

    let scan = document.querySelector("#scan");

    html2canvas(scan, {
      scale: 4,
      useCORS: true,
      logging: true,
      backgroundColor: null,
    }).then(canvas => {

      const nameString = `${names[holiday.value]}`
      const [firstName] = nameString.split(' &');

      var a = document.createElement('a');
      var url = canvas.toDataURL('image/png');
      a.target = '_blank';
      a.download = firstName + '.png';
      a.href = url;
      a.click();
    });
  }
})