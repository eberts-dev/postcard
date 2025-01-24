window.addEventListener('load', function () {
	clearLoc()

	const btnDownload = document.querySelector('#btnDownload'),
		textHoliday = document.querySelector('#textHoliday'),
		segment = document.querySelector('#segment'),
		btnGeneration = document.querySelector('.generation'),
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
		cardHeaderBreak = document.querySelector('#cardHeader')

	const content = {
		birthday_v1: {
			rgs: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/birthday%5Fv1.png',
				imgAlt: 'С днём рождения!',
				h1: 'С днём рождения!',
				text: 'Желаем достижения высот, открытия горизонтов и\u00A0воплощения\u00A0самых\u00A0смелых идей и проектов. Пусть\u00A0каждый\u00A0день\u00A0приносит новые возможности и\u00A0будет\u00A0наполнен\u00A0гармонией и благополучием.\n\nПоздравляем!',
				bg: 'background: linear-gradient(180deg, #259C98 43.65%, #1E5B6A 100%); color: #FFFFFF;',
			},
		},
		birthday_v2: {
			rgs: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/birthday%5Fv2.png',
				imgAlt: 'С днём рождения!',
				h1: 'С днём рождения!',
				text: 'Желаем достижения высот, открытия горизонтов и\u00A0воплощения\u00A0самых\u00A0смелых идей и проектов. Пусть\u00A0каждый\u00A0день\u00A0приносит новые возможности и\u00A0будет\u00A0наполнен\u00A0гармонией и благополучием.\n\nПоздравляем!',
				bg: 'background: linear-gradient(180deg, #259C98 43.65%, #1E5B6A 100%); color: #FFFFFF;',
			},
		},
		companyBd: {
			pro: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/img/companyID%2Dksb.png',
				imgAlt: 'С юбилеем компании!',
				h1: 'С юбилеем \nкомпании!',
				text: 'Преданность любимому делу, поиск эффективных решений, амбициозные цели и\u00A0слаженная работа команды\u00A0— залог вашего\u00A0успеха! Мы\u00A0гордимся сотрудничеством с\u00A0вами, желаем\u00A0неиссякаемой энергии и\u00A0достижения новых высот!',
				bg: 'background:  linear-gradient(180deg, #00766C 60.47%, #0C5059 100%); color: #FFFFFF;',
			},
			dkk: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/img/companyID%2Ddkk.png',
				imgAlt: 'С юбилеем компании!',
				h1: 'С юбилеем \nкомпании!',
				text: 'Преданность любимому делу, поиск эффективных решений, амбициозные\u00A0цели и\u00A0слаженная работа команды\u00A0— залог вашего\u00A0успеха! Мы\u00A0гордимся сотрудничеством с\u00A0вами, желаем\u00A0неиссякаемой энергии и\u00A0достижения новых высот!',
				bg: 'background:  linear-gradient(179deg, #FFF 46.49%, #EFF3FE 92.80%); color: #333F48;',
			},
		},
		medical_v1: {
			pro: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/medical%5Fv1.png',
				imgAlt: 'День медицинского работника',
				h1: 'С Днём медицинского\nработника!',
				text: 'Благодарим за неоценимый вклад в развитие отечественной медицины.\u00A0Ваши\u00A0управленческие\u00A0решения помогают сохранять\u00A0и\u00A0поддерживать\u00A0здоровье миллионов людей, а\u00A0ответственный\u00A0бизнес-подход\u00A0обеспечивает\u00A0наращивание передовых\u00A0медицинских\u00A0технологий.\n\nМы очень ценим сотрудничество с вами и желаем\nреализации всех проектов!',
				bg: 'background: linear-gradient(169deg, #0D4E59 62.052%, #113753 92.052%); color: #FFFFFF',
			},
		},
		medical_v2: {
			pro: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/medical%5Fv2.png',
				imgAlt: 'День медицинского работника',
				h1: 'С Днём медицинского\nработника!',
				text: 'Благодарим за неоценимый вклад в развитие отечественной медицины.\u00A0Ваши\u00A0управленческие\u00A0решения помогают сохранять\u00A0и\u00A0поддерживать\u00A0здоровье миллионов людей, а\u00A0ответственный\u00A0бизнес-подход\u00A0обеспечивает\u00A0наращивание передовых\u00A0медицинских\u00A0технологий.\n\nМы очень ценим сотрудничество с вами и желаем\nреализации всех проектов!',
				bg: 'background: linear-gradient(169deg, #0D4E59 62.052%, #113753 92.052%); color: #FFFFFF',
			},
		},
		finance_v1: {
			pro: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/finance%5Fv1.png',
				imgAlt: 'День финансиста',
				h1: 'C Днём финансиста!',
				text: 'Ваша работа — пример высочайшего мастерства в\u00A0управлении\u00A0денежными\u00A0потоками, освоении рынков и\u00A0поиске\u00A0возможностей\u00A0для\u00A0роста\u00A0бизнеса. Своим примером вы\u00A0показываете\u00A0огромную\u00A0роль финансовой культуры в\u00A0построении\u00A0устойчивой\u00A0экономики.\n\nЖелаем ликвидных активов и надёжных партнёров!',
				bg: 'background: linear-gradient(140deg, #00766C 26%, #339189 100%); color: #FFFFFF',
			},
		},
		finance_v2: {
			pro: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/finance%5Fv2.png',
				imgAlt: 'День финансиста',
				h1: 'C Днём финансиста!',
				text: 'Ваша работа — пример высочайшего мастерства в\u00A0управлении\u00A0денежными\u00A0потоками, освоении рынков и\u00A0поиске\u00A0возможностей\u00A0для\u00A0роста\u00A0бизнеса. Своим примером вы\u00A0показываете\u00A0огромную\u00A0роль финансовой культуры в\u00A0построении\u00A0устойчивой\u00A0экономики.\n\nЖелаем ликвидных активов и надёжных партнёров!',
				bg: 'background: linear-gradient(140deg, #00766C 26%, #339189 100%); color: #FFFFFF',
			},
		},
		wood_v1: {
			pro: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/wood%5Fv1.png',
				imgAlt: 'День работников леса',
				h1: 'C Днём работников леса!',
				text: 'Лес — достояние нашей страны. Спасибо, что сохраняете этот\u00A0ценный\u00A0ресурс,\u00A0помогаете\u00A0его приумножать и\u00A0на\u00A0каждом\u00A0этапе\u00A0производства придерживаетесь самых высоких\u00A0технологических\u00A0стандартов.\n\nПусть «зелёный фонд» растёт вместе с вашим бизнесом!',
				bg: 'background: linear-gradient(140deg, #00766C 26%, #339189 100%); color: #FFFFFF',
			},
		},
		wood_v2: {
			pro: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/wood%5Fv2.png',
				imgAlt: 'День работников леса',
				h1: 'C Днём работников леса!',
				text: 'Лес — достояние нашей страны. Спасибо, что сохраняете этот\u00A0ценный\u00A0ресурс,\u00A0помогаете\u00A0его приумножать и\u00A0на\u00A0каждом\u00A0этапе\u00A0производства придерживаетесь самых высоких\u00A0технологических\u00A0стандартов.\n\nПусть «зелёный фонд» растёт вместе с вашим бизнесом!',
				bg: 'background: linear-gradient(140deg, #00766C 26%, #339189 100%); color: #FFFFFF',
			},
		},
		econom_v1: {
			rgs: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/econom%5Fv1%5Frgs.png',
				imgAlt: 'С Днём экономиста!',
				h1: 'С Днём экономиста!',
				text: 'Вы — архитектор финансовой устойчивости и инициатор стратегических решений, которые обеспечивают динамичное\u00A0развитие\u00A0национальной суверенной экономики. Благодаря\u00A0Вам\u00A0ресурсы\u00A0всегда используются с\u00A0максимальным\u00A0эффектом.\n\nСпасибо за вклад в наше общее будущее!',
				bg: 'background: linear-gradient(0.00deg, rgb(239, 243, 254),rgb(255, 255, 255) 49.052%); color: #353F47',
			},
		},
		econom_v2: {
			rgs: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/econom%5Fv2%5Frgs.png',
				imgAlt: 'С Днём экономиста!',
				h1: 'С Днём экономиста!',
				text: 'Экономика нашей страны уверенно движется вперёд благодаря\u00A0Вашему\u00A0искусству управления финансовыми потоками.\u00A0Видеть\u00A0за\u00A0рядами цифр бескрайние горизонты возможностей\u00A0–\u00A0уникальная\u00A0способность, которая\nвосхищает.\n\nЖелаем Вам успехов и благополучия!',
				bg: 'background: linear-gradient(0.00deg, rgb(239, 243, 254),rgb(255, 255, 255) 49.052%); color: #353F47',
			},
		},
		urist: {
			dkk: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/urist.png',
				imgAlt: 'C Днём юриста!',
				h1: 'C Днём юриста!',
				text: 'Вы ежедневно вкладываете силы в создание справедливого мира.\u00A0Спасибо,\u00A0что\u00A0ставите защиту интересов людей и\u00A0общества\u00A0превыше\u00A0всего. Пусть работа всегда будет предметом\u00A0гордости\u00A0и\u00A0радости!\n\nЖелаем благополучия и успехов!',
				bg: 'background: linear-gradient(0.00deg, rgb(239, 243, 254),rgb(255, 255, 255) 49.052%); color: #353F47',
			},
		},
		help_v1: {
			rgs: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/universal.png',
				imgAlt: 'C Днём спасателя!',
				h1: 'C Днём спасателя!',
				text: 'Спасение людей и ликвидация чрезвычайных\nситуаций\u00A0–\u00A0призвание,\u00A0требующее доблести, отваги и\u00A0мужества.\u00A0Спасибо\u00A0за\u00A0Вашу благородную миссию, которая\u00A0сохраняет\u00A0жизни.\n\nЖелаем всегда оставаться героем!',
				bg: 'background: linear-gradient(0.00deg, rgb(239, 243, 254),rgb(255, 255, 255) 49.052%); color: #353F47',
			},
		},
		help_v2: {
			rgs: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/universal.png',
				imgAlt: 'C Днём спасателя!',
				h1: 'C Днём спасателя!',
				text: 'Вы спасаете жизни, дарите людям будущее и надежду, становитесь\u00A0опорой\u00A0в\u00A0самых\u00A0сложных ситуациях. Желание\u00A0помогать\u00A0тем,\u00A0кто\u00A0оказался в беде, вызывает восхищение\u00A0и\u00A0глубочайшую благодарность.\n\nПусть перед Вами всегда отступают огонь, вода и медные\nтрубы!',
				bg: 'background: linear-gradient(0.00deg, rgb(239, 243, 254),rgb(255, 255, 255) 49.052%); color: #353F47',
			},
		},

		turizm_v1: {
			pro: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/turizm%5Fv1.png',
				imgAlt: 'C Новым годом!',
				h1: 'C Новым годом!',
				text: 'Яркие эмоции, открытия и маршруты — вы дарите самое ценное.\u00A0Держитесь\u00A0намеченного пути и следуйте захватывающим\u00A0поворотам\u00A0судьбы.\n\nЖелаем гостеприимного нового года и покорения финансовых\u00A0вершин!',
				bg: 'background: radial-gradient(#339189 26%, #00766C 95%); color: #FFFFFF',
			},
		},
		turizm_v2: {
			pro: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/turizm%5Fv2.png',
				imgAlt: 'C Новым годом!',
				h1: 'C Новым годом!',
				text: 'Яркие эмоции, открытия и маршруты — вы дарите самое ценное.\u00A0Держитесь\u00A0намеченного пути и следуйте захватывающим\u00A0поворотам\u00A0судьбы.\n\nЖелаем гостеприимного нового года и покорения финансовых\u00A0вершин!',
				bg: 'background: radial-gradient(#339189 26%, #00766C 95%); color: #FFFFFF',
			},
		},
		energo_v1: {
			pro: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/energo%5Fv1.png',
				imgAlt: 'C Новым годом!',
				h1: 'C Новым годом!',
				text: 'Вы освещаете и согреваете дома людей так же, как Новый год\u00A0—\u00A0сердца\u00A0вокруг. Пусть сбудутся все желания, а работа даёт\u00A0огромный\u00A0приток энергии!',
				bg: 'background: radial-gradient(#339189 26%, #00766C 95%); color: #FFFFFF',
			},
		},
		energo_v2: {
			pro: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/energo%5Fv2.png',
				imgAlt: 'C Новым годом!',
				h1: 'C Новым годом!',
				text: 'Вы освещаете и согреваете дома людей так же, как Новый год\u00A0—\u00A0сердца\u00A0вокруг. Пусть сбудутся все желания, а работа даёт\u00A0огромный\u00A0приток энергии!',
				bg: 'background: radial-gradient(#339189 26%, #00766C 95%); color: #FFFFFF',
			},
		},
		mstroy_v1: {
			pro: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/mstroy%5Fv1.png',
				imgAlt: 'C Новым годом!',
				h1: 'C Новым годом!',
				text: 'Идеи и мечты – главный двигатель машиностроения. Пусть\u00A0этот\u00A0волшебный праздник вдохновит вас на создание уникальных\u00A0технологий,\u00A0которые сделают жизнь каждого человека\u00A0лучше!',
				bg: 'background: radial-gradient(#339189 26%, #00766C 95%); color: #FFFFFF',
			},
		},
		mstroy_v2: {
			pro: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/mstroy%5Fv2.png',
				imgAlt: 'C Новым годом!',
				h1: 'C Новым годом!',
				text: 'Бой курантов, огни гирлянд, любимые фильмы на экране: наши\u00A0новогодние\u00A0традиции — результат инженерной мысли.\n\nЖелаем, чтобы в новом году технологии и разработки,\nсозданные\u00A0вами, приносили всем радость и высокую прибыль\u00A0компании. Пусть каждый механизм\u00A0работает идеально!',
				bg: 'background: radial-gradient(#339189 26%, #00766C 95%); color: #FFFFFF',
			},
		},
		metal_v1: {
			pro: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/metal%5Fv1.png',
				imgAlt: 'C Новым годом!',
				h1: 'C Новым годом!',
				text: 'Вы создаёте надёжную основу нашего мира и оттачиваете до\u00A0идеала\u00A0каждую\u00A0деталь. Пусть новые проекты в грядущем году\u00A0войдут\u00A0в\u00A0золотой фонд ваших достижений. Богатых\u00A0месторождений\u00A0и\u00A0блестящих идей!',
				bg: 'background: radial-gradient(#339189 26%, #00766C 95%); color: #FFFFFF',
			},
		},
		metal_v2: {
			pro: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/metal%5Fv2.png',
				imgAlt: 'C Новым годом!',
				h1: 'C Новым годом!',
				text: 'Вы успешно переплавляете накопленный опыт в новые возможности\u00A0и\u00A0достижения. Пусть стойкость и упорство сопровождают\u00A0вас\u00A0и\u00A0в\u00A0наступающем году! Блестящих\u00A0и\u00A0прочных\u00A0побед! ',
				bg: 'background: radial-gradient(#339189 26%, #00766C 95%); color: #FFFFFF',
			},
		},
		les_v1: {
			pro: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/les%5Fv1.png',
				imgAlt: 'C Новым годом!',
				h1: 'C Новым годом!',
				text: 'Бескрайние ряды белоснежных елей и записки на бумаге с\u00A0самыми\u00A0тёплыми пожеланиями – неотъемлемая часть этого волшебного\u00A0праздника.\n\nЖелаем, чтобы в новом году ваша забота о природе и\u00A0её\u00A0ресурсах\u00A0дарила радость и приносила высокую чистую\u00A0прибыль!',
				bg: 'background: radial-gradient(#339189 26%, #00766C 95%); color: #FFFFFF',
			},
		},
		les_v2: {
			pro: {
				banner: 'single',
				firstImgSrc:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/2024/les%5Fv2.png',
				imgAlt: 'C Новым годом!',
				h1: 'C Новым годом!',
				text: 'Вы помогаете сохранять и преумножать дары нашей природы,\u00A0обеспечивая\u00A0людей и производства качественными\nматериалами.\n\nЖелаем, чтобы в новом году забота о ресурсах всегда окупалась\u00A0высокой\u00A0прибылью и лояльностью партнёров!',
				bg: 'background: radial-gradient(#339189 26%, #00766C 95%); color: #FFFFFF',
			},
		},
	}

	const list = {
		prof: {
			pro: [
				'medical_v1',
				'medical_v2',
				'finance_v1',
				'finance_v2',
				'wood_v1',
				'wood_v2',
			],
			rgs: ['birthday_v1', 'birthday_v2', 'econom_v1', 'econom_v2'],
			dkk: ['urist'],
		},
		other: {
			pro: [
				'turizm_v1',
				'turizm_v2',
				'energo_v1',
				'energo_v2',
				'metal_v1',
				'metal_v2',
			],
			rgs: ['help_v1', 'help_v2'],
			dkk: ['companyBd'],
		},
	}

	const names = {
		companyBd: 'Юбилей компании',
		birthday_v1: 'День рождения клиента (Вариант 1)',
		birthday_v2: 'День рождения клиента (Вариант 2)',
		medical_v1: 'День медицинского работника 18.06 (Вариант 1)',
		medical_v2: 'День медицинского работника 18.06 (Вариант 2)',
		finance_v1: 'День финансиста 08.09 (Вариант 1)',
		finance_v2: 'День финансиста 08.09 (Вариант 2)',
		wood_v1: 'День работников леса 15.09 (Вариант 1)',
		wood_v2: 'День работников леса 15.09 (Вариант 2)',
		econom_v1: 'День экономиста 11.11 (Вариант 1)',
		econom_v2: 'День экономиста 11.11 (Вариант 2)',

		turizm_v1:
			'Новый год — Tуризм и гостеприимство (Вариант 1) &#11088; + анимация',
		turizm_v2: 'Новый год — Tуризм и гостеприимство (Вариант 2)',

		energo_v1: 'Новый год — Энергетика (Вариант 1)',
		energo_v2: 'Новый год — Энергетика (Вариант 2) &#11088; + анимация',

		metal_v1: 'Новый год — Металлургия (Вариант 1)',
		metal_v2: 'Новый год — Металлургия (Вариант 2) &#11088; + анимация',

		les_v1: 'Новый год — Лесная промышленность (Вариант 1) &#11088; + анимация',
		les_v2: 'Новый год — Лесная промышленность (Вариант 2)',

		urist: 'День юриста 3.12 (Вариант 1)',

		help_v1: 'День спасателя РФ 27.12 (Вариант 1)',
		help_v2: 'День спасателя РФ 27.12 (Вариант 2)',
	}

	const animatePicture = document
		.querySelector('.grade__faq')
		.addEventListener('click', function () {
			const pictureUrl = {
				animation_les:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/animate/build%5Fv2.gif',
				animatiom_mstroy_v1:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/animate/mstroy%5Fv1.gif',
				animatiom_mstroy_v2:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/animate/ny%5Fmaschin.gif',
				animation_turizm_v1:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/animate/turizm%5Fv1.gif',
				animation_energo_v2:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/animate/energo%5Fv2.gif',
				animation_metal_v2:
					'https://image.sendsay.ru/image/sberbank333/test%5Fclientrics/test%5Fconstructor%5Frework/holidays/animate/metal%5Fv2.gif',
			}

			if (holiday.value === 'les_v1') {
				downloadImage(
					pictureUrl.animation_les,
					'Новый год — Лесная промышленность.gif'
				)
			} else if (holiday.value === 'mstroy_v1') {
				downloadImage(
					pictureUrl.animatiom_mstroy_v1,
					'Новый год — Машиностроение (Вариант 1).gif'
				)
			} else if (holiday.value === 'mstroy_v2') {
				downloadImage(
					pictureUrl.animatiom_mstroy_v2,
					'Новый год — Машиностроение (Вариант 2).gif'
				)
			} else if (holiday.value === 'turizm_v1') {
				downloadImage(
					pictureUrl.animation_turizm_v1,
					'Новый год — Tуризм и гостеприимство.gif'
				)
			} else if (holiday.value === 'energo_v2') {
				downloadImage(
					pictureUrl.animation_energo_v2,
					'Новый год — Энергетика.gif'
				)
			} else if (holiday.value === 'metal_v2') {
				downloadImage(
					pictureUrl.animation_metal_v2,
					'Новый год — Металлургия.gif'
				)
			}

			function downloadImage(url, fileName) {
				fetch(url)
					.then(response => response.blob())
					.then(blob => {
						const url = window.URL.createObjectURL(blob)
						const a = document.createElement('a')
						a.href = url
						a.download = fileName
						document.body.appendChild(a)
						a.click()
						a.remove()
						window.URL.revokeObjectURL(url)
					})
					.catch(error => console.error(error))
			}
		})

	function setAnimate() {
		const reminder = document.getElementById('reminder')
		reminder.classList.add('show')
		reminder.style.display = 'flex'

		const holidays = [
			'les_v1',
			'mstroy_v1',
			'mstroy_v2',
			'turizm_v1',
			'energo_v2',
			'metal_v2',
		]

		if (!holidays.includes(holiday.value)) {
			reminder.style.display = 'none'
		}
		return reminder
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
		try {
			history.pushState(null, null, url[0])
			return
		} catch (e) {}
		location.hash = '#' + url[0]
	}

	const filterOptions = function (category, segment) {
		const holidays = Object.values(list[category][segment])
		return (
			`<option value="start">Выберите из списка</option>` +
			holidays
				.map(holiday => `<option value="${holiday}">${names[holiday]}</option>`)
				.join('')
		)
	}

	function generateContent(holiday, segment) {
		textHoliday.value = content[holiday][segment].text
	}

	function insertBanner(holiday, segment) {
		cardBanner.setAttribute('alt', content[holiday][segment].imgAlt)
		cardHeaderBreak.className = 'text-header-break'
		cardHeaderBreak.textContent = content[holiday][segment].h1

		if (
			content[holiday][segment].banner === 'doubled' &&
			bannerInput2.checked
		) {
			cardBanner.setAttribute('src', content[holiday][segment].secondImgSrc)
		} else {
			cardBanner.setAttribute('src', content[holiday][segment].firstImgSrc)
		}
		return cardBanner
	}

	function insertText() {
		const cardappealChoose = document.querySelector('#appeal').value,
			cardLangChoose = document.querySelector('#appealChi').value,
			textHolidayChoose = document.querySelector('#textHoliday').value,
			signatureChoose = document.querySelector('#signature').value,
			signatureChiChoose = document.querySelector('#signatureChi').value

		cardAppeal.textContent = cardappealChoose
		cardMainText.textContent = textHolidayChoose
		cardSignature.textContent = signatureChoose

		if (holiday.value === 'mart_en') {
			cardAppeal.textContent = cardLangChoose
			cardSignature.textContent = signatureChiChoose
		}

		card.classList.remove('hide')
		card.classList.add('show')
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
		textHoliday.value = ''
		holidayDiv.style.display = 'none'

		document.querySelectorAll('input[name="holiday"]').forEach(elem => {
			elem.checked = false
		})
		document.querySelectorAll('input[name="banner"]').forEach(elem => {
			elem.checked = false
		})
		// document.querySelector('#changeText').innerHTML = 'Шаг 2. Тип праздника';
	}

	segment.addEventListener('change', () => {
		clearForm()
		clearLoc()
	})

	holidayCategory.addEventListener('click', e => {
		if (segment.value === 'start') {
			alert('Выберите сегмент')
			document.querySelectorAll('input[name="holiday"]').forEach(elem => {
				elem.checked = false
			})
			return false
		}

		isEmpty(e.target.value, segment.value)

		document.querySelectorAll('input[name="holiday"]').forEach(elem => {
			if (elem.checked) {
				const categoryValue = e.target.value
				const segmentValue = segment.value

				holiday.innerHTML = filterOptions(categoryValue, segmentValue)
				holidayDiv.style.display = 'block'
				document.querySelector('#changeText').innerHTML =
					'Шаг 2. Выберите праздник'
			}
		})
	})

	holiday.addEventListener('change', e => {
		//Добавление подписи после запятой
		if (holiday.value === 'mart_en') {
			document.querySelector('#appeal').style.display = 'none'
			document.querySelector('#signature').style.display = 'none'
			document.querySelector('#appealChi').style.display = 'block'
			document.querySelector('#signatureChi').style.display = 'block'
		}

		generateContent(holiday.value, segment.value)
	})

	btnGeneration.classList.remove('btn-download-disabled')

	btnGeneration.addEventListener('click', e => {
		e.preventDefault()
		insertBanner(holiday.value, segment.value)
		insertText()
		setBackground(holiday.value, segment.value)
		btnDownload.classList.remove('btn-download-disabled', 'btn-secondary')
		btnDownload.classList.add('download')
		btnDownload.removeAttribute('disabled')
		setAnimate(animatePicture)
	})

	//скриншот открытки
	form.onsubmit = e => {
		e.preventDefault()

		const curLoc =
			`?` +
			`download=` +
			segment.value +
			`_` +
			holiday.value +
			`&` +
			`segment=` +
			segment.value +
			`&` +
			`holiday=` +
			holiday.value
		setLocation(curLoc)

		let scan = document.querySelector('#scan')

		html2canvas(scan, {
			scale: 4,
			useCORS: true,
			logging: true,
			backgroundColor: null,
		}).then(canvas => {
			const nameString = `${names[holiday.value]}.png`
			const [firstName] = nameString.split(' &')

			var a = document.createElement('a')
			var url = canvas.toDataURL('image/png')
			var event = new MouseEvent('click')
			a.target = '_blank'
			a.download = firstName
			a.href = url
			a.dispatchEvent(event)
		})
	}
})
