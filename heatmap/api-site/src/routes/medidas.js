var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");


router.post("/presenca-hora", function (req, res) {
    medidaController.buscarPresencas(req, res);
});

router.post("/maiores", function(req,res) {
    medidaController.buscarMaior(req, res);
})


module.exports = router;