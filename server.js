const express = require ('express');
const rotas = require('./routes');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use('/api', rotas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

app.get('/', (req,res) => {
    res.send('hello world');

});

app.get('/consulta-cep/:cep',async(req, res) => {
    const cep = req.params.cep;

    try{
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data);
    }catch (error){
        console.error('erro',error);
        res.status(500).send('erro na consulta do cep');
    }
});

const cepRegex = /^[0-9]{5}-?[09]{3}$/;

app.get('/rota', (req,res) => {
    res.send('rota');

});

app.listen(port , () => {
    console.log(`Servidor roda no http://localhost:${port}`);
});

