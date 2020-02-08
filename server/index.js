const express = require('express');
// const cors = require('cors');
const shipsCtrl = require('./controllers/shipsController')
const planetsCtrl = require('./controllers/planetsController')
const vehicleCtrl = require('./controllers/vehicleController')
const destinationCtrl = require('./controllers/destinationController')

const app = express()
const PORT = 5150

app.use(express.json())
// app.use(cors())

app.get('/api/avail-ships', shipsCtrl.getFoundShips)
app.get('/api/avail-planets', planetsCtrl.getFoundPlanets)

app.get('/api/ships', vehicleCtrl.availableShips)
app.get('/api/planets', destinationCtrl.availablePlanets)
app.post('/api/ships', vehicleCtrl.availableShips)
app.post('/api/planets', destinationCtrl.availablePlanets)
// app.put('/api/ships', vehicleCtrl.editShipName)
// app.put('/api/planets', destinationCtrl.editPlanetName)
// app.delete('/api/ships/:id', vehicleCtrl.removeShip)
// app.delete('/api/planets/:id', destinationCtrl.removePlanet)


app.listen(PORT, () => console.log(`listening on port ${PORT}`))