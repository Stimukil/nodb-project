const axios = require('axios')

module.exports = {
    availableShips: (req, res) => {
        const availableShips = []
        const rand = Math.ceil(Math.random() * 15)

        axios.get(`https://swapi.co/api/starships/${rand}`).then(response => {
            availableShips.push(response.data)
            res.status(200).send(availableShips)
        })
    }
}