import React, {Component} from 'react';
import Destination from './Destination'
import axios from 'axios';

class PlanetFinder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            availablePlanets: [],
        }
    }

componentDidMount() {
    axios.get('/api/swapi').then(res => {
        this.setState({
            availablePlanets: res.data
        })
    })
}

render(){

    const planetsList = this.state.availablePlanets.map(element => {
        return <Destination key={element.id}
        addPlanet={this.props.findPlanets}
        planet={element} />
    })

    return (
        <div className='planetsList'>
            {planetsList}
        </div>
    )
}

}

export default PlanetFinder