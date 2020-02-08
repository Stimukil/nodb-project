const foundPlanets = []

let id = 0

module.exports = {
    getFoundPlanets: (req, res) => {
        res.status(200).send(foundPlanets)
    },

    findPlanets: (req, res) => {
        const {planet} = req.body
        planet.id = id
        id++

        foundPlanets.push(planet)

        res.status(200).send(foundShips)
    },

    editPlanetName: (req, res) => {
        const {id} = req.params
        const {name} = req.body

        const index = foundPlanets.findIndex(element => {
            return element.id === +id
        })

        foundPlanets[index].name = name

        res.status(200).send(foundPlanets)
    }, 

    removePlanet: (req, res) => {
        const {id} = req.params

        const index = foundPlanets.findIndex(element => {
            return element.id === +id
        })

        foundPlanets.splice(index, 1)

        res.status(200).send(foundPlanets)
    }
}