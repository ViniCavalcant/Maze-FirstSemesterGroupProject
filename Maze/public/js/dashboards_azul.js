function parada(){
nome_linha.innerHTML = `Parada Inglesa`;
grafico_1.innerHTML = `
<canvas id="parada_1" style="background-color: #2B2C2D" width="auto" height="auto"> </canvas>
`
var context_parada1 = document.getElementById("parada_1").getContext("2d");

  // configurando todo o corpo do gráfico, as colunas, linhas, valores, etc
  var configuration_parada1 = {
    type: 'bar',
    data: {
      labels: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
      datasets: [{
        label: ["volume de pessoas"],
        data: ["29500", "24000", "2000", "6600", "1000", "13000", "18500", "19000", "9500", "27650", "25950", "13500"],
        type: 'bar',
        borderColor: ['#118547', '#118547', '#FF0000', '#FFA500', '#FFFF00', '#FFFF00', '#00FF00', '#00FF00', '#FFA500', '#118547', '#118547', '#FFFF00',],
        backgroundColor: ['#118547', '#118547', '#FF0000', '#FFA500', '#FF0000', '#FFFF00', '#00FF00', '#00FF00', '#FFA500', '#118547', '#118547', '#FFFF00',],
      }]
    },
    options: {
      scales: {
        xAxes: [{
          barPercentage: .7,
          distribution: 'series',
          ticks: {
            beginAtZero: true,
            fontColor: "#4ADAA8",
            drawBorder: false,
          },

          gridLines: {
            color: ["#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D"],
          },
          scaleLabel: {
            display: true,
            labelString: 'Meses do ano',
            fontColor: "#4ADAA8"
          }

        }],
        yAxes: [{
          gridLines: {
            color: ["#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#FFF"],
          },
          scaleLabel: {
            fontColor: "#4ADAA8",
            display: true,
            labelString: 'Número de pesssoas',
          }
        }],

      },
    }
  };
  var parada_1 = new Chart(context_parada1, configuration_parada1);

  // Grafico 2
  grafico_2.innerHTML = `
<canvas id="parada_2" style="background-color: #2B2C2D" width="auto" height="auto"> </canvas>
`
var context_parada2 = document.getElementById("parada_2").getContext("2d");

  // configurando todo o corpo do gráfico, as colunas, linhas, valores, etc
  var configuration_parada2 = {
    type: 'bar',
    data: {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
        datasets: [{
          label: ["volume de pessoas"],
          data: [1930,1250,820,1740,2300,1425,2200,730,650,400,1000,970,740,870,990,1200,1930,1250,820,1740,2300,1425,2200,730,650,400,1000,970,740,870,990],
          type: 'bar',
          borderColor: ['#6E95F9'],
          backgroundColor: ['#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00', '#00FF00'],
        }]
    },
    options: {
        scales: {
          xAxes: [{
            barPercentage: .7,
            distribution: 'series',
            ticks: {
              beginAtZero: true,
              fontColor: "#4ADAA8",
              drawBorder: false,
            },
  
            gridLines: {
              color: ["#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D"],
            },
            scaleLabel: {
              display: true,
              labelString: 'Dias',
              fontColor: "#4ADAA8"
            }
  
          }],
          yAxes: [{
            gridLines: {
              color: ["#2B2C2D","#2B2C2D","#2B2C2D","#2B2C2D","#2B2C2D","#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#FFF"],
            },
            scaleLabel: {
              fontColor: "#4ADAA8",
              display: true,
              labelString: 'Número de pesssoas',
            }
          }],
  
        },
      }
    };
  var parada_2 = new Chart(context_parada2, configuration_parada2);

  // Grafico 3
  grafico_3.innerHTML = `
  <canvas id="parada_3" style="background-color: #2B2C2D" width="auto" height="auto"> </canvas>
  `
  var context_parada3 = document.getElementById("parada_3").getContext("2d");
  
    // configurando todo o corpo do gráfico, as colunas, linhas, valores, etc
    var configuration_parada3 = {
        type: 'line',
        data: {
          labels: ["1:00", "3:00", "5:00", "7:00", "9:00", "11:00", "13:00", "15:00", "17:00", "19:00", "21:00", "23:00"],
          datasets: [{
            label: ["volume de pessoas"],
            data: ["2400", "900", "1500", "2600", "3300", "1000", "550", "1900", "900", "1350", "490", "790"],
            type: 'line',
            borderColor: '#00f01f',
            backgroundColor: '#00ff0033',
          }]
        },
        options: {
          scales: {
            xAxes: [{
              barPercentage: .7,
              distribution: 'series',
              ticks: {
                beginAtZero: true,
                fontColor: "#4ADAA8",
                drawBorder: false,
              },
    
              gridLines: {
                color: ["#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D"],
              },
              scaleLabel: {
                display: true,
                labelString: 'Horario',
                fontColor: "#4ADAA8"
              }
    
            }],
            yAxes: [{
              gridLines: {
                color: ["#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#FFF"],
              },
              scaleLabel: {
                fontColor: "#4ADAA8",
                display: true,
                labelString: 'Número de pesssoas',
              }
            }],
    
          },
        }
      };
    var parada_3 = new Chart(context_parada3, configuration_parada3);
  
      // Grafico 4
  grafico_4.innerHTML = `
  <canvas id="parada_4" style="background-color: #2B2C2D" width="auto" height="auto"> </canvas>
  `
  var context_parada4 = document.getElementById("parada_4").getContext("2d");
  
    // configurando todo o corpo do gráfico, as colunas, linhas, valores, etc
    var configuration_parada4 = {
        type: 'doughnut',
    data: {
      labels: ["Bom", "Comum", "Crítico", "Risco","Excelente"],
      datasets: [{
        label: ["Numero de Alertas"],
        data: ["2", "2", "2", '2',"4"],
        type: 'doughnut',
        borderColor: ['#00FF00', '#FFFF00', '#FF0000','#FFA500' ,'#118547'],
        backgroundColor: ['#00FF00', '#FFFF00', '#FF0000','#FFA500' ,'#118547'],
      }]
    },
    options: {
      scales: {
        xAxes: [{
          barPercentage: 0,
          distribution: '',

          gridLines: {
            color: ["#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D"],
          },

        }],
        yAxes: [{
          gridLines: {
            color: ["#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D"],
          }
        }],

      },
    }
  };
    var parada_4 = new Chart(context_parada4, configuration_parada4);
  
}   

function tucuruvi(){
    nome_linha.innerHTML = `Tucuruvi`;
    grafico_1.innerHTML = `
    <canvas id="chart" style="background-color: #2B2C2D" width="auto" height="auto"> </canvas>
    `
    grafico_2.innerHTML = `
    <canvas id="chart_2" style="background-color: #2B2C2D" width="auto" height="auto"> </canvas>
    `
    grafico_3.innerHTML = `
    <canvas id="chart_3" style="background-color: #2B2C2D" width="auto" height="auto"> </canvas>
    `
    grafico_4.innerHTML = `
    <canvas id="chart_4" style="background-color: #2B2C2D" width="auto" height="auto"> </canvas>
    `

    var context = document.getElementById("chart").getContext("2d");

    // configurando todo o corpo do gráfico, as colunas, linhas, valores, etc
    var configuration = {
      type: 'bar',
      data: {
        labels: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
        datasets: [{
          label: ["volume de pessoas"],
          data: ["280000", "340000", "295000", "260000", "330000", "403000", "250000", "190000", "365000", "440000", "450000", "300000"],
          type: 'bar',
          borderColor: ['#eef414','#00f01f','#00f01f','#eef414','#00f01f','#118547','#FFA500','#d3000d','#00f01f','#118547','#118547','#eef414'],
          backgroundColor: ['#eef414','#00f01f','#00f01f','#eef414','#00f01f','#118547','#FFA500','#d3000d','#00f01f','#118547','#118547','#eef414'],
        }]
      },
      options: {
        scales: {
          xAxes: [{
            barPercentage: .7,
            distribution: 'series',
            ticks: {
              beginAtZero: true,
              fontColor: "#4ADAA8",
              drawBorder: false,
            },
  
            gridLines: {
              color: ["#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D"],
            },
            scaleLabel: {
              display: true,
              labelString: 'Meses do ano',
              fontColor: "#4ADAA8"
            }
  
          }],
          yAxes: [{
            gridLines: {
              color: ["#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#FFF"],
            },
            scaleLabel: {
              fontColor: "#4ADAA8",
              display: true,
              labelString: 'Número de pesssoas',
            }
          }],
  
        },
      }
    };
  
    //adicionando esses valores a um novo gráfico na tag canvas
    var chart = new Chart(context, configuration);
  
  
    // SEGUNDO GRÁFICO
  
    // Referenciando a tag canvas e defininco que o gráfico será em 2d
  
    var context_2 = document.getElementById("chart_2").getContext("2d");
  
    // configurando todo o corpo do gráfico, as colunas, linhas, valores, etc
    var configuration_2 = {
      type: 'bar',
      data: {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
        datasets: [{
          label: ["volume de pessoas"],
          data: ["28000", "34000", "29500", "26000", "33000", "40300", "25000", "19000", "36500", "44000", "45000", "30000", "34000", "29500", "26000", "33000", "40300", "25000", "19000", "36500", "44000", "45000", "30000", "34000", "29500", "26000", "33000", "40300", "25000", "19000", "36500"],
          type: 'bar',
          borderColor: ['#00f01f'],
          backgroundColor: ['#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f', '#00f01f'],
        }]
      },
      options: {
        scales: {
          xAxes: [{
            barPercentage: .7,
            distribution: 'series',
            ticks: {
              beginAtZero: true,
              fontColor: "#4ADAA8",
              drawBorder: false,
            },
  
            gridLines: {
              color: ["#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D"],
            },
            scaleLabel: {
              display: true,
              labelString: 'Dias',
              fontColor: "#4ADAA8"
            }
  
          }],
          yAxes: [{
            gridLines: {
              color: ["#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#FFF"],
            },
            scaleLabel: {
              fontColor: "#4ADAA8",
              display: true,
              labelString: 'Número de pesssoas',
            }
          }],
  
        },
      }
    };
  
    //adicionando esses valores a um novo gráfico na tag canvas
    var chart_2 = new Chart(context_2, configuration_2);
  
    // TERCEIRO GRÁFICO
  
    // Referenciando a tag canvas e defininco que o gráfico será em 2d
  
    var context_3 = document.getElementById("chart_3").getContext("2d");
  
    // configurando todo o corpo do gráfico, as colunas, linhas, valores, etc
    var configuration_3 = {
      type: 'bar',
      data: {
        labels: ["1:00", "3:00", "5:00", "7:00", "9:00", "11:00", "13:00", "15:00", "17:00", "19:00", "21:00", "23:00"],
        datasets: [{
          label: ["volume de pessoas"],
          data: ["280000", "340000", "295000", "260000", "330000", "403000", "250000", "190000", "365000", "440000", "450000", "300000"],
          type: 'line',
          borderColor: '#00f01f',
          backgroundColor: '#00f01f33',
        }]
      },
      options: {
        scales: {
          xAxes: [{
            barPercentage: .7,
            distribution: 'series',
            ticks: {
              beginAtZero: true,
              fontColor: "#4ADAA8",
              drawBorder: false,
            },
  
            gridLines: {
              color: ["#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D"],
            },
            scaleLabel: {
              display: true,
              labelString: 'Horario',
              fontColor: "#4ADAA8"
            }
  
          }],
          yAxes: [{
            gridLines: {
              color: ["#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#FFF"],
            },
            scaleLabel: {
              fontColor: "#4ADAA8",
              display: true,
              labelString: 'Número de pesssoas',
            }
          }],
  
        },
      }
    };
  
    //adicionando esses valores a um novo gráfico na tag canvas
    var chart_3 = new Chart(context_3, configuration_3);
  
    // QUARTO GRÁFICO
  
    // Referenciando a tag canvas e defininco que o gráfico será em 2d
  
    var context_4 = document.getElementById("chart_4").getContext("2d");
  
    // configurando todo o corpo do gráfico, as colunas, linhas, valores, etc
    var configuration_4 = {
      type: 'doughnut',
      data: {
        labels: ["Bom", "Comum", "Crítico", "Risco","Excelente"],
        datasets: [{
          label: ["Numero de Alertas"],
          data: ["4", "2", "1", '2',"3"],
          type: 'doughnut',
          borderColor: ['#00FF00', '#FFFF00', '#FF0000','#FFA500' ,'#118547'],
          backgroundColor: ['#00FF00', '#FFFF00', '#FF0000','#FFA500' ,'#118547'],
        }]
      },
      options: {
        scales: {
          xAxes: [{
            barPercentage: 0,
            distribution: '',
  
            gridLines: {
              color: ["#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D"],
            },
  
          }],
          yAxes: [{
            gridLines: {
              color: ["#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D", "#2B2C2D"],
            }
          }],
  
        },
      }
    };
  
    //adicionando esses valores a um novo gráfico na tag canvas
    var chart_4 = new Chart(context_4, configuration_4);
  
}