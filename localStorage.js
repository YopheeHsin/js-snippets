const LOCAL_STORAGE_KEY = 'l_s_k_yophee'

function setStorage(data) {
	window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
}

function getStorage() {
	return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}')
}