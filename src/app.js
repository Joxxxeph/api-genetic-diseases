const express = require('express')
const geneticDiseases = require('./genetic-diseases/genetic-diseases.route')

const app = express()

const requestTime= (req, res, next) => {
    const requestT = new Date().toISOString();
    
    req.requestT = requestT
    next()
}
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(requestTime)

app.use('/api/v1', geneticDiseases)






module.exports = app;