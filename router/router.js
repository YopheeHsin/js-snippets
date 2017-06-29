(function() {
	window.Router = function() {
		var self = this;
		self.hashList = {};
		self.index = null;
		self.key = '!';
		window.onhashchange = function() {
			self.reload();
		};
	};

	// 添加路由
	Router.prototype.add = function(addr, callback) {
		var self = this;
		self.hashList[addr] = callback;
	};

	// 删除路由
	Router.prototype.remove = function(addr) {
		var self = this;
		delete self.hashList[addr];
	};

	// 设置主页地址
	Router.prototype.setIndex = function(index) {
		var self = this;
		self.index = index;
	};

	// 跳转到指定地址
	Router.prototype.go = function(addr) {
		var self = this;
		window.location.hash = '#' + self.key + addr;
	};

	// 重载页面
	Router.prototype.reload = function() {
		var self = this;
		var hash = window.location.hash.replace('#' + self.key, '');
		var addr = hash.split('/')[0];
		var cb = getCb(addr, self.hashList);
		if (cb != false) {
			var arr = hash.split('/');
			arr.shift();
			cb.apply(self, arr);
		} else {
			self.index && self.go(self.index);
		}
	};

	// 开始路由
	Router.prototype.start = function() {
		var self = this;
		self.reload();
	}

	// 获取callback
	function getCb(addr, hashList) {
		for (var key in hashList) {
			if (key == addr) return hashList[key];
		}
		return false;
	}
})();