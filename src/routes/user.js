// Inicializa o Express, Router, BD e o Multer
const
    express = require('express'),
    router = express.Router(),
    pool = require('../database'),
    multer = require('multer')

// Inicia os parâmetros do multer
const mlt_newUserImage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './src/public/upload/user/profile/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

// Armazena o upload do usuário na pasta pública
const upload_user_image = multer({ storage: mlt_newUserImage })
router.post('/registrar/usuario', upload_user_image.single('profileImage'), async(req, res) => {

    var newUser = {
            firstName,
            lastName,
            email,
            password,
            birthday,
            profileImage
        } = req.body // Pega os dados oriundos do form enviados pela DOM

    console.log(newUser)

    var userImage = req.file.originalname

    var registerUser = {
        firstName,
        lastName,
        email,
        password,
        birthday,
        userImage
    }

    console.log(registerUser)

    await
    pool.query('INSERT INTO tbUser set ?', [registerUser])
    res.redirect('/dashboard') // Redireciona o usuário pra dashboard

})

module.exports = router