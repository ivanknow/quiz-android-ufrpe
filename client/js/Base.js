Base = {

	all : {
		"items" : [ {
			id : 1,
			"titulo" : "Quiz 1",
			"autor" : "Professor Gilberto",
			"questoes" : [ {
				"titulo" : "teste?",
				"tipo" : "aberta"
			}, {
				"titulo" : "teste b",
				"tipo" : "aberta"
			}, {
				"titulo" : "voce gosta de biscoito?",
				"alternativas" : [ {
					"titulo" : "Sim"
				}, {
					"titulo" : "Não"
				} ],
				"tipo" : "fechada"
			} ],
			"data" : "28/03/2015"
		}, {
			id : 2,
			"titulo" : "Quiz 2",
			"autor" : "Professor Gilberto",
			"questoes" : [],
			"data" : "28/03/2015"
		} ]
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