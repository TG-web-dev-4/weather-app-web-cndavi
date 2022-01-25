import React, { useState } from 'react'
import styles from './WeatherDetails.module.css'
import Description from './Description/Description'
import Date from './Date/Date'
import Icon from '../../elements/Icon/Icon'
import Temperature from './Temperature/Temperature'

const WeatherDetails = () => {
  return (
    <div className={styles.WeatherDetailsWrapper}>
      <div className={styles.WeatherIconWrapper}>
        <Icon />
      </div>
      <div className={styles.WeatherDataWrapper}>
        <Temperature />
        <Description />
        <Date />
      </div>
    </div>
  )
}

export default WeatherDetails
