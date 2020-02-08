import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import ShipFinder from './components/ShipFinder'
import PlanetFinder from './components/PlanetFinder'
import Itinerary from './components/Itinerary'
import axios from 'axios';


class App extends Component {
  constructor () {
    super ()

    this.state = {
      foundShips: [],
      foundPlanets: [],
  }

  this.addShip = this.addShip.bind(this)
  this.addPlanet = this.addPlanet.bind(this)
  this.saveShipName = this.saveShipName.bind(this)
  this.savePlanetName = this.savePlanetName.bind(this)
  this.removeShip = this.removeShip.bind(this)
  this.removePlanet = this.removePlanet.bind(this)

}

componentDidMount() {
  axios.get('/api/swapi').then(res => {
    this.setState({
      foundShips: res.data,
      foundPlanets: res.data,
    })
  })
}

addShip(ship) {
  axios.post('/api/swapi', {ship}).then(res => {
    this.setState({
      foundShips: res.data
    })
  })
}

addPlanet(planet) {
  axios.post('/api/swapi', {planet}).then(res => {
    this.setState({
      foundPlanets: res.data
    })
  })
}

saveShipName(id, newShipName) {
  axios.put(`/api/swapi/${id}`, {shipName: newShipName}).then(res => {
    this.setState({
      foundShips: res.data
    })
  })
}

savePlanetName(id, newPlanetName) {
  axios.put(`/api/swapi/${id}`, {planetName: newPlanetName}).then(res => {
    this.setState({
      foundPlanets: res.data
    })
  })
}

removeShip(id) {
  axios.delete(`/api/swapi/${id}`).then(res => {
    this.setState({
      foundShips: res.data
    })
  })
}

removePlanet(id) {
  axios.delete(`/api/swapi/${id}`).then(res => {
    this.setState({
      foundPlanets: res.data 
    })
  })
}

render() {
  return (
    <div className="App">
      <Header />
      <ShipFinder findShips={this.findShips} />
      <PlanetFinder findPlanets={this.findPlanets} />
      <Itinerary 
      saveShipName={this.saveShipName}
      savePlanetName={this.savePlanetName}
      removeShip={this.removeShip}
      removePlanet={this.removePlanet}
      addShip={this.state.addShip}
      addPlanet={this.state.addPlanet}
      foundShips={this.state.foundShips}
      foundPlanets={this.state.foundPlanets}
      />
    </div>
  )
}

}

export default App;