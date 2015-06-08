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
