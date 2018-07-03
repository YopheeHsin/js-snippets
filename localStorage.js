const LOCAL_STORAGE_KEY = 'l_s_k_yophee'

function setStorage(o) {
	const dt = Object.assign({}, getStorage(), {
        ...o
    })
	window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dt))
}

function getStorage() {
	return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}')
}