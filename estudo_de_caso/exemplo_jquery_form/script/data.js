var Cidade = function(nome, regiao) {
	this.nome = nome;
	this.regiao = regiao;
};
var Estado = function(nome, cidades) {
	this.nome = nome;
	this.cidades = cidades;
}
			
var cidadesRJ = [new Cidade("Bom Jardim", "Serrana 2")
				,new Cidade("Nova Friburgo", "Serrana 2")
				,new Cidade("Nova Iguaçu", "Baixada Fluminense")
				, new Cidade("Niterói", "Metropolitana") ];

var cidadesSP = [new Cidade("Guarulhos", "Metropolitana")
				,new Cidade("São Bernardo", "ABC")
				,new Cidade("Diadema", "ABC")
				, new Cidade("São Paulo", "Metropolitana") ];

var estadoRJ = new Estado("RJ", cidadesRJ);
var estadoSP = new Estado("SP", cidadesSP);

var estados = [estadoRJ, estadoSP];
/*
var estados =[];
estados["RJ"] = estadoRJ;
estados["SP"] = estadoSP;	
*/
