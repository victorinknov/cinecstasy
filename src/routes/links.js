// Inicializa o Express, Router e BD
const express = require('express'),
    router = express.Router(),
    pool = require('../database'),
    multer = require('multer')

// Registro de Snackbar
const storage_snackbar_logo_image = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './src/public/upload/snackbar/logo/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload_snackbar_image = multer({ storage: storage_snackbar_logo_image })

router.post('/registrar/snackbar', upload_snackbar_image.single('logoSnackbar'), async(req, res) => {
    var { snackBarName, CNPJ, typeFood, credencial, password } = req.body;
    // Tira a máscara do CNPJ e cria uma CONST pra inserir no BD
    CNPJ = CNPJ.replace(/\D/g, '')
    const logoSnackbar = 'src="/upload/snackbar/logo/' + req.file.originalname + '"'
    const registerSnackbar = { snackBarName, CNPJ, typeFood, credencial, logoSnackbar, password }
    await pool.query('INSERT INTO tbSnackBar set ?', [registerSnackbar])
    res.redirect('/dashboard')
})

router.get('/dashboard', async(req, res) => {
    let user_logged_data = await pool.query('SELECT * FROM tbUser WHERE idUser = 1')
    res.render('links/dashboard', { user_logged_data })
})

// Exporta as rotas para utilização
module.exports = router