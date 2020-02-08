import React from 'react'
import Ships from './Ships'
import Planets from './Planets'

// componentDidMount() {    
//         axios.get('/api/avail-ships').then(res => {
//             console.log(res)
//             this.setState({
//                 availableShips: res.data
//             })
//         })
//     }

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
        
    const planetList = props.foundPlanets.map(element => {
        return (
            <Planets
            savePlanetName={props.savePlanetName}
            removePlanet={props.removePlanet}
            planet={element}
            key={element.id}
            />
        )
    })
        

    return (
        <div><h2></h2>
           {Ships}
           {Planets}
        </div>
    )
}

export default Itinerary