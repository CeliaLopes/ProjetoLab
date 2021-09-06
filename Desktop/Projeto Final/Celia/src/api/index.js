const express = require ('express')

const usuarioRouter = require('./usuario');
const produtosRouter = require('./produtos');
const listaRouter = require('./listaCompra.js');
const categoriasRouter = require('./categorias');
const lojasRouter = require('./lojas');
const enderecoRouter = require('./endereco');

const router = express.Router();

router.use('/usuario', usuarioRouter);
router.use('/produtos', produtosRouter);
router.use('/listaCompra', listaRouter);
router.use('/categorias', categoriasRouter);
router.use('/lojas', lojasRouter);
router.use('endereco', enderecoRouter);

module.exports = router