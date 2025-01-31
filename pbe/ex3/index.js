const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/mercadoria', (req, res) => {
    const { nomeMercadoria, precoMercadoria } = req.body;

    if (
        !nomeMercadoria ||
        typeof nomeMercadoria !== 'string' ||
        !precoMercadoria ||
        typeof precoMercadoria !== 'number' ||
        precoMercadoria <= 0
    ) {
        return res.status(400).json({ error: 'Informe um nome válido e um preço numérico positivo para a mercadoria.' });
    }

    let aumento = precoMercadoria < 1000 ? precoMercadoria * 0.05 : precoMercadoria * 0.07;
    const precoNovo = precoMercadoria + aumento;

    res.json({
        nomeMercadoria,
        precoOriginal: precoMercadoria.toFixed(2),
        aumento: aumento.toFixed(2),
        precoNovo: precoNovo.toFixed(2),
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
