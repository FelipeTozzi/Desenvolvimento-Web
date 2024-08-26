const {Endereco} = require('../models');

exports.createEndereco = async (req, res) => {

    try {
        const {Cep, Logradouro, Numero, Complemento, Bairro, Cidade, Estado, MunicipioIBGE} = req.body;

        const novoEndereco = await Endereco.create({
            Cep, 
            Logradouro, 
            Numero, Complemento, 
            Bairro, 
            Cidade, 
            Estado, 
            MunicipioIBGE
        });
        res.status(201).json(novoEndereco);
    }catch (error){
        res.status(500).json({error: 'erro', details: error.message});
    }
};

exports.getAllEnderecos = async(req, res) => {
    try {
        const {id} = req.params;
        const Endereco = await Endereco.findByPk(id);

        if(!Endereco){
            return res.status(404).json({error: 'endereço não encontrado'})
        }
        res.status(200).json(endereco);
    }catch(error){
        res.status(500).json({error: 'erro ao buscar endereço', details: error.message});
    }
};

exports.updateEndereco = async(req, res) => {
    try {
        const {id} = req.params;
        const{Cep, Logradouro, Numero, Complemento, Bairro, Cidade, Estado, MunicipioIBGE} = req.body;

        const endereco = await Endereco.findByPk(id);
        
        if (!endereco){
            return res.status(404).json({error: 'Endereço não encontrado'})
        }
        endereco.Cep = Cep, 
        endereco.Logradouro= Logradouro, 
        endereco.Numero= Numero, 
        endereco.Complemento= Complemento, 
        endereco.Bairro = Bairro, 
        endereco.Cidade = Cidade, 
        endereco.Estado = Estado, 
        endereco.MunicipioIBGE = MunicipioIBGE;

        await endereco.save();

        res.status(200).json(endereco);
    }catch (error){
        res.status(500).json({error: 'erro ao atualizar endereço', details: error.message});
    }
};

exports.deleteEndereco = async(req, res) => {
    try{
        const {id} = req.params;

        const endereco = await Endereco.findByPk(id);

        if(!endereco){
            return res.status(404).json({error: 'endereço não encontrado'});
        }
        await endereco.destroy();

        res.status(204).send(); //sucesso
    }catch (error){
        res.status(500).json({error: 'erro ao deletar endereço', details: error.message});
    }    
};


