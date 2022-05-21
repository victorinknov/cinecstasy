// Inicializa o Express, Router, BD e o Multer
const
    express = require('express'),
    router = express.Router(),
    pool = require('../database'),
    multer = require('multer'),
    localStorage = require('localStorage')

// Inicia os parâmetros do multer
const mlt_newMoviePoster = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './src/public/upload/movies/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

// Armazena o upload do usuário na pasta pública
const upload_movie_poster = multer({ storage: mlt_newMoviePoster })
router.post('/dashboard/movies/add', upload_movie_poster.single('moviePoster'), async(req, res) => {

    let newMovie = {
            movieName,
            sinopse,
            parentalRating,
            releaseDate,
            movieCast,
            duration,
            director,
            genre,
            status
        } = req.body // Pega os dados oriundos do form enviados pela DOM

    const moviePoster = req.file.originalname

    let statusClass = 'class="status-' + status + '"' // Insere o status em uma classe

    sinopse = `${sinopse}` // Coloca a sinopse entre aspas

    const classInd = `parental-${parentalRating}`
    const dateString = releaseDate // Armazena a data como string

    const registerMovie = {
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
    }

    await
    pool.query('INSERT INTO tbMovie set ?', [registerMovie])

    res.redirect('/dashboard/movies') // Redireciona o usuário pra dashboard
})

module.exports = router