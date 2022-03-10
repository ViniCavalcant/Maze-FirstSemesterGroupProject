const express = require('express');
const { ArduinoData } = require('./serial')
const router = express.Router();
const db = require('./connection');

// router.get('/temperature', (request, response, next) => {

//     let sum = ArduinoData.ListTemp.reduce((a, b) => a + b, 0);
//     let average = (sum / ArduinoData.ListTemp.length).toFixed(2);

//     response.json({
//         data: ArduinoData.ListTemp,
//         total: ArduinoData.ListTemp.length,
//         average: isNaN(average) ? 0 : average,
//     });

// });

// router.get('/humidity', (request, response, next) => {

//     let sum = ArduinoData.List.reduce((a, b) => a + b, 0);
//     let average = (sum / ArduinoData.List.length).toFixed(2);

//     response.json({
//         data: ArduinoData.List,
//         total: ArduinoData.List.length,
//         average: isNaN(average) ? 0 : average,
//     });

// });

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
router.post('/sendData', (request, response) => {
    //temperatura = ArduinoData.ListTemp[ArduinoData.ListTemp.length - 1];
    //umidade = ArduinoData.List[ArduinoData.List.length - 1];
    let pessoas = ArduinoData.ListSwitch[ArduinoData.ListSwitch.length - 1];

    // let data_agora = new Date()
   

    var sql = "INSERT INTO leitura(is_present,date_movimento,fkSensor) VALUES(?)";
    values = [pessoas,`2021-11-29 ${horas}:${minutos}:${segundo}`,1];
    if(horas < 23){
        horas = horas + 1 }
    else {
    
        horas = 00
    }
    db.query(sql, [values], function(err, result){
        if(err) throw err;
        console.log("Medidas inseridas: " + result.affectedRows)
    });
    response.sendStatus(200);
})

module.exports = router;