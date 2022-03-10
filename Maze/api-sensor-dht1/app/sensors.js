function lm35(min, max) {
    min = typeof min == "undefined" ? 18 : min;
    max = typeof max == "undefined" ? 25 : max;
  
    let random = Math.random() * (max - min) + min;
  
    return random;
  }
  
function dht11(options) {
    minHumidity = options.minHum;
    maxHumidity = options.maxHum;
  
    minTemperature = options.minTemp;
    maxTemperature = options.maxTemp;
  
    if (minHumidity < 20 || maxHumidity > 100) {
      throw new Error(
        "Os valores minímos e máximos para umidade são 20% e 100% respectivamente."
      );
    }
  
    if (minTemperature < 0 || maxTemperature > 50) {
      throw new Error(
        "Os valores minímos e máximos para temperatura são 0 e 50 respectivamente."
      );
    }
  
    minTemperature = typeof minTemperature == "undefined" ? 18 : minTemperature;
    maxTemperature = typeof maxTemperature == "undefined" ? 25 : maxTemperature;
  
    minHumidity = typeof minHumidity == "undefined" ? 20 : minHumidity;
    maxHumidity = typeof maxHumidity == "undefined" ? 80 : maxHumidity;
  
    let randomHumidity = Math.floor(
      Math.random() * (maxHumidity - minHumidity + 1) + minHumidity
    );
  
    let randomTemperature =
      Math.random() * (maxTemperature - minTemperature) + minTemperature;
  
    return [randomHumidity, randomTemperature];
  }

  function tcrt5000() {
    min = 0;
    max = 1;
  
    let random = Math.random() * (max - min) + min;
  
    if (random > 0.5) {
      return 1;
    } else if (random <= 0.5) {
      return 0;
    }
};

/**
 * Neste bloco crio uma função de soma e em seguida
 * uma função pessoas que simula a soma de pessoas a cada 1h = 360 blocos de 10s
 */

const soma = (x,y) => x + y;

function pessoas(){
  let a = [];
  for(let i = 0; i < 350; i++){
    let medida = tcrt5000();
    a.push(medida)
  }
  let sum = a.reduce(soma);

  min = 0;
  max = 1;

  let x = Math.random();

  if( x > 0.5){
    x = 1;
  } else if(x <= 0.5){
    x = 0;
  }

  if(x == 1){
    min = sum - 50;
    max = sum + 80;

    let random = Math.floor(Math.random() * (max -min + 1)) + max;

    sum = random
  } else{
    min = sum - 80;
    max = sum + 50;

    let random = Math.floor(Math.random() * (max -min + 1)) + min;

    sum = random
  }

  return sum;
}


  
  module.exports = { lm35, dht11, pessoas };
  