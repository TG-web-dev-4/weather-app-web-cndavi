import React, { Component } from 'react'
import styles from './Form.module.css'
import Button from '../../elements/Button/Button'
import InputField from '../../elements/InputField/InputField'

class Form extends Component {
  render() {
    return (
      <div className={styles.FormWrapper}>
        <form onSubmit={this.props.weatherMethod}>
          <InputField />
          <Button />
        </form>
      </div>
    )
  }
}

export default Form
