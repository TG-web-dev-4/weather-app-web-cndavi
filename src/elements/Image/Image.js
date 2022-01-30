import React from 'react'

import styles from './Image.module.css'

const Image = () => {
  return (
    <div className={styles.ImageWrapper}>
      <img
        src={require('../../assets/preview.svg').default}
        alt='Weather App Icon'
        className={styles.Image}
      />
    </div>
  )
}

export default Image
