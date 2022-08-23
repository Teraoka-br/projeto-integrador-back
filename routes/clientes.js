const express = require('express');
const { consultarcliente,cadastrarcliente,deletecliente,atualizarcadastrocliente,consultarclientes,} = require('../controllers/clientes');

const router = express.Router();

router.get('/', consultarclientes);
router.post('/', cadastrarcliente);
router.get('/:id', consultarcliente);
router.post('/:id', atualizarcadastrocliente);
router.put('/:id', atualizarcadastrocliente);
router.patch('/:id', atualizarcadastrocliente);
router.delete('/:id', deletecliente);

module.exports = router;