// Inicializa o Express, Router, BD e o Multer
const
    express = require('express'),
    router = express.Router(),
    pool = require('../database'),
    alert = require('alert'),
    localStorage = require('localStorage'),
    store = require('store2')

// Login route
router.get('/login', (req, res) => {
    res.render('links/login')
})

router.get('/', (req, res) => {
    res.redirect('/login')
})

router.post('/login', async(req, res) => {
    let {
        email,
        password
    } = req.body // Pega os dados oriundos do form enviados pela DOM

    if (email.indexOf('@')) {
        var userReturned = await pool.query('SELECT * FROM tbUser WHERE email = ?', [email])
    }

    if (userReturned.length == 0) {
        alert('User not found.')
        res.redirect('/')
    }
    if (userReturned.length == 1) {
        if (password == userReturned[0].password) {

            let idUser = userReturned[0].idUser,
                firstName = userReturned[0].firstName,
                lastName = userReturned[0].lastName,
                email = userReturned[0].email,
                dateCookie = new Date()

            let cookie4u = {
                idUser,
                firstName,
                lastName,
                email,
                dateCookie
            }

            await
            pool.query('INSERT INTO tbCookieSession set ?', [cookie4u])
            res.redirect('/dashboard')
            store('User', { cookie4u })
            console.log(store('User'))

        }
        if (password != userReturned[0].password) {
            await alert('Wrong password.')
            res.redirect('/login')
        }
    }
    console.log()
})

module.exports = router