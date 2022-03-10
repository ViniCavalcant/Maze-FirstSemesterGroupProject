var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {
    instrucaoSql = ` select top ${limite_linhas} * from medida_presenca2 join estacao on id_estacao = idEstacao join linha on fkLinha = idLinha where idEstacao = 100
	order by id desc;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
} 

function buscarMedidasEmTempoReal(idAquario) {
    instrucaoSql = `select top 1 * from medida_presenca2 order by id desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPresencas(hora_ini, hora_fim) {
    instrucaoSql = `select sum(is_present) as total, id_sensor as sensor from medida_presenca where CAST(date_moviment as time) between '${hora_ini}' and '${hora_fim}'
      group by id_sensor;`;
  
    console.log('Executando a instrução SQL: \n' + instrucaoSql);
    return database.executar(instrucaoSql);
  }

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarPresencas
}