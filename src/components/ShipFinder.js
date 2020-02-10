import React, {Component} from 'react';
import Ships from './Ships'
import axios from 'axios'

class ShipFinder extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            availableShips: [],
        }
    }

// move to itinerary
componentDidMount() {
        axios.get('/api/avail-ships').then(res => {
        console.log(res)
        this.setState({
            availableShips: res.data
        })
    })
}

    shipFinder = () => {
        axios.get('/api/random-ship').then(res => {
            console.log(res)
            this.setState({
               availableShips: [...this.state.availableShips, res.data[0]]
            })
        })
    }

render(){

    //move to itinerary
    const shipsList = this.state.availableShips.map(element => {
        return <Ships key={element.id}
        // addShip={this.props.findShips}
        ship={element} editShipName={this.props.editShipName} removeShip={this.props.removeShip} />
    })
    
    return (
        <div><h2>Ship:</h2>
        <div>
            <div className='shipsList' onClick={()=>{
                this.shipFinder()
                }}> 
            </div>
            <span>
            {shipsList}
            </span>
        </div>
    </div>
    )
}

}

export default ShipFinder