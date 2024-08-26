const express = require ('express');
const enderecoController = require('./controller/EnderecoController');

const router = express.Router();

router.post('/enderecos', enderecoController.createEndereco);
router.get('/enderecos', enderecoController.getAllEndereco);
router.get('/enderecos/:id', enderecoController.getEnderecoById);
router.put('/enderecos/:id', enderecoController.updateEndereco);
router.delete('/enderecos/:id', enderecoController.deleteEndereco);

module.exports = router;
