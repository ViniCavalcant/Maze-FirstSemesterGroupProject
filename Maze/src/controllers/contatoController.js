var contatoModel = require("../models/contatoModel")

function contato(req,res){
    var nome = req.body.nome;
    var email = req.body.email;
    var mensagem = req.body.mensagem;
    
    contatoModel.contato(nome, email, mensagem)
    .then(function(resultado){
        res.status(200).json(resultado);
    })
    .catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })

}
module.exports = {
    contato
}
