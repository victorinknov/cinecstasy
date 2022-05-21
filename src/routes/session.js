// Inicializa o Express, Router e BD
const express = require('express'),
    router = express.Router(),
    pool = require('../database')

router.get('/dashboard/session', async (req, res) => {
    const alreadyBought = await pool.query('SELECT * FROM tbTicket')
    const covidSeat = await pool.query('SELECT * FROM tbAntiCovid')
    const movieName = await pool.query('SELECT * FROM tbSession WHERE idSession = 1')
    let idOfMovie = movieName[0].idMovie
    let queryMovieName = await pool.query('SELECT * FROM tbMovie WHERE idMovie = ?', idOfMovie)
    let nameOfMovie = queryMovieName[0].movieName 
    res.render('links/session', { alreadyBought, covidSeat, movieName, nameOfMovie })
})

router.post('/dashboard/comprar-ingressos/sessao', async (req, res) => {
    var idSession = 1
    var idUser = 1
    var { idSeat } = req.body
    var arrayLength = idSeat.length

    if (arrayLength === 3) {
        function isLetter(char) {
            return (/[a-zA-Z]/).test(char)
        }

        var letter = idSeat[0],
            firstNum = Number(idSeat[1]),
            lastNum = Number(idSeat[2]),
            totalSum = (firstNum * 10) + lastNum

        if (isLetter(idSeat[0, 1]) === false && isLetter(idSeat[1, 0]) === true) {
            // Efetua a compra dos assentos socilitados
            var { idSeat } = req.body
            const buyTicket = { idSession, idSeat, idUser }

            console.log(buyTicket)
            await pool.query('INSERT INTO tbTicket set ?', [buyTicket])
            // Adiciona uma poltrona anticovid a direita nas extremidades
            if (totalSum == 1 || totalSum == 10) {
                // Adiciona uma assento anticovid a direita
                lastNum = lastNum + 1
                var idSeat = letter + '' + firstNum + '' + lastNum
                var antiCovid = { idSession, idSeat }
                await pool.query('INSERT INTO tbAntiCovid set ?', [antiCovid])
            }

            // Adiciona uma poltrona anticovid a esquerda nas extremidades
            if (totalSum == 9 || totalSum == 18) {
                lastNum = lastNum - 1
                var idSeat = letter + '' + firstNum + '' + lastNum
                var antiCovid = { idSession, idSeat }
                await pool.query('INSERT INTO tbAntiCovid set ?', [antiCovid])
            }

            // Adiciona poltronas anticovid entre
            if (totalSum != 1 && totalSum != 10 && totalSum != 9 && totalSum != 18) {
                // Adiciona uma assento anticovid a direita
                lastNum = lastNum + 1
                var idSeat = letter + '' + firstNum + '' + lastNum
                var antiCovid = { idSession, idSeat }
                await pool.query('INSERT INTO tbAntiCovid set ?', [antiCovid])
                // Adiciona uma assento anticovid a esquerda
                lastNum = lastNum - 2
                var idSeat = letter + '' + firstNum + '' + lastNum
                var antiCovid = { idSession, idSeat }
                await pool.query('INSERT INTO tbAntiCovid set ?', [antiCovid])
            }
        } else {
            for (var i = 0; i < arrayLength; i++) {
                var { idSeat } = req.body
                idSeat = idSeat[i]
                const buyTicket = { idSession, idSeat, idUser }
                await pool.query('INSERT INTO tbTicket set ?', [buyTicket])
                if (i == 0) {
                    letter = idSeat[0, 0]
                    firstNum = Number(idSeat[0, 1])
                    lastNum = Number(idSeat[0, 2])
                    currentNum = (firstNum * 10) + lastNum - 1
                    if (currentNum != 0 && currentNum != 9) {
                        currentNum.toString()
                        if (currentNum >= 10) {
                            idSeat = letter + currentNum
                        }
                        if (currentNum < 10) {
                            idSeat = letter + '0' + currentNum
                        }
                        var antiCovid = { idSession, idSeat }
                        await pool.query('INSERT INTO tbAntiCovid set ?', [antiCovid])
                    }
                }
                if (i == arrayLength - 1) {
                    letter = idSeat[0, 0]
                    firstNum = Number(idSeat[0, 1])
                    lastNum = Number(idSeat[0, 2])
                    currentNum = (firstNum * 10) + lastNum + 1
                    if (currentNum != 10 && currentNum <= 18) {
                        currentNum.toString()
                        if (currentNum >= 10) {
                            idSeat = letter + currentNum
                        }
                        if (currentNum < 10) {
                            idSeat = letter + '0' + currentNum
                        }
                        var antiCovid = { idSession, idSeat }
                        await pool.query('INSERT INTO tbAntiCovid set ?', [antiCovid])
                    }
                }
            }
        }

    } else {
        for (var i = 0; i < arrayLength; i++) {
            var { idSeat } = req.body
            idSeat = idSeat[i]
            const buyTicket = { idSession, idSeat, idUser }
            await pool.query('INSERT INTO tbTicket set ?', [buyTicket])
            if (i == 0) {
                letter = idSeat[0, 0]
                firstNum = Number(idSeat[0, 1])
                lastNum = Number(idSeat[0, 2])
                currentNum = (firstNum * 10) + lastNum - 1
                if (currentNum != 0 && currentNum != 9) {
                    currentNum.toString()
                    if (currentNum >= 10) {
                        idSeat = letter + currentNum
                    }
                    if (currentNum < 10) {
                        idSeat = letter + '0' + currentNum
                    }
                    var antiCovid = { idSession, idSeat }
                    await pool.query('INSERT INTO tbAntiCovid set ?', [antiCovid])
                }
            }
            if (i == arrayLength - 1) {
                letter = idSeat[0, 0]
                firstNum = Number(idSeat[0, 1])
                lastNum = Number(idSeat[0, 2])
                currentNum = (firstNum * 10) + lastNum + 1
                if (currentNum != 10 && currentNum <= 18) {
                    currentNum.toString()
                    if (currentNum >= 10) {
                        idSeat = letter + currentNum
                    }
                    if (currentNum < 10) {
                        idSeat = letter + '0' + currentNum
                    }
                    var antiCovid = { idSession, idSeat }
                    await pool.query('INSERT INTO tbAntiCovid set ?', [antiCovid])
                }
            }
        }
    }
    res.redirect('/dashboard/session')
})

module.exports = router