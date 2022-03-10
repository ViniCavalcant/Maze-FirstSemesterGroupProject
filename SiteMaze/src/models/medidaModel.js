var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {
    instrucaoSql = `select 
                    is_present,
                    date_movimento,
                    DATE_FORMAT(date_movimento,'%H:%i') as momento_grafico
                    from leitura
                    where fkSensor = ${idAquario}
                    order by idLeitura desc limit ${limite_linhas}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
} 

function buscarMedidasEmTempoReal(idAquario) {
    instrucaoSql = `select 
                    is_present, 
                        DATE_FORMAT(date_movimento,'%H:%i') as momento_grafico, 
                        fkSensor 
                        from leitura where fkSensor = ${idAquario} 
                    order by idLeitura desc limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}