import styles from './WeatherForecast.module.css'
import WeatherForecastItems from '../WeatherForecastItems'

function WeatherForecast(props) {
  return (
    <div className={styles.WeatherDetailsWrapper}>
      <ul>
        {days.map((day) => (
          <WeatherForecastItems />
        ))}
      </ul>
    </div>
  )
}

export default WeatherForecast
