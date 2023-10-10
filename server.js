const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const bodyParser = require('body-parser')

// include controller name and path here
const pantController = require('./controllers/pants.js')
const shirtController = require('./controllers/shirts')
const shortController = require('./controllers/shorts')


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/pants', pantController.getAllPants)
// app.get('/shirts', shirtController.getAll)
// app.get('/shorts', shortController.getAll)

app.get('/pants/:id', pantController.getOnePant)
// app.get('/villains/:id', villainController.getOneVillain)
// app.get('/heros/:id', heroController.getOneHero)


app.post('/pants', pantController.createPant)
// app.post('/villains', villainController.createVillain)
// app.post('/heros', heroController.createHero)

app.put('/pants/:id', pantController.updatePant)
// app.put('/villains/:id', villainController.updateVillain)
// app.put('/heros/:id', heroController.updateHero)

app.delete('/pants/:id', pantController.deletePant)
// app.delete('/villains/:id', villainController.deleteVillain)
// app.delete('/heros/:id', heroController.deleteHero)













app.get('/', (req, res) => {
    res.send('This is root!!')
  })

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })  