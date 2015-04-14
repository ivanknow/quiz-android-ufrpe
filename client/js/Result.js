ResultController  = {
		init:function(){
		    for(var i = 0;i<ProvaExecucaoController.provaSelecionada.questoes.length;i++){
		        var valor = ProvaExecucaoController.provaSelecionada.questoes[i].resposta||"Sem Resposta";
		        if(valor === "0"){
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
		        }
		        //ProvaExecucaoController.provaSelecionada.questoes[i].resposta||"Sem Resposta");
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