const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const bodyParser = require('body-parser')

// include controller name and path here
const pantController = require('./controllers/pants')
const shirtController = require('./controllers/shirts')
const shortController = require('./controllers/shorts')


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/pants', pantController.getAllPants)
app.get('/shirts', shirtController.getAllShirts)
app.get('/shorts', shortController.getAllShorts)

app.get('/pants/:id', pantController.getOnePant)
app.get('/shirts/:id', shirtController.getOneShirt)
app.get('/shorts/:id', shortController.getOneShort)


app.post('/pants', pantController.createPant)
app.post('/shirts', shirtController.createShirt)
app.post('/shorts', shortController.createShort)

app.put('/pants/:id', pantController.updatePant)
app.put('/shirts/:id', shirtController.updateShirt)
app.put('/shorts/:id', shortController.updateShort)

app.delete('/pants/:id', pantController.deletePant)
app.delete('/shirts/:id', shirtController.deleteShirt)
app.delete('/shorts/:id', shortController.deleteShort)



app.get('/', (req, res) => {
    res.send('This is root!!')
  })

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })  