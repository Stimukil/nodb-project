import React, {Component} from 'react';

class Vehicle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vehicleClicked: false,
        }
    }


    checkVehicle() {}

    render(){
        return(
            <div>
                <p>{this.props.ship.name}</p>

                onClick={() => {
                    this.props.findShips({
                        name: this.props.ship.name,

                    })            
                }}
            </div>
        )
    }

}

export default Vehicle