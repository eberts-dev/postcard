
import './fonts/font.scss'
import { animatePicture } from './js/animatePicture.js'
import './js/cdn.js'
import { content, list, names } from './js/mock.js'
import './styles/style.scss'

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