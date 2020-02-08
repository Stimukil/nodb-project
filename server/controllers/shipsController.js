const foundShips = []

let id = 0

module.exports = {
    getFoundShips: (req, res) => {
        res.status(200).send(foundShips)
    },

    findShips: (req, res) => {
        const {ship} = req.body
        ship.id = id
        id++

        foundShips.push(ship)

        res.status(200).send(foundShips)
    },

    editShipName: (req, res) => {
        const {id} = req.params
        const {name} = req.body

        const index = foundShips.findIndex(element => {
            return element.id === +id
        })

        foundShips[index].name = name

        res.status(200).send(foundShips)
    },

    removeShip: (req, res) => {
        const {id} = req.params

        const index = foundShips.findIndex(element => {
            return element.id === +id
        })

        foundShips.splice(index,  1)

        res.status(200).send(foundShips)
    }
}

