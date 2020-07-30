import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions'

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  }

  onFormSubmit = e => {
    e.preventDefault();

    // Fetch the weather data from the action that contains the axios call
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group" style={{ margin: '10px' }}>
        <input
          placeholder="Enter a city to see the forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

export default SearchBar;