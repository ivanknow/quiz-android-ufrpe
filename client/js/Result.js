ResultController  = {
		init:function(){
		    for(var i = 0;i<ProvaExecucaoController.provaSelecionada.questoes.length;i++){
		        var valor = ProvaExecucaoController.provaSelecionada.questoes[i].resposta||"Sem Resposta";
		        var gabarito = ProvaExecucaoController.provaSelecionada.questoes[i].gabarito||"Sem Resposta";
		        ResultController.addLinhaRespostas(valor,gabarito);
	            
	           
		    }
		    
		     //Limpa prova selecionada
	            ProvaExecucaoController.provaSelecionada = null;
		},
		addLinhaRespostas:function(valor,gabarito){
		    var acertou = "X";
		            if(valor === gabarito){
		                acertou = "V";        
		            }
		     
		            $("#divListaResposta").append
		            ("<li>"+
		            ResultController.getFormatedValue(valor)+
		            "-"+
		            ResultController.getFormatedValue(gabarito)+
		            "-("+
		            acertou+
		            ")</li>");
		        
		},
		getFormatedValue:function(valor){
		    var formated = "";
		     if( valor === "0" ){
		           formated="A";
		      }
		      else if(valor === "1"){
		          formated="B";
		      }
		      else if(valor === "2"){
		          formated="C";
		      }
		      else if(valor === "3"){
		          formated="D";
		      }else if(valor === "4"){
		           formated="E";
		      }else{
		       formated=valor; 
		      }
		        return formated;
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
