import React from 'react'

import styles from './Icon.module.css'

const icon = () => {
  return (
    <img
      src={require(`../../assets/images/Clear.svg`).default}
      className={styles.Icon}
    />
  )
}

export default icon
