// process.env.AMBIENTE_PROCESSO = "desenvolvimento";
process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var port = process.env.PORT || 3333;

var app = express();


var usuarioRouter = require("./src/routes/usuarios");
var medidasRouter = require("./src/routes/medidas");
var contatoRouter = require("./src/routes/contato");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());


app.use("/usuarios", usuarioRouter);
app.use("/medidas", medidasRouter);
app.use("/contato", contatoRouter);

app.listen(port, function () {
    console.log(`Servidor do site está rodando rodando: http://localhost:${port} \n
    Você está rodando sua aplicação em ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", banco local (MySQL Workbench). \n
    \t\tSe "producao", banco remoto (SQL Server em nuvem Azure)`);
});