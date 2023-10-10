const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const bodyParser = require('body-parser')

// include controller name and path here
// const affiliationController = require('./controllers/affiliations.js')
// const villainController = require('./controllers/villains.js')
// const heroController = require('./controllers/heros.js')


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())






app.get('/', (req, res) => {
    res.send('This is root!!')
  })





app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })  