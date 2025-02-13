function clearLoc() {
	const loc = window.location.href
	const url = loc.split('?')
	try {
		history.pushState(null, null, url[0])
		return
	} catch (e) {}
	location.hash = '#' + url[0]
}

export { clearLoc }
