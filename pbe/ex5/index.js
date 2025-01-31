const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/ordenar-numeros', (req, res) => {
    const { numeros } = req.body;

    if (!Array.isArray(numeros) || numeros.length === 0) {
        return res.status(400).json({ error: 'Informe um array de números válido.' });
    }

    if (!numeros.every(num => typeof num === 'number')) {
        return res.status(400).json({ error: 'O array deve conter apenas números.' });
    }

    const numerosOrdenados = [...numeros].sort((a, b) => a - b);

    res.json({ numerosOrdenados });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
