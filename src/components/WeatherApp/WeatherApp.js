import styles from './WeatherApp.module.css'
import WeatherCurrent from './WeatherCurrent/WeatherCurrent'

const WeatherApp = (props) => {
  const { city, country, description, temperature } = props

  return (
    <div className={styles.WeatherCard}>
      <WeatherCurrent
        city={city}
        country={country}
        description={description}
        temperature={temperature}
      />
    </div>
  )
}

export default WeatherApp
