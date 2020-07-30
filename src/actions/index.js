import { FETCH_WEATHER } from './types';
import axios from 'axios';

const API_KEY = '4901bd5899a4cc23df696cfcffbc0a26';
const URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

const fetchWeather = city => {
  const url = `${URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export default fetchWeather;