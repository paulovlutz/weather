import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
  renderWeather(cityData) {
    const city = cityData.city;
    const temps = cityData.list.map(weather => weather.main.temp);

    return (
      <tr key={city.id}>
        <td>{city.name}</td>
        <td>
          <Sparklines height={120} width={180} data={temps}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </td>
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