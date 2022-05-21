const express = require('express'),
    router = express.Router(),
    pool = require('../database'),
    multer = require('multer')

// New user route
router.get('/registrar/usuario', (req, res) => {
    res.render('links/registrar/usuario')
})

// New snackbar route
router.get('/registrar/snackbar', (req, res) => {
    res.render('links/registrar/snackbar')
})

// All rooms view
router.get('/dashboard/room', (req, res) => {
    res.render('links/room')
})

// New cinema route
router.get('/registrar/cinema', (req, res) => {
    res.render('links/registrar/cinema')
})

// New movie route
router.get('/dashboard/movies/add', (req, res) => {
    res.render('links/add/add')
})

// Edit movie route
router.get('/dashboard/movies/edit/:idMovie', async(req, res) => {
    const { idMovie } = req.params
    const editMovie = await pool.query('SELECT * FROM tbMovie WHERE idMovie = ?', [idMovie])
    console.log(editMovie[0])
    res.render('links/add/edit', { editMovie: editMovie[0] })
})

module.exports = router