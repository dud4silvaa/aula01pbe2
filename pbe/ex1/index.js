const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/desconto', (req, res) => {
    const {salario} = req.body;

    let desconto = 0;

    if (salario > 1212) {
        desconto = salario - (0.075 * salario);
        res.json({desconto});
    }else if ( salario <= 2427.35){
        desconto = salario - (0.09* salario);
        res.json({desconto});
    }else if ( salario <= 3641.03){
        desconto = salario - (0.12*salario);
        res.json({desconto});
    } else {
        desconto = salario - (0.14*salario);
        res.json({desconto});
    }
 
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});