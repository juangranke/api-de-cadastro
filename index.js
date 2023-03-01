const express = require('express')
const app = express()
const Oracle = require('./config/database/database')

app.use(express.json())


app.get('/', (req, res) => {
    res.send(Oracle(`select * from usuarios`))
    console.log(Oracle('select * from usuarios'))
})



app.listen('3663', (err) => {
    if (err) {
        console.log('Aconteceu um erro ao iniciar o banco!')
    } else {
        console.log('Banco iniciado com sucesso!')
    }
})