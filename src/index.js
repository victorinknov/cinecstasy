// Initialize modules and libraries
const
    express = require('express'), // https://www.npmjs.com/package/express
    morgan = require('morgan'), // https://www.npmjs.com/package/morgan
    exphbs = require('express-handlebars'), // https://www.npmjs.com/package/handlebars
    path = require('path') // https://nodejs.org/api/path.html

// Initialize the backend 
app = express()

// Setting up the backend properties || Definindo propriedades do backend
app.set('port', process.env.PORT || 5551)
app.set('views', path.join(__dirname, 'views'))

// Define Handlebars as view engine and defines the properties
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs')

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Global Variables
app.use((req, res, next) => {
    next()
})

// Rotas
app.use(require('./routes'))
app.use(('/links', require('./routes/links')))
app.use(('/links', require('./routes/login')))
app.use(('/links', require('./routes/user')))
app.use(('/links', require('./routes/cinema')))
app.use(('/links', require('./routes/add-movie')))
app.use(('/links', require('./routes/movie-search')))
app.use(('/links', require('./routes/edit-movie')))
app.use(('/links', require('./routes/session')))

// Public dir
app.use(express.static(path.join(__dirname, 'public')))

// Start the server
app.listen(app.get('port'), () => {
    console.log('Server running at', app.get('port'))
})