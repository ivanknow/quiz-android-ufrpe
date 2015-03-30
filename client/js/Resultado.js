ResultadoController  = {
		init:function(){
			var html = "";
			for (t in items) {
				var link = HTMLMaker().createTag("a").attr("href", "iniciarprova.html")
						.attr("class", ProvaController.linkClass).attr(
								'data-transition', 'slide').attr("attrid", items[t].id)
						.content(items[t].titulo);

				var linkIcon = HTMLMaker().createTag("a").attr('data-transition',
						'slide').attr("href", "iniciarprova.html").attr("class",
						ProvaController.linkClass).attr("attrid", items[t].id).content(
						items[t].titulo);

				html += HTMLMaker().createTag("li").content(
						link.show() + linkIcon.show()).show();
			}
		}
};

$(document).on("pagebeforecreate", "#resultado", function() {
	try {
		ResultadoController.init();
	}
	catch(err) {
		alert(err.message);
		window.location = "index.html";
	}
});