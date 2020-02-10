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
  this.editShipName = this.editShipName.bind(this)
  this.editPlanetName = this.editPlanetName.bind(this)
  this.removeShip = this.removeShip.bind(this)
  this.removePlanet = this.removePlanet.bind(this)

}

componentDidMount() {
  axios.get('/api/avail-ships').then(res => {
    this.setState({
      foundShips: res.data,
    })
  })
  axios.get('/api/avail-planets').then(res => {
    this.setState({
      foundPlanets: res.data,
    })
  })
}

addShip(ship) {
  axios.post('/api/avail-ships', {ship}).then(res => {
    this.setState({
      foundShips: res.data
    })
  })
}

addPlanet(planet) {
  axios.post('/api/avail-planets', {planet}).then(res => {
    this.setState({
      foundPlanets: res.data
    })
  })
}

editShipName(name, newShipName) {
  console.log(name)
  axios.put(`/api/ships/${name}`, {name: newShipName}).then(res => {
    this.setState({
      foundShips: res.data
    })
  })
}

editPlanetName(name, newPlanetName) {
  console.log(name)
  axios.put(`/api/planets/${name}`, {name: newPlanetName}).then(res => {
    this.setState({
      foundPlanets: res.data
    })
  })
}

removeShip(name) {
  console.log(name)
  axios.delete(`/api/ships/${name}`).then(res => {
    this.setState({
      foundShips: res.data
    })
  })
}

removePlanet(id) {
  console.log(id)
  axios.delete(`/api/planets/${id}`).then(res => {
    this.setState({
      foundPlanets: res.data 
    })
  })
}

render() {
  return (
    <div className="App">
    
      <Header />
      <ShipFinder findShips={this.findShips} removeShip={this.removeShip} editShipName={this.editShipName} />
      <PlanetFinder findPlanets={this.findPlanets} removePlanet={this.removePlanet} editPlanetName={this.editPlanetName}/>
      <Itinerary 
      editShipName={this.editShipName}
      editPlanetName={this.editPlanetName}
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