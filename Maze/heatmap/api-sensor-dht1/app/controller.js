const express = require('express');
const { ArduinoData } = require('./serial')
const router = express.Router();
const db = require('./connection');

router.get('/temperature', (request, response, next) => {

    let sum = ArduinoData.ListTemp.reduce((a, b) => a + b, 0);
    let average = (sum / ArduinoData.ListTemp.length).toFixed(2);

    response.json({
        data: ArduinoData.ListTemp,
        total: ArduinoData.ListTemp.length,
        average: isNaN(average) ? 0 : average,
    });

});

router.get('/humidity', (request, response, next) => {

    let sum = ArduinoData.List.reduce((a, b) => a + b, 0);
    let average = (sum / ArduinoData.List.length).toFixed(2);

    response.json({
        data: ArduinoData.List,
        total: ArduinoData.List.length,
        average: isNaN(average) ? 0 : average,
    });

});

// function dados_aleatorios() {

//     const sensor = Math.floor(Math.random() * (7 - 1) + 1);
//     console.log(`Sensor: ${sensor}`);
//     return sensor;
// }

function tcrt5000() {
    min = 0;
    max = 1;
  
    let random = Math.random() * (max - min) + min;
  
    if (random > 0.5) {
      return random * 15;
    } else if (random <= 0.5) {
      return random * 15;
    }
}

function gerarSensor() {
    var random = Math.floor(Math.random() * (24 - 1) + 1);
    return random;
}

function gerarEstacao() {
    var random = Math.floor(Math.random() * (200 - 100) + 100);
    return random;
}

router.post('/sendData', (request, response) => {
    temperatura = ArduinoData.ListTemp[ArduinoData.ListTemp.length - 1];
    umidade = ArduinoData.List[ArduinoData.List.length - 1];

    let data_agora = new Date().toLocaleDateString();
    var values = [tcrt5000(), gerarSensor(), data_agora, gerarEstacao()];
    var sql = `INSERT INTO medida_presenca(is_present, id_sensor, date_moviment, id_estacao) VALUES(${values})`;
    
    db.executar(sql, [values], function(err, result){
        if(err) throw err;
        console.log("Medidas inseridas: " + result.affectedRows)
        console.log(values);
    });
    response.sendStatus(200);
})

module.exports = router;