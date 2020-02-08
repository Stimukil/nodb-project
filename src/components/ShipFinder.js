import React, {Component} from 'react';
import Vehicle from './Vehicle'
import axios from 'axios'

class ShipFinder extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            availableShips: [],
        }
    }

componentDidMount() {
    axios.get('/api/swapi').then(res => {
        this.setState({
            availableShips: res.data
        })
    })
}

render(){

    const shipsList = this.state.availableShips.map(element => {
        return <Vehicle key={element.id}
        addShip={this.props.findShips}
        ship={element} />
    })
    
    return (
        <div>
           {shipsList}
        </div>
    )
}

}

export default ShipFinder