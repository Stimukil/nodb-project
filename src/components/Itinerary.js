import React from 'react'
import Ships from './Ships'
// import Planets from './Planets'

function Itinerary(props) {
    console.log(props)
    const shipList = props.foundShips.map(element => {
        return (
            <Ships
            saveShipName={props.saveShipName}
            removeShip={props.removeShip}
            ship={element}
            key={element.id}
            />
        )
    })

    

    return (
        <div><h2>Your Travel Itinerary</h2>
           {/* // {ship}
           {planet} */}
        </div>
    )
}

export default Itinerary