import React, {Component} from 'react'
// import { isCompositeComponent } from 'react-dom/test-utils'

class Planets extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isEditingPlanets: false,
            userInputPlanet: '',
        }

        // this.isEditingPlanets = false,
        this.handleChange = this.handleChange.bind(this)
    }

    isEditingPlanets() {
        this.setState({
            isEditingPlanets: !this.state.isEditingPlanets
        })
    }

    handleChange(e) {
        this.setState ({
            userInputPlanet: e.target.value
        })
    }

    render() {
        return (
        <div>
            {this.state.isEditingPlanets ? (
            <div>
                <input onChange={this.handleChange} />
                    <button onClick={() => {
                        this.props.savePlanetName(this.props.planet.id, this.state.userInputPlanet)
                        this.isEditingPlanets()
                    }}
                    >Save</button>
            </div>) : (
                <p onDoubleClick={this.isEditingPlanets}>{this.props.savePlanetName}</p>)}
                <button onClick={() => this.props.removePlanet(this.props.planet.id)}
                >Delete</button>
        </div>
        )
    }
}

export default Planets