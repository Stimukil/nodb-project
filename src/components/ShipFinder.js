import React, {Component} from 'react';
import Vehicle from './Vehicle'
import axios from 'axios'

class ShipFinder extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            availableShips: []
        }
    }

// move to itineray
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
               availableShips: [...this.state.availableShips,res.data[0]]
            })
        })
    }

render(){

    //move to itinerary
    const shipsList = this.state.availableShips.map(element => {
        return <Vehicle key={element.id}
        // addShip={this.props.findShips}
        ship={element} />
    })
    
    return (
        <div>
        <div className='shipsList' onClick={()=>{
        this.shipFinder()
        }}> 
        </div>
        {shipsList}
        </div>
    )
}

}

export default ShipFinder