function loadTemplate(views, callback) {
	var deferreds = [];
	$.each(views, function(index, view) {
		deferreds.push($.get('tpl/' + view + '.html', function(data) {
			template[view] = data;
		}));
	});
	$.when.apply(null, deferreds).done(callback);
}

loadTemplate(['HeaderView', 'SidebarView', 'FooterView'], function() {
	console.log('templates ok!');
});