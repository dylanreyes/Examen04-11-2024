const express = require('express');
const spawn = require('child_process').spawn;

const app = express();
const port = 3000;

app.use(express.json());

app.post('/calcular', (req, res) => {
const { dni } = req.body;
const calcular = spawn('./c++/main', [dni]);

calcular.stdout.on('data', (data) => {
    res.json({ resultado: data.toString() });
});
});

app.use(express.static(__dirname));

app.listen(port, () => {
console.log(`Servidor escuchando en el puerto ${port}`);
});