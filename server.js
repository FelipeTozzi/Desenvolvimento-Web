const express = require ('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('hello workd');

});



app.get('/consulta-cep/:cep',async(req, res) => {
    const cep = req.params.cep;
    const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;

    try{
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data);
    }catch (error){
        console.error('deu erro',error);
        res.status(500).send('erro na consukta do cep');
    }
});

app.get('/rota', (req,res) => {
    res.send('O 1° Batalhão de Choque "Tobias de Aguiar" é um batalhão');

});

app.listen(port , () => {
    console.log(`Servidor roda no http://localhost:${port}`);
});

