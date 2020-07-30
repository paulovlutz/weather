import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';
import GoogleMap from './GoogleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    const city = cityData.city;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = city.coord;

    return (
      <tr key={city.id}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="blue" units="C" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="red" units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

// const mapStateToProps = state => {
//   return { weather: state.weather };
// }
// Refactor:
const mapStateToProps = ({ weather }) => {
  return { weather };
}


export default connect(mapStateToProps)(WeatherList);