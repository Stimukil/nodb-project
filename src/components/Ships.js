import React, {Component} from 'react'
import { isCompositeComponent } from 'react-dom/test-utils'

class Ships extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            isEditingShips: false,
            userInputShip: '',
        }

        this.isEditingShips = this.isEditingShips.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    isEditingShips() {
        this.setState({
            isEditingShips: !this.state.isEditingShips
        })
    }

    handleChange(e) {
        this.setState ({
            userInputShip: e.target.value
        })
    }

    render() {
        console.log(this.props)
        return (
        <div>
            {this.state.isEditingShips ? (
            <div>
                 <input onChange={this.handleChange} />
                    <button onClick={() => {
                        this.props.editShipName(this.props.ship.name, this.state.userInputShip)
                        this.isEditingShips()
                    }}
                    >Save</button>
            </div>) : (
                <p onDoubleClick={this.isEditingShips}>{this.props.ship.name}</p>)}
                
                <button onClick={() => this.props.removeShip(this.props.ship.name)}
                >Delete</button>
        </div>
        )          
    }
}

export default Ships 