import React from 'react'

import styles from './Temperature.module.css'

const Temperature = () => {
  return (
    <div className={styles.TemperatureWrapper}>
      20
      <span className={styles.TemperatureSymbol}>°C</span>
    </div>
  )
}

export default Temperature
