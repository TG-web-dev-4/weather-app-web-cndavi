import styles from './WeatherCurrent.module.css'
import Date from './Date/Date'

const WeatherCurrent = (props) => {
  return (
    <div className={styles.WeatherDetailsWrapper}>
      <div className={styles.WeatherIconWrapper}>
        <img
          src={require(`../../assets/${props.description}.svg`)}
          alt={props.description}
          className={styles.Icon}
        />
      </div>
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

export default WeatherCurrent
