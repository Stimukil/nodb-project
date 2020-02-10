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
// endpoint for random ship
app.get('/api/random-ship', shipsCtrl.availableShips)

app.get('/api/avail-planets', planetsCtrl.getFoundPlanets)
// endpoint for random planet
app.get('/api/random-planet', planetsCtrl.availablePlanets)

// get ships and planets 
app.get('/api/ships', vehicleCtrl.availableShips)
app.get('/api/planets', destinationCtrl.availablePlanets)

app.post('/api/ships', vehicleCtrl.availableShips)
app.post('/api/planets', destinationCtrl.availablePlanets)

// edit ship name
app.put('/api/ships/:name', shipsCtrl.editShipName)
// edit planet name
app.put('/api/planets/:name', planetsCtrl.editPlanetName)

// delete ship
app.delete('/api/ships/:name', shipsCtrl.removeShip)
// delete planet
app.delete('/api/planets/:name', planetsCtrl.removePlanet)


app.listen(PORT, () => console.log(`listening to Van Halen ${PORT}`))