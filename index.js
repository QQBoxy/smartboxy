/**************************************************
 File: smartboxy.ino
 Name: smartboxy
 Explain: Smart Home
****************************************By QQBoxy*/
/*jshint node: true, esversion: 9 */

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function () {
    var LEDpin = new five.Pin(13);
    
    const express = require('express');
    const app = express();
    const path = require('path');

    var port = 3000;

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'index.html'));
    });

    app.get('/light', (req, res) => {
        if(req.query.power === 'on') {
            LEDpin.high();
            res.send('Led light is on!');
        } else {
            LEDpin.low();
            res.send("Led light is off!");
        }
    });

    app.listen(port, function () {
        console.log('Example app listening on port http://0.0.0.0:' + port + '!');
    });
});