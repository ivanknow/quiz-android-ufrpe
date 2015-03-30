ProvaController = new Controller("mobile/prova", "linkProva", "", "attrid");

ProvaController.QuestaoSelecionadaIndex = 0;

ProvaController.setShowScreenList(function(items) {

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

	$("#divListaProva").html(html);
	

});

ProvaController.setShowItem(function(item) {
	$('#tableDadosProva tbody  tr:last td:eq(0)').html(item.titulo);
	$('#tableDadosProva tbody tr:last td:eq(1)').html(item.autor);
	$('#tableDadosProva tbody tr:last td:eq(2)').html(item.data);
	$('#tableDadosProva tbody tr:last td:eq(3)').html(item.questoes.length);
	ProvaExecucaoController.provaSelecionada = item;
	$('#iniciarprova').trigger('create');
	$( "#tableDadosProva" ).table( "rebuild" );
});

$(document).on("pagebeforecreate", "#home", function() {

		ProvaController.init();

});

$(document).on("pagebeforecreate", "#home", function() {

	ProvaController.init();

});

$(document).on("pagebeforecshow", "#home", function() {

	ProvaController.getAll();
	$('#divListaProva').listview('refresh');

});



$(document).on("pagebeforecreate", "#iniciarprova", function() {
	try{
		ProvaController.reloadSelectedItem()
	}catch(err){
		alert(Values.messageErroServidor);
		window.location = "index.html";
	}
});
