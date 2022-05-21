// Inicializa o Express, Router, BD e o Uploader
const express = require('express'),
    router = express.Router(),
    pool = require('../database'),
    multer = require('multer')

// Registro do Cinema
router.post('/registrar/cinema', async(req, res) => {
    let {
        nameCinema,
        CNPJ,
        credencial,
        password,
        logoCinema
    } = req.body
        // Tira a máscara do CNPJ e cria uma CONST pra inserir no BD
    CNPJ = CNPJ.replace(/\D/g, '')
    const registerCinema = { nameCinema, CNPJ, credencial, password, logoCinema }
    console.log(registerCinema)
    await pool.query('INSERT INTO tbCinema set ?', [registerCinema])
    res.redirect('/dashboard')
})

// Mostra todos os filmes na dashboard do cinema
router.get('/dashboard/movies', async(req, res) => {
    const list_movies = await pool.query('SELECT * FROM tbMovie ORDER BY idMovie DESC')
    const user_logged_data = await pool.query('SELECT * FROM tbUser WHERE idUser = 1')
    res.render('links/movies', { user_logged_data, list_movies })
})

module.exports = router