import axios from 'axios'

const URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export const getWeatherData = async (location) => {
  try {
    const { data } =
      (await axios.get(URL)) + `q=${location}&appid=${API_KEY}&units=metric`
    return data
  } catch (error) {
    throw error
  }
}

// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
// const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
