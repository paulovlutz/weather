import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    const city = cityData.city;

    return (
      <tr key={city.id}>
        <td>{city.name}</td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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