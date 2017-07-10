function popup(url, width, height, options) {
	width = width || '80%';
	height = height || '70%';

	if (typeof width == 'string' && width.length > 1 && width.substr(width.length - 1, 1) == '%') width = parseInt(window.screen.width * parseInt(width, 10) / 100, 10);
	if (typeof height == 'string' && height.length > 1 && height.substr(height.length - 1, 1) == '%') height = parseInt(window.screen.height * parseInt(height, 10) / 100, 10);

	if (width < 640) width = 640;
	if (height < 420) height = 420;

	var top = parseInt((window.screen.height - height) / 2, 10), left = parseInt((window.screen.width - width) / 2, 10);

	options = (options || 'location=no,menubar=no,toolbar=no,dependent=yes,minimizable=no,modal=yes,alwaysRaised=yes,resizable=yes,scrollbars=yes') +
		',width=' + width +
		',height=' + height +
		',top=' + top +
		',left=' + left;

	var popupWindow = window.open('', null, options, true);

	if (!popupWindow) return false;
	try {
		var ua = navigator.userAgent.toLowerCase();
		if (ua.indexOf(' chrome/') == -1) {
			popupWindow.moveTo(left, top);
			popupWindow.resizeTo(width, height);
		}
		popupWindow.focus();
		popupWindow.location.href = url;
	} catch (e) {
		popupWindow = window.open(url, null, options, true);
	}
	return true;
}