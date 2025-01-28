	import { pictureUrl } from './mock.js'
	
	const animatePicture = document.querySelector('.grade__faq').addEventListener('click', function () {

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

	export { animatePicture }
