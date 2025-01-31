const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/maior-numero', (req, res) => {
    const { numeros } = req.body;

    if (!Array.isArray(numeros) || numeros.length === 0) {
        return res.status(400).json({ error: 'Informe um array de números válido.' });
    }

    if (!numeros.every(num => typeof num === 'number')) {
        return res.status(400).json({ error: 'O array deve conter apenas números.' });
    }

    const maiorNumero = Math.max(...numeros);

    res.json({ maiorNumero });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
