// Inicializa o Express, Router e BD
const express = require('express'),
    router = express.Router(),
    pool = require('../database')

// Pesquisa filme pelo nome
router.post('/dashboard/movies', async(req, res) => {
    const { mySearch, typeSearch, filterSearch } = req.body
    console.log(mySearch, typeSearch, filterSearch)
    const user_logged_data = await pool.query('SELECT * FROM tbUser WHERE idUser = 5')

    if (typeSearch === 'movieName') {
        if (mySearch === 'ativo' || mySearch === 'inativo' || mySearch === 'lançamento' || mySearch === 'em-breve' || mySearch === 'ultimos-dias') {
            var selectMovie = await pool.query('SELECT * FROM tbMovie WHERE status = ' + '"' + mySearch + '"')
            res.render('links/search', { selectMovie, user_logged_data, mySearch })
        }
        if (mySearch === 'em breve') {
            var selectMovie = await pool.query('SELECT * FROM tbMovie WHERE status = em-breve')
            res.render('links/search', { selectMovie, user_logged_data, mySearch })
        }
        if (mySearch === 'ultimos dias') {
            var selectMovie = await pool.query('SELECT * FROM tbMovie WHERE status = ultimos-dias')
            res.render('links/search', { selectMovie, user_logged_data, mySearch })
        }
        if (mySearch === 'lancamento') {
            var selectMovie = await pool.query('SELECT * FROM tbMovie WHERE status = lançamento')
            res.render('links/search', { selectMovie, user_logged_data, mySearch })
        }
        if (mySearch === 'L' || mySearch === 'l' || mySearch === 'livre' || mySearch == 'Livre' || mySearch === 'LIVRE') {
            var selectMovie = await pool.query('SELECT * FROM tbMovie WHERE parentalRating = "L"')
            res.render('links/search', { selectMovie, user_logged_data, mySearch })
        }
        if (mySearch === '10' || mySearch === '12' || mySearch === '14' || mySearch === '16' || mySearch === '18') {
            var selectMovie = await pool.query('SELECT * FROM tbMovie WHERE parentalRating = ' + '"' + mySearch + '"')
            res.render('links/search', { selectMovie, user_logged_data, mySearch })
        } else {
            var selectMovie = await pool.query('SELECT * FROM tbMovie WHERE movieName LIKE ' + '"%' + mySearch + '%"')
            res.render('links/search', { selectMovie, user_logged_data, mySearch })
        }
    }

    if (typeSearch === 'ação' || typeSearch === 'animação' || typeSearch === 'aventura' || typeSearch === 'assalto' || typeSearch === 'comédia' || typeSearch === 'drama' || typeSearch === 'documentário' || typeSearch === 'faroeste' || typeSearch === 'guerra' || typeSearch === 'terror' || typeSearch === 'thriller' | typeSearch === 'romance' || typeSearch === 'sci-fi' || typeSearch === 'suspense') {
        var selectMovie = await pool.query('SELECT * FROM tbMovie WHERE genre = ' + '"' + typeSearch + '"')
        res.render('links/search', { selectMovie, user_logged_data, mySearch })
    }

    if (filterSearch === 'ativo' || filterSearch === 'inativo' || filterSearch === 'lançamento' || filterSearch === 'em-breve' || filterSearch === 'ultimos-dias') {
        var selectMovie = await pool.query('SELECT * FROM tbMovie WHERE status = ' + '"' + filterSearch + '"')
        console.log(filterSearch)
        res.render('links/search', { selectMovie, user_logged_data, mySearch })
    }

})

module.exports = router