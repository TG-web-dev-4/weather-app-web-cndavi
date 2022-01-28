import styles from './WeatherCurrent.module.css'
import Temperature from '../Temperature/Temperature'

const WeatherCurrent = (props) => {
  return (
    <div className={styles.WeatherDetailsWrapper}>
      <div className={styles.WeatherIconWrapper}>
        <img
          src={require(`../../../assets/${props.description}.svg`)}
          alt={props.description}
          className={styles.Icon}
        />
      </div>
      <div className={styles.WeatherDataWrapper}>
        <Temperature temperature={props.temperature} />
      </div>
    </div>
  )
}

export default WeatherCurrent
