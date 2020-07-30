import { FETCH_WEATHER } from './types';

const API_KEY = '4901bd5899a4cc23df696cfcffbc0a26';

const fetchWeather = () => {
  return {
    type: FETCH_WEATHER
  };
}

export default fetchWeather;