var medidaModel = require("../models/medidaModel");


function buscarMaior(req, res) {
    medidaModel.buscarMaior()
        .then(function (resultado) {
        if(resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(
         function(erro) {
            console.log(erro);
            console.log("Houve um erro aos buscar os dados das estações! Erro", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
    });
}

function buscarPresencas(req, res) {
    var hora_ini = req.body.hora_ini;
     var hora_fim = req.body.hora_fim;
     
    // console.log(`Hora início: ${hora_ini}`);
    // console.log(`Hora fim: ${hora_fim}`);


    console.log(`Recuperando as presenças`);
    
    medidaModel.buscarPresencas(hora_ini, hora_fim).then(function(resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });


}

module.exports = {
    buscarPresencas,
    buscarMaior
}

