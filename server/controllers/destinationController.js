const axios = require('axios')

module.exports = {
    availablePlanets: (req, res) => {
        availablePlanets = []
        const rand = Math.ceil(Math.random() * 61)

        axios.get(`https://swapi.co/api.planets/${rand}`).then(response => {
            availablePlanets.push(response.data)
            res.status(200).send(availablePlanets)
        })
    }
}