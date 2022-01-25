import React from 'react'
import styles from './Date.module.css'
import dateformat from 'dateformat'

const date = () => {
  const today = new Date()
  return (
    <div className={styles.DateWrapper}>
      {dateformat(today, 'dddd, mmmm dd')}
    </div>
  )
}

export default date
