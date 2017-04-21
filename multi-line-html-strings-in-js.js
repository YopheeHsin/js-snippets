Function.prototype.getMultiLine = function() {
	var lines = new String(this);
	lines = lines.substring(lines.indexOf('/*') + 3, lines.lastIndexOf('*/'));
	return lines;
}

var htmlStrFn = function() {
	/*
	<div class="weui-mask"></div>
	<div class="weui-dialog">
		<div class="weui-dialog__bd">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
		<div class="weui-dialog__ft">
			<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">知道了</a>
		</div>
	</div>
	*/
}

var htmlStr = htmlStrFn.getMultiLine();