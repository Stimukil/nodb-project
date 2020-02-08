import React, {Component} from 'react';

class Destination extends Component {
    constructor(props) {
        super(props)

        this.state = {
            planetClicked: false,
        }
    }


    checkDestination() {}

    render(){
        return(
            <div>
                <p>{this.props.planet.name}</p>

                onClick={() => {
                    this.props.findPlanets({
                        name: this.props.planet.name,
                        
                    })
                }}
            </div>
        )
    }
    
}

export default Destination