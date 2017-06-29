function parse(str) {
	if (typeof str !== 'string') {
		return {};
	}

	var paramObj = {};
	var paramArr = decodeURI(str).split('&');
	for (var i = 0; i < paramArr.length; i++) {
		var tmp = paramArr[i].split('=');
		var key = tmp[0];
		var value = tmp[1] || true;

		// 处理数字：很多人忽略这里的类型判断，布尔值传给 Number 也会解析出数字
		if (typeof value === 'string' && isNaN(Number(value)) === false) {
			value = Number(value);
		}

		if (typeof paramObj[key] === 'undefined') {
			paramObj[key] = value;
		} else {
			var newValue = Array.isArray(paramObj[key]) ? paramObj[key] : [paramObj[key]];
			newValue.push(value);
			paramObj[key] = newValue;
		}
	}

	return paramObj;
}