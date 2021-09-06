const express = require('express')
const router = express.Router()
const { categoria } = require('../models')
const CategoriasService = require('../service/categorias')
const { body, check, validationResult } = require('express-validator')

const categoriaService = new CategoriasService(categoria)


router.get('/', async (req, res) => {
    res.send('Lista de categoria!')
    const categoria = await categoriaService.get()
    res.status(200).json(categoria)
})

router.post('/', async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }
    const { categoria} = req.body
    try {
        await categoriaService.adicionar({ categoria})
        res.status(201).send('Produto adicionado')
    } catch (erro) {
        res.status(400).send(erro.message)
    }
})

module.exports = router