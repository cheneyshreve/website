
import React, { Component } from "react"
import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"

class WorldMap extends Component {
  constructor() {
    super()
    this.state = {
      worlddata: [],
      cities: [
        { name: "Orting", coordinates: [-122.2043,47.0979], marker: 7  },
        { name: "Bogota", coordinates: [-74.0721,4.7110], marker: 7 },
        { name: "Georgetown", coordinates: [-58.1551,6.8013], marker: 7 },
        { name: "Cumbria", coordinates: [-2.7975,54.5772], marker: 7 },
        { name: "Nairobi", coordinates: [36.8219,-1.2921], marker: 7 },
        { name: "Taiwan", coordinates: [120.9605,23.6978],marker: 7 },
        { name: "Seattle", coordinates: [-122.3321,47.6062], marker: 7 },
        { name: "Rwanda", coordinates: [29.8739,-1.9403], marker: 7 },
      ],
    }

    this.handleCountryClick = this.handleCountryClick.bind(this)
    this.handleMarkerClick = this.handleMarkerClick.bind(this)
  }
  projection() {
    return geoMercator()
      .scale(100)
      .translate([ 800 / 2, 450 / 2 ])
  }
  handleCountryClick(countryIndex) {
    console.log("Clicked on country: ", this.state.worlddata[countryIndex])
  }
  handleMarkerClick(markerIndex) {
    console.log("Marker: ", this.state.cities[markerIndex])
  }
  componentWillMount() {
    fetch("/world-110m.json")
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        response.json().then(worlddata => {
          this.setState({
            worlddata: feature(worlddata, worlddata.objects.countries).features,
          })
        })
      })
  }
  render() {
    return (
      <svg width={ 800 } height={ 450 } viewBox="0 0 800 450">
        <g className="countries">
          {
            this.state.worlddata.map((d,i) => (
              <path
                key={ `path-${ i }` }
                d={ geoPath().projection(this.projection())(d) }
                className="country"
                fill={ `rgba(38,50,56,${ 1 / this.state.worlddata.length * i})` }
                stroke="#FFFFFF"
                strokeWidth={ 0.5 }
                onClick={ () => this.handleCountryClick(i) }
              />
            ))
          }
        </g>
        <g className="markers">
          {
            this.state.cities.map((city, i) => (
              <circle
                key={ `marker-${i}` }
                cx={ this.projection()(city.coordinates)[0] }
                cy={ this.projection()(city.coordinates)[1] }
                r={ city.marker }
                fill="#E91E63"
                stroke="#FFFFFF"
                className="marker"
                onClick={ () => this.handleMarkerClick(i) }
              />
            ))
          }
        </g>
      </svg>
    )
  }
}

export default WorldMap
