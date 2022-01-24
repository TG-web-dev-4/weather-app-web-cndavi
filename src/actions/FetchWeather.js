import axios from 'axios'

const URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

const FetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    },
  })
  return data
}

// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
// const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
export default FetchWeather