function toThousands(num) {
	let result = ''
	num = (num || 0).toString()
	if (num) {
		while (num.length > 3) {
			result = ',' + num.slice(-3) + result
			num = num.slice(0, num.length - 3)
		}
		if (num) {
			result = num + result
		}
	}
	return result
}
