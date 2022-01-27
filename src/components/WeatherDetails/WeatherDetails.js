import styles from './WeatherDetails.module.css'
import Date from './Date/Date'

const WeatherDetails = (props) => {
  return (
    <div className={styles.WeatherDetailsWrapper}>
      <div className={styles.WeatherIconWrapper}></div>
      <div className={styles.WeatherDataWrapper}>
        <div className={styles.TemperatureWrapper}>
          {props.temperature}
          <span className={styles.TemperatureSymbol}>&deg;C &nbsp;</span>
        </div>
        <div className={styles.DescriptionWrapper}>
          {props.city}, {props.country}
        </div>
        <Date />
      </div>
    </div>
  )
}

export default WeatherDetails
