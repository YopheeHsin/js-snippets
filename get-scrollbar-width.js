// use jQuery

function getScrollbarWidth() {
	var $scrollDiv = $('<div style="position:absolute; top:-999px; width:50px; height:50px; overflow:scroll;"></div>').appendTo('body');
	var scrollbarWidth = $scrollDiv[0].offsetWidth - $scrollDiv[0].clientWidth;
	$scrollDiv.remove();
	return scrollbarWidth;
}