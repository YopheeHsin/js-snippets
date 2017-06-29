function parse(str) {
	if (typeof str !== 'string') {
		return {};
	}

	return decodeURI(str).split('&').map(param => {
		const tmp = param.split('=');
		const key = tmp[0];
		let value = tmp[1] || true;
		if (typeof value === 'string' && isNaN(Number(value)) === false) {
			value = Number(value);
		}

		return { key, value };
	}).reduce((params, item) => {
		const { key, value } = item;
		if (typeof params[key] === 'undefined') {
			params[key] = value;
		} else {
			params[key] = Array.isArray(params[key]) ? params[key] : [params[key]];
			params[key].push(value);
		}

		return params;
	}, {});
}