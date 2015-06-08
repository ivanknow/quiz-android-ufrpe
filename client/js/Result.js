ResultController  = {
		init:function(){
		    for(var i = 0;i<ProvaExecucaoController.provaSelecionada.questoes.length;i++){
		        var valor = ProvaExecucaoController.provaSelecionada.questoes[i].resposta||"Sem Resposta";
		        var gabarito = ProvaExecucaoController.provaSelecionada.questoes[i].gabarito||"Sem Resposta";
		        ResultController.addLinhaSuasRespostas(valor);
		        ResultController.addLinhaGabarito(gabarito);
		      /*  if(valor === "0"){
		            $("#resp"+(i+1)).html("A");
		        }
		        else if(valor === "1"){
		            $("#resp"+(i+1)).html("B");
		        }
		        else if(valor === "2"){
		            $("#resp"+(i+1)).html("C");
		        }
		         else if(valor === "3"){
		            $("#resp"+(i+1)).html("D");
		        }else if(valor === "4"){
		            $("#resp"+(i+1)).html("E");
		        }else{
		        $("#resp"+(i+1)).html(valor);    
		        }*/
		        //ProvaExecucaoController.provaSelecionada.questoes[i].resposta||"Sem Resposta");
		    }
		},
		addLinhaSuasRespostas:function(valor){
		     if(valor === "0"){
		            $("#divListaProva").append("<li>A</li>");
		        }
		        else if(valor === "1"){
		           $("#divListaProva").append("<li>B</li>");
		        }
		        else if(valor === "2"){
		            $("#divListaProva").append("<li>C</li>");
		        }
		         else if(valor === "3"){
		             $("#divListaProva").append("<li>D</li>");;
		        }else if(valor === "4"){
		            $("#divListaProva").append("<li>E</li>");
		        }else{
		       $("#divListaProva").append("<li>"+valor+"</li>"); 
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
		             $("#divListaResposta").append("<li>D</li>");;
		        }else if(valor === "4"){
		            $("#divListaResposta").append("<li>E</li>");
		        }else{
		       $("#divListaResposta").append("<li>"+valor+"</li>"); 
		        }
		},
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