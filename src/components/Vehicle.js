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
        console.log(this.props.ship)
        return(
            <div style={{height: "100px", width: '100px', backgroundColor: 'blue'}}>
                <p>{this.props.ship.name}</p>
                {/* 
                {onClick={() => {
                    this.props.findShips({
                        name: this.props.ship.name,

                    })            
                }}} */}
            </div>
        )
    }

}

export default Vehicle