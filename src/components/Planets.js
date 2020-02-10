import React, {Component} from 'react'
import { isCompositeComponent } from 'react-dom/test-utils'

class Planets extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isEditingPlanets: false,
            userInputPlanet: '',
        }

        this.isEditingPlanets = this.isEditingPlanets.bind(this)
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
        console.log(this.props)
        return (
        <div>
            {this.state.isEditingPlanets ? (
            <div>
                <input onChange={this.handleChange} />
                    <button onClick={() => {
                        this.props.editPlanetName(this.props.planet.name, this.state.userInputPlanet)
                        this.isEditingPlanets()
                    }}
                    >Save</button>
            </div>) : (
                <p onDoubleClick={this.isEditingPlanets}>{this.props.planet.name}</p>)}

                <button onClick={() => this.props.removePlanet(this.props.planet.name)}
                >Delete</button>
        </div>
        )
    }
}

export default Planets