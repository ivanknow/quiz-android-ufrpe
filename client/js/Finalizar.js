FinalizarController  = {
		init:function(){
			// atribui ação ao botão de finalizar
			$(document).off("click", "#btnFinalizarProva").on("click", "#btnFinalizarProva",
					FinalizarController.finalizarProva);
			
			$(document).off("click", "#btnCancelarProva").on("click", "#btnCancelarProva",
					FinalizarController.cancelarProva);
		},
		finalizarProva:function(){
			
		},
		cancelarProva:function(){
			FinalizarController.voltarHome();
		},
		voltarHome:function(){
			window.location = "index.html";
		},
		ajax : function() {
			
			/*var values = {
				beforeSend : function() {
					$.mobile.loading('show');
				}, // Show spinner
				complete : function() {
					$.mobile.loading('hide');
				}, // Hide spinner
				type : "POST",
				dataType : "json",
				url : Values.server + "finalizar/",
				data : {"login":login ,"hash":hash,"prova":ProvaExecucaoController.getRespostas()},
				success : FinalizarController.onSuccess,
				error : FinalizarController.onError
			};
			$.ajax(values);*/
		},

		onSuccess : function(response) {
			// se finalizar for autorizado
			if (response['error'] === 0) {
				alert(Values.mensagemFinalizarSucesso);
			
				FinalizarController.voltarHome();
			} else {
				alert(response['errorMessage']);
			}

		},
		onError : function(e) {
			alert(Values.messageErroServidor);
		},
};

$(document).on("pagebeforecreate", "#finalizar", function() {
	try {
		FinalizarController.init();
	}
	catch(err) {
		alert(err.message);
		window.location = "index.html";
	}
});