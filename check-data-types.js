let utils = {
	types: ['Array', 'Boolean', 'Date', 'Number', 'Function', 'Object', 'RegExp', 'String', 'Window', 'HTMLDocument']
}

utils.types.forEach(c => {
	utils['is' + c] = (type => {
		return obj => Object.prototype.toString.call(obj) === '[object ' + type + ']'
	})(c)
})