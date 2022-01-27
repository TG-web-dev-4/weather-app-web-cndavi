import React, { useEffect, useState } from 'react'
import styles from './WeatherDetails.module.css'
import Date from './Date/Date'

const WeatherDetails = (props) => {
  const { weather } = props

  let weatherMode = weather.weather[0].main

  return (
    <div className={styles.WeatherDetailsWrapper}>
      <div className={styles.WeatherIconWrapper}>
        <img
          src={require(`../../assets/images/Clouds.svg`).default}
          className={styles.Icon}
        />
      </div>
      <div className={styles.WeatherDataWrapper}>
        <div className={styles.TemperatureWrapper}>
          {weather.main.temp}
          <span className={styles.TemperatureSymbol}>&deg;C &nbsp;</span>
          <div className={styles.TemperatureMode}>{weatherMode}</div>
        </div>
        <div className={styles.DescriptionWrapper}>{`${weather.name} , ${weather.sys.country}`}</div>
        <Date />
      </div>
    </div>
  )
}

export default WeatherDetails
