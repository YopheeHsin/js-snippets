// trim
if (!String.prototype.trim) { // IE8-
	String.prototype.trim = function() {
		return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
	};
}

// hasClass
function hasClass(el, cl) {
	return el.classList ?
		el.classList.contains(cl) : // IE10+
		new RegExp('(^| )' + cl + '( |$)', 'gi').test(el.className);
}

// addClass
function addClass(el, cl) {
	if (el.classList)
		el.classList.add(cl); // IE10+
	else if (!(hasClass(el, cl)))
		el.className += ' ' + cl;
}

// removeClass
function removeClass(el, cl) {
	el.classList ?
		el.classList.remove(cl) : // IE10+
		el.className = el.className.replace(new RegExp('(^|\\b)' + cl + '(\\b|$)', 'gi'), '').replace(/[\s\uFEFF\xA0]+/g, ' ').trim();
}

// toggleClass
function toggleClass(el, cl) {
	if (el.classList) {
		el.classList.toggle(cl); // IE10+
	} else {
		var classes = el.className.trim().split(/[\s\uFEFF\xA0]+/);
		// var existingIndex = classes.indexOf(cl); // IE9+
		var existingIndex = -1;
		for (var i = classes.length; i--;) {
			if (classes[i] === cl)
				existingIndex = i;
		}
		if (existingIndex > -1)
			classes.splice(existingIndex, 1);
		else
			classes.push(cl);
		el.className = classes.join(' ');
	}
}