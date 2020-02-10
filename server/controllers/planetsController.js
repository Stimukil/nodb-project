const axios = require('axios')
const foundPlanets = []

let id = 0

module.exports = {
    availablePlanets: (req, res) => {
        const rand = Math.ceil(Math.random() * 61)

        axios.get(`https://swapi.co/api/planets/${rand}`).then(response => {
            foundPlanets.push(response.data)
            res.status(200).send(foundPlanets)            
        }).catch(err=>console.log(err))
    },

    getFoundPlanets: (req, res) => {
        res.status(200).send(foundPlanets)
    },

    //get random planet
    getRandomPlanets: (req, res) => {
        res.status(200).send(this.getRandomPlanets)
    },

    findPlanets: (req, res) => {
        const {planet} = req.body
        planet.id = id
        id++

        foundPlanets.push(planet)

        res.status(200).send(foundShips)
    },

    editPlanetName: (req, res) => {
        const {name: oldName} = req.params
        const {name} = req.body

        const index = foundPlanets.findIndex(element => {
            return element.name === oldName
        })
        console.log(name)
        foundPlanets[index].name = name

        res.status(200).send(foundPlanets)
    }, 

    removePlanet: (req, res) => {
        const {name} = req.params

        const index = foundPlanets.findIndex(element => {
            return element.name === name
        })

        foundPlanets.splice(index, 1)

        res.status(200).send(foundPlanets)
    }
}