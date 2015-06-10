Base = {

	all : {
		"items" : [//itens
            { "id": "1",
            "titulo": "Quiz Android 1",
            "autor": "Monitoria UFRPE",
	        "data" : "26/04/2015",
            "questoes": [//questao
    {//questa 1
	  "titulo" : "A Plataforma Android inclue vários componentes. Qual dos componentes listados a seguir NÃO faz parte da Plataforma Android?:",
	  "gabarito":"0",
	
	"alternativas" : [
	 {"titulo" : "Kit de Desenvolvimento de Software(SDK)"},
   	 {"titulo" : "Ferramentas de analise de protocolo de rede" },
	 {"titulo" : "Pilha de Software"},
	 {"titulo" : "Documentação"}
	],
	
	"tipo" : "fechada"
	},//fim questa 1
	{//questa 2
	  "titulo" : "Em relação ao tipo de conteudo que apresenta: Qual é o tipo de conteudo encontrado em:http://developer.android.com ",
	  "gabarito":"0",
	
	"alternativas" : [
	 {"titulo" : "Informações Gerais"},
   	 {"titulo" : "Apoio da Comunidade" },
	 {"titulo" : "Perguntas e Respostas"}
	],
	
	"tipo" : "fechada"
	},//fim questa 2
	
		{//questa 3
	  "titulo" : "Em relação ao tipo de conteudo que apresenta: Qual é o tipo de conteudo encontrado em:http://stackoverflow.com/questions/tagged/android ",
	  "gabarito":"1",
	
	"alternativas" : [
	 {"titulo" : "Informações Gerais"},
   	 {"titulo" : "Apoio da Comunidade" },
	 {"titulo" : "Perguntas e Respostas"}
	],
	
	"tipo" : "fechada"
	},//fim questa 3
	
	{//questa 4
	  "titulo" : "Em relação ao tipo de conteudo que apresenta: Qual é o tipo de conteudo encontrado em:http://www.meetup.com/DC-Droids/ ",
	  "gabarito":"2",
	
	"alternativas" : [
	 {"titulo" : "Informações Gerais"},
   	 {"titulo" : "Apoio da Comunidade" },
	 {"titulo" : "Perguntas e Respostas"}
	],
	
	"tipo" : "fechada"
	},//fim questa 4
	
		{//questa 5
	  "titulo" : "Em relação ao tipo de conteudo que apresenta: Qual é o tipo de conteudo encontrado em:https://groups.google.com/group/android-developers ",
	  "gabarito":"2",
	
	"alternativas" : [
	 {"titulo" : "Informações Gerais"},
   	 {"titulo" : "Apoio da Comunidade" },
	 {"titulo" : "Perguntas e Respostas"}
	],
	
	"tipo" : "fechada"
	},//fim questa 5
	
		{//questa 6
	  "titulo" : "Em relação ao tipo de conteudo que apresenta: Qual é o tipo de conteudo encontrado em:http://android-developers.blogspot.com ",
	  "gabarito":"0",
	
	"alternativas" : [
	 {"titulo" : "Informações Gerais"},
   	 {"titulo" : "Apoio da Comunidade" },
	 {"titulo" : "Perguntas e Respostas"}
	],
	
	"tipo" : "fechada"
	},//fim questa 6
	
		{//questa 7
	  "titulo" : "O Kernel Linux do Android não é exatamente o mesmo Kernel do Linux comum que roda em máquinas desktop. Porquê o Android possui um Kernel Linux próprio? ",
	  "gabarito":"1",
	
	"alternativas" : [
	 {"titulo" : "Para dar suporte a novos tipos de Interface Gráfica."},
   	 {"titulo" : "Dispositivos Móveis precisam de certas caracteristicas que não são usualmente necessárias em Computadores Desktop." },
	 {"titulo" : "Para criar APIs de Kernel com suporte a concorrência."}
	],
	
	"tipo" : "fechada"
	},//fim questa 7
	
	{//questa 8
	  "titulo" : "Em qual das seguintes linguagens de programação as Bibliotecas Nativas do Android são tipicamente escritas?",
	  "gabarito":"1",
	
	"alternativas" : [
	 {"titulo" : "C/C++"},
   	 {"titulo" : "Java" },
	 {"titulo" : "Python"},
	 {"titulo" : "Scala"}
	],
	
	"tipo" : "fechada"
	},//fim questa 8
            ]
            
        }
	]//fim itens
	},
	getById : function(id) {
		for (var i = 0; i < Base.all.items.length; i++) {
			if (Base.all.items[i].id == id) {
				return Base.all['items'][i];
			}
		}

	}

};

$(document).on("pagebeforecreate", function(event) {
	App.init();
});
