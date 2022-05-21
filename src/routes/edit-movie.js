// Inicializa o Express, Router, BD e o Uploader
const express = require('express'),
    router = express.Router(),
    pool = require('../database'),
    multer = require('multer'),
    localStorage = require('localStorage')

// Registra um novo filme
// Inicia os parâmetros do multer
const storage_new_movie_poster = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './src/public/upload/movies/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

// Armazena o upload do usuário na pasta pública
const upload_movie_poster = multer({ storage: storage_new_movie_poster })
router.post('/dashboard/movies/edit/:idMovie', upload_movie_poster.single('moviePoster'), async(req, res) => {
    const { idMovie } = req.params

    let {
        movieName,
        sinopse,
        parentalRating,
        releaseDate,
        movieCast,
        duration,
        director,
        genre,
        status,
        fakeMoviePoster,
        moviePoster
    } = req.body // Pega os dados oriundos do form enviados pela DOM

    if (req.file === undefined) {
        moviePoster = fakeMoviePoster
    } else {
        moviePoster = req.file.originalname
    }

    let statusClass = `status-${status}` // Insere o status e uma classe

    sinopse = `"${sinopse}"`

    const classInd = `parental-${parentalRating}`

    const dateString = releaseDate // Armazena a data como string

    var editMovie = {
            movieName,
            sinopse,
            parentalRating,
            releaseDate,
            movieCast,
            duration,
            director,
            genre,
            classInd,
            dateString,
            status,
            statusClass,
            moviePoster
        } // Define o que vai ser inserido na tabela de filmes

    console.log(editMovie)
    await pool.query('UPDATE tbMovie set ? WHERE idMovie = ?', [editMovie, idMovie]) // Faz a query
    res.redirect('/dashboard/movies') // Redireciona o usuário pra dashboard
})

module.exports = router