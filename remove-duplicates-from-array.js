Array.prototype.unique = function() {
	var n = [];
	for (var i = 0; i < this.length; i++) {
		if (n.indexOf(this[i]) == -1) n.push(this[i]);
	}
	return n;
}


Array.prototype.unique = function() {
	var n = [];
	for (var i = 0; i < this.length; i++) {
		if (this.indexOf(this[i]) == i) n.push(this[i]);
	}
	return n;
}


Array.prototype.unique = function() {
	return this.filter((v, i) => this.indexOf(v) === i)
}

let unique = a => [...new Set(a)];


Array.prototype.unique = function() {
	var n = {},
		r = [];
	for (var i = 0; i < this.length; i++) {
		if (!n[this[i]]) {
			n[this[i]] = true;
			r.push(this[i]);
		}
	}
	return r;
}


Array.prototype.unique = function() {
	this.sort();
	var re = [this[0]];
	for (var i = 1; i < this.length; i++) {
		if (this[i] !== re[re.length - 1]) {
			re.push(this[i]);
		}
	}
	return re;
}