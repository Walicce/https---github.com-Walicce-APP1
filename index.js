const express = require('express');
const os = require('os');
const app = express();
const wersja = process.env.VERSION || '1.0.0';

app.get('/', (req, res) => {
    let ip = 0
    const interfejsy = os.networkInterfaces();
    for (let i in interfejsy) {
        for (let addr of interfejsy[i]) {
            if (addr.family === 'IPv4' && !addr.internal) {
                ip = addr.address;

            }

        }

    }

    const hostname = os.hostname();
    res.send('IP:' +ip+ 'hostname: ' + hostname + 'wersja:' +wersja);
});
app.listen(8080, () => {
    console.log("Listening on port 8080");

});
