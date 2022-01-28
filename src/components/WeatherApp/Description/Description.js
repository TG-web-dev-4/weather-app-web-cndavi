import styles from './Description.module.css'
import Date from '../Date/Date'

const Description = (props) => {
  return (
    <>
      <div className={styles.CurrentInfo}>
        <div className={styles.CurrentLocation}>
          <h1>
            {props.city}, {props.country}
          </h1>
        </div>
        <Date />
        <span className={styles.WeatherDescription}>{props.description}</span>
      </div>
    </>
  )
}

export default Description
