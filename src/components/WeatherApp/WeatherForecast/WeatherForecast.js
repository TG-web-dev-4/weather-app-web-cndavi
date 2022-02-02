import { useEffect, useState } from 'react'
import styles from './WeatherForecast.module.css'

function WeatherForecast({ latitude, longitude }) {
  const [forecastData, setForecastData] = useState([])
  const api_key = process.env.REACT_APP_WEATHER_API_KEY

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=${api_key}&units=metric`
    )
      .then((response) => response.json())
      .then((result) => {
        setForecastData(result)
        // console.log(result)
      })
  }, [latitude, longitude])

  console.log(forecastData)

  return (
    <div className={styles.ForecastWrapper}>
      <div className={styles.ForecastItem}>
        <div className={styles.Day}>Monday</div>
        <img
          src={require(`../../../assets/clear sky.svg`).default}
          className={styles.Icon}
        />
        <div className={styles.Temperature}>
          30<span>&deg;C &nbsp;</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherForecast
