import styles from './Form.module.css'
import Button from '../../elements/Button/Button'
import InputField from '../../elements/InputField/InputField'

const Form = (props) => {
  return (
    <div className={styles.FormWrapper}>
      <form onSubmit={props.weatherMethod}>
        <InputField />
        <Button />
      </form>
    </div>
  )
}

export default Form
