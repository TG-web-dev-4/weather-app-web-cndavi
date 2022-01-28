import styles from './WeatherApp.module.css'
import Description from './Description/Description'
import WeatherCurrent from './WeatherCurrent/WeatherCurrent'

const WeatherApp = (props) => {
  const { city, country, description, temperature } = props

  return (
    <>
      <div className={styles.WeatherApp}>
        <Description city={city} country={country} description={description} />
        <WeatherCurrent
          city={city}
          country={country}
          description={description}
          temperature={temperature}
        />
      </div>
    </>
  )
}

export default WeatherApp
