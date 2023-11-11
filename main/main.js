const { ChiInv } = require('./../ChiInv')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const port = 8080
app.listen(port, ()=>{
    console.log('Se ha levantado el servidor en el puerto ' + port);
});

app.get('/get/chi/:digit/:prueba', (req, res) => {
    let chiInv = new ChiInv();
    let result = chiInv.chiInv(req.params.prueba, req.params.digit)
    res.json(result);
});