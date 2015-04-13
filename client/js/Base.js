Base = {

	all : {
		"items" : [//itens
	{
            "id": "1",
            "titulo": "QuestõesEAD",
            "autor": "GrupoLC",
	    "data" : "13/04/2015",
            "questoes": [//questao

	{//questa 1
	"titulo" : "...Dever do Estado e direito público subjetivo... se refere a:",
	
	"alternativas" : [
	 {"titulo" : "a.Ensino fundamental"},
   	 {"titulo" : "b.Ensino médio" },
	 {"titulo" : "c.Ensino superior"}
	],
	
	"tipo" : "fechada"
	},//fim questa 1

	{//questa 2
	"titulo" : "Quais as Modalidades de educação?",
	
	"alternativas" : [
	{"titulo" : "a.Educação Profissional"},
 	{"titulo" : "b.Educação especial " },
	{"titulo" : "c.Educação a distância (EAD)"},
	{"titulo" : "d.Todas as alternativas"}
	],
	
	"tipo" : "fechada"
	},//fim questa 2

{//questa 3
	"titulo" : "Segundo a Lei de Diretrizes e Bases da Educação Nacional (LDB) 9.394/96, como deve ser composto o calendário escolar nos níveis fundamental e médio?",
	
	"alternativas" : [
	 {
					"titulo" : "a.O calendário deve obedecer o ano civil sendo permitida a redução de horas letivas conforme as peculiaridades locais. "
				}, {
					"titulo" : "b.O calendário deve obedecer o ano civil e adequar-se as peculiaridades locais, porém, obedecendo a carga horaria mínima anual de 800 horas distribuídas no mínimo em 200 dias letivos."
                                }, {
					"titulo" : "c.A carga horária anual mínima é de 600 horas distribuídas em exatamente 150 dias de efetivo trabalho escolar, excluindo o tempo reservado aos exames finais."
				
                                }
	],
	
	"tipo" : "fechada"
	},//fim questa 3

{//questa 4
	"titulo" : "De acordo com a LDB 9.394/96, no ensino fundamental ou no ensino médio, quando um aluno pode avançar para a série seguinte?",
	
	"alternativas" : [
	  {
					"titulo" : "a. Apenas quando terminar o ano anterior na mesma escola e conseguir a promoção através de avaliações determinadas. "
				}, {
					"titulo" : "b.Após finalizar o ano anterior na escola e conseguir aprovação nas avaliações, ou por transferência escolar."
                                }, {
					"titulo" : "c.Através de transferência escolar, ou quando o aluno cursou a série anterior na escola e foi promovido pelo seu aproveitamento, ou ainda, após ser aprovado em avaliação específica que defina o seu grau de desenvolvimento, independentemente de sua escolarização anterior."
				
				}
	],
	
	"tipo" : "fechada"
	},//fim questa 4

{//questa 5
	"titulo" : "De acordo com a Lei de Diretrizes e Bases- LDB nº. 9.394, de 20 de dezembro de 1996, a educação escolar compõe-se de:",
	
	"alternativas" : [
	  {
					"titulo" : "a.Educação básica, formada pela educação infantil, ensino fundamental e ensino médio."
				}, {
					"titulo" : "b.Infantil, ensino fundamental, ensino médio e ensino superior."
                                }, {
					"titulo" : "c.Educação básica, formada pela educação infantil, ensino fundamental e ensino médio; educação superior."
				
				}
	],
	
	"tipo" : "fechada"
	},//fim questa 5

{//questa 6
	"titulo" : "Na perspectiva da educação inclusiva, quando refletimos sobre a formação do educando, cabe à escola, democrática e comprometida com a cidadania o seguinte papel:",
	
	"alternativas" : [

{
					"titulo" : "a.Construir práticas pedagógicas para atender apenas aos alunos com dificuldades de aprendizagem."
				}, {
					"titulo" : "b.Estimular a formação de valores, hábitos e comportamentos que respeitem as diferenças de grupos minoritários."
                                }, {
					"titulo" : "c.Incentivar a participação exclusiva dos atores educativos na formulação de políticas de inclusão."
			
                                }

	],
	
	"tipo" : "fechada"
	},//fim questa 6

	{//questa 7
	"titulo" : "...Dever do Estado e direito público subjetivo... se refere a:",
	
	"alternativas" : [
	
	 {
					"titulo" : "a.Formar profissionais de diferentes áreas do saber; promover a divulgação de conhecimentos culturais, científicos e técnicos "
				}, {
					"titulo" : "b.Preparação para o trabalho e para o exercício da cidadania"
                                }, {
					"titulo" : "c.Dar identidade, diversidade e autonomia, interdisciplinaridade, contextualização "
				} 	
	
	],
	
	"tipo" : "fechada"
	},//fim questa 7

	{//questa 8
	"titulo" : "Quais as principais dificuldades para a implementação do Ensino a Distância?",

	"tipo" : "aberta"
	},//fim questa 8
	{//questa 9
	"titulo" : "A Educação a Distância pode ter a mesma qualidade da educação presencial?",

	"tipo" : "aberta"
	},//fim questa 9
	{//questa 10
	"titulo" : "Aula a distância: como funciona? ",

	"tipo" : "aberta"
	},//fim questa 10
	{//questa 11
	"titulo" : "Qual a base legal para a EAD? ",

	"tipo" : "aberta"
	},//fim questa 11

	]//fim questao
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
