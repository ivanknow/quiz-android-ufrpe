ResultController  = {
		init:function(){
		    for(var i = 0;i<ProvaExecucaoController.provaSelecionada.questoes.length;i++){
		        var valor = ProvaExecucaoController.provaSelecionada.questoes[i].resposta||"Sem Resposta";
		        var gabarito = ProvaExecucaoController.provaSelecionada.questoes[i].gabarito||"Sem Resposta";
		        ResultController.addLinhaSuasRespostas(valor);
		        ResultController.addLinhaGabarito(gabarito);
	
		    }
		},
		addLinhaSuasRespostas:function(valor){
		     if(valor === "0"){
		            $("#divListaSuasRespostas").append("<li>A</li>");
		        }
		        else if(valor === "1"){
		           $("#divListaSuasRespostas").append("<li>B</li>");
		        }
		        else if(valor === "2"){
		            $("#divListaSuasRespostas").append("<li>C</li>");
		        }
		         else if(valor === "3"){
		             $("#divListaSuasRespostas").append("<li>D</li>");
		        }else if(valor === "4"){
		            $("#divListaSuasRespostas").append("<li>E</li>");
		        }else{
		       $("#divListaSuasRespostas").append("<li>"+valor+"</li>"); 
		        }
		        
		        
		},
		addLinhaGabarito:function(valor){
		     if(valor === "0"){
		            $("#divListaResposta").append("<li>A</li>");
		        }
		        else if(valor === "1"){
		           $("#divListaResposta").append("<li>B</li>");
		        }
		        else if(valor === "2"){
		            $("#divListaResposta").append("<li>C</li>");
		        }
		         else if(valor === "3"){
		             $("#divListaResposta").append("<li>D</li>");
		        }else if(valor === "4"){
		            $("#divListaResposta").append("<li>E</li>");
		        }else{
		       $("#divListaResposta").append("<li>"+valor+"</li>"); 
		        }
		}
};

$(document).on("pagebeforecreate", "#resultado", function() {
	try {
		ResultController.init();
	}
	catch(err) {
		alert(err.message);
		window.location = "index.html";
	}
});