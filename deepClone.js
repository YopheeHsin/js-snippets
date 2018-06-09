function deepClone(obj) {
	var newObj = obj.constructor === Array ? [] : {};
	// var newObj = Array.isArray(obj) ? [] : {};
	if (typeof obj !== 'object') {
		return;
	} else if (window.JSON) {
		newObj = JSON.parse(JSON.stringify(obj));
	} else {
		for (var k in obj) {
			newObj[k] = typeof obj[k] === 'object' ? deepClone(obj[k]) : obj[k];
		}
	}
	return newObj;
}