const axios = require('axios')
const foundShips = []

let id = 0

module.exports = {
    availableShips: (req, res) => {
        const rand = Math.ceil(Math.random() * 15)

        axios.get(`https://swapi.co/api/starships/${rand}`).then(response => {
           foundShips.push(response.data)
           res.status(200).send(foundShips)
        }).catch(err=>console.log(err))
    },

    getFoundShips: (req, res) => {
        res.status(200).send(foundShips)
    },

    //get random ship
    getRandomShips: (req, res) => {
        res.status(200).send(this.getRandomShips)
    },

    findShips: (req, res) => {
        const {ship} = req.body
        ship.id = id
        id++

        foundShips.push(ship)

        res.status(200).send(foundShips)
    },

    editShipName: (req, res) => {
        const {name: oldName} = req.params
        const {name} = req.body

        const index = foundShips.findIndex(element => {
            return element.name === oldName
        })
        console.log(name)
        foundShips[index].name = name

        res.status(200).send(foundShips)
    },

    removeShip: (req, res) => {
        const {name} = req.params

        const index = foundShips.findIndex(element => {
            return element.name === name
        })

        foundShips.splice(index,  1)

        res.status(200).send(foundShips)
    }
}

