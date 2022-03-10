var database = require("../database/config");

function contato(nome, email, mensagem){
    var sendContato = `insert into Contato values (null, '${nome}', '${email}', '${mensagem}')`;

    console.log("Executando a instrução SQL: \n" + sendContato);

    return database.executar(sendContato);
}
module.exports = {
  contato
}