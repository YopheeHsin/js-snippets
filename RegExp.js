// 汉字算两个字符长
function getStrLen(val) {
	let len = 0
	val = val + ''
	for (let i = 0; i < val.length; i++) {
		let a = val.charAt(i)
		if (a.match(/[^\x00-\xff]/gi) != null) {
			len += 2
		} else {
			len += 1
		}
	}
	return len
}

// 滤掉html中的alt和style
_detail = _detail.replace(/(?:\s+alt\s*=\s*(['"])[^'"]*\1)|(?:\s+style\s*=\s*(['"])[^'"]*\2)/gi, '');