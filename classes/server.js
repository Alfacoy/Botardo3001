const express = require('express');

class Server {
    constructor(port) {
        this.app = express();
        this.PORT = process.env.PORT || port;
        this.Routes();
    }

    Routes() { 
        this.app.get('/', (req, res) => {
            res.send('Hola Mundo')
        })
    }

    Listen() {
        this.app.listen(this.PORT, () =>console.log(`Servidor escuchando en el puerto ${this.PORT}`))
    }
}   

module.exports = {
    Server
}
