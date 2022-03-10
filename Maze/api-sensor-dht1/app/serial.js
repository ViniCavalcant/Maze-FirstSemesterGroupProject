const sensors = require('./sensors');
const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;


class ArduinoDataRead {

    constructor(){
        this.listData = [];
		this.__listDataTemp = [];
        this.listDataSwitch = [];
    }

    get List() {
        return this.listData;
    }
    get ListTemp() {
        return this.__listDataTemp;
    }
    get ListSwitch() {
        return this.listDataSwitch
    }
	
    fake_data(){
        setInterval(() => {
            
            let data_int = sensors.pessoas();

            if (this.__listDataTemp.length === 59) {
                let sum = this.__listDataTemp.reduce((a, b) =>  a + b, 0);
                while(this.__listDataTemp.length > 0) {
                    this.__listDataTemp.pop();
                }
            }
            console.log('chave: ', data_int);
            this.listDataSwitch.push(data_int);

        }, 5000);
    }

    SetConnection() {
        SerialPort.list().then(listSerialDevices => {

            let listArduinoSerial = listSerialDevices.filter(serialDevice => {
                return serialDevice.vendorId == 2341 && serialDevice.productId == 43;
            });

            if (listArduinoSerial.length != 1) {
                this.fake_data();
                console.log("Arduino not found - Generating data");
            } else {
                console.log("Arduino found in the com %s", listArduinoSerial[0].comName);
                return listArduinoSerial[0].comName;
            }
        }).then(comName => {
            try {
                let arduino = new SerialPort(comName, { baudRate: 9600 });

                const parser = new Readline();
                arduino.pipe(parser);
                arduino.on('close',() => {
                    console.log('Lost Connection');
                    this.fake_data();
                });
                parser.on('data', (data) => {
                    console.log( data);
                    // this.listData.push(parseFloat(data));
                    if(parseFloat(data) == 1){
                                    
                            let data_int = sensors.pessoas();
                
                            if (this.__listDataTemp.length === 59) {
                                let sum = this.__listDataTemp.reduce((a, b) =>  a + b, 0);
                                while(this.__listDataTemp.length > 0) {
                                    this.__listDataTemp.pop();
                                }
                            }
                            console.log('chave: ', data_int);
                            this.listDataSwitch.push(data_int);
                
                     
                    }
                    else{
                        data = 0
                        this.listDataSwitch.push(parseFloat(data))
                    }
                });
            } catch (e) {
                this.fake_data();
            }

        }).catch(error => console.log(error));
    }
}

const serial = new ArduinoDataRead();
serial.SetConnection();

module.exports.ArduinoData = {ListSwitch: serial.ListSwitch} 