import React, {Component} from 'react';
import Planets from './Planets'
import axios from 'axios'

class PlanetFinder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            availablePlanets: [],
        }
    }

// move to itinerary
componentDidMount() {
    axios.get('/api/avail-planets').then(res => {
        console.log(res)
        this.setState({
            availablePlanets: res.data
        })
    })
}

    planetFinder = () => {
        axios.get('/api/random-planet').then(res => {
            console.log(res)
            this.setState({
                availablePlanets: [...this.state.availablePlanets, res.data[0]]
            })
        })
    }

render(){

    //move to itinerary
    const planetsList = this.state.availablePlanets.map(element => {
        return <Planets key={element.id}
        // addPlanet={this.props.findPlanets}
        planet={element} editPlanetName={this.props.editPlanetName} removePlanet={this.props.removePlanet} />
    })

    return (
        <div><h2>Planet:</h2>
        <div>
            <div className='planetsList' onClick={()=>{
                this.planetFinder()
                 }}>
            </div>
            <span>
            {planetsList}
            </span>
        </div>
    </div>
    )
}

}

export default PlanetFinder