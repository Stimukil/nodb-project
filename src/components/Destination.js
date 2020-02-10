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
        console.log(this.props.planet)
        return(
            <div className='destination'>
            <div style={{height: '100px', width: '100px', backgroundColor: 'green'}}>
                <p>{this.props.planet.name}</p>

        <button onClick={() => this.props.removePlanet(this.props.planet.name)}
                >Delete</button>
                {/*
                onClick={() => {
                    this.props.findPlanets({
                        name: this.props.planet.name,
                        
                    })
                }}} */}
                </div>
            </div>
        )
    }
    
}

export default Destination