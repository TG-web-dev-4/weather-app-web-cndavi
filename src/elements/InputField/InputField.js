import React from 'react'
import styles from './InputField.module.css'

const InputField = () => {
  return (
    <div className={styles.InputFieldWrapper}>
      <input
        type='text'
        name='city'
        placeholder='Search for a location'
        required
      />
    </div>
  )
}

export default InputField
