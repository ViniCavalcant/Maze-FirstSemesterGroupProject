const express = require('express');
const { ArduinoData } = require('./serial')
const db = require('./connection');
const router = express.Router();


router.get('/chave',(request, response, next) => {
    let sum = ArduinoData.ListSwitch.reduce((a,b) => a + b,0);
    let average = (sum / ArduinoData.ListSwitch.length).toFixed();

    response.json({
        data: ArduinoData.ListSwitch,
        total: ArduinoData.ListSwitch.length,
        average: isNaN(average) ? 0 : average
    });
});

var segundo = 00;
var minutos = 00;
var horas = 00;
var diaAtual = 1;
var mesAtual = 1;
var dias = new Date();
diaAtual = dias.getDate();
mesAtual = (dias.getMonth() + 1);
anoAtual = dias.getFullYear();
var somaTotalhoras = []
router.post('/sendData', (request, response) => {
    //temperatura = ArduinoData.ListTemp[ArduinoData.ListTemp.length - 1];
    //umidade = ArduinoData.List[ArduinoData.List.length - 1];
    let pessoas = ArduinoData.ListSwitch[ArduinoData.ListSwitch.length - 1];
    
    // let data_agora = new Date()
    
    var values =  [`${pessoas}, ${Math.floor(Math.random() * (23 - 1) + 1)}, '${anoAtual}-${mesAtual}-${diaAtual} ${horas}:00:00', '100'`];
    var sql = `INSERT INTO medida_presenca2 (is_present, id_sensor, date_moviment, id_estacao) VALUES (${values})`
     
    if(horas < 23){
        horas = horas + 1 
        if(pessoas != ''){
        somaTotalhoras.push(pessoas)
        console.log(somaTotalhoras)

        const soma = (x,y) => x + y;
        let sum = somaTotalhoras.reduce(soma);

        console.log(sum)
    }
    }
    else {
        const soma = (x,y) => x + y;
        var sum = somaTotalhoras.reduce(soma);
        horas = 00

            if(diaAtual >31){
                if(mesAtual >12){
                    mesAtual = 01
                    diaAtual = 01
                }
                else{
                    mesAtual ++
                }
            }
            else{
                diaAtual = diaAtual + 1

                // var sql = "INSERT INTO dia_medida(is_present,date_moviment,fkSensor) VALUES(?)";
                // values = [sum,`${anoAtual}-${mesAtual}-${diaAtual - 1} ${horas}:${minutos}:${segundo}`, 2];
                  somaTotalhoras = []
            }   

    }
    db.executar(sql, [values], function(err, result){
        if(err) throw err;
        console.log("Medidas inseridas: " + result.affectedRows)
    });
    response.sendStatus(200);
})

module.exports = router;