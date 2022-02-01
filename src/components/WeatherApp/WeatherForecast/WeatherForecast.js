import { useEffect, useState } from 'react'
import styles from './WeatherForecast.module.css'

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

function WeatherForecast(props) {
  return (
    <div className={styles.ForecastWrapper} id='weatherForecast'>
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
      <hr />
      <div className={styles.ForecastItem}>
        <div className={styles.Day}>Teusday</div>
        <img
          src={require(`../../../assets/clear sky.svg`).default}
          className={styles.Icon}
        />
        <div className={styles.Temperature}>
          30<span>&deg;C &nbsp;</span>
        </div>
      </div>
      <hr />
      <div className={styles.ForecastItem}>
        <div className={styles.Day}>Wednesday</div>
        <img
          src={require(`../../../assets/clear sky.svg`).default}
          className={styles.Icon}
        />
        <div className={styles.Temperature}>
          30<span>&deg;C &nbsp;</span>
        </div>
      </div>
      <hr />
      <div className={styles.ForecastItem}>
        <div className={styles.Day}>Thursday</div>
        <img
          src={require(`../../../assets/clear sky.svg`).default}
          className={styles.Icon}
        />
        <div className={styles.Temperature}>
          30<span>&deg;C &nbsp;</span>
        </div>
      </div>
      <hr />
      <div className={styles.ForecastItem}>
        <div className={styles.Day}>Friday</div>
        <img
          src={require(`../../../assets/clear sky.svg`).default}
          className={styles.Icon}
        />
        <div className={styles.Temperature}>
          30<span>&deg;C &nbsp;</span>
        </div>
      </div>
      <hr />
      <div className={styles.ForecastItem}>
        <div className={styles.Day}>Saturday</div>
        <img
          src={require(`../../../assets/clear sky.svg`).default}
          className={styles.Icon}
        />
        <div className={styles.Temperature}>
          30<span>&deg;C &nbsp;</span>
        </div>
      </div>
      <hr />
      <div className={styles.ForecastItem}>
        <div className={styles.Day}>Sunday</div>
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
