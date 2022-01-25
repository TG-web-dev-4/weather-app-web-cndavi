import React from 'react'
import styles from './Button.module.css'

const Button = ({ onSubmit }) => {
  return (
    <div className={styles.ButtonWrapper}>
      <button type='submit' onClick={onSubmit}>
        Search
      </button>
    </div>
  )
}

export default Button
