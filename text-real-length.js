let textCanvas = null
function textRealLength(str, fontSize = 14) {
	if (!textCanvas) textCanvas = document.createElement('canvas')
	const ctx = textCanvas.getContext('2d')
	ctx.font = `${fontSize}px -apple-system, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Microsoft YaHei", "Source Han Sans SC", "Noto Sans CJK SC", "WenQuanYi Micro Hei", sans-serif`
	return ctx.measureText(str).width
}