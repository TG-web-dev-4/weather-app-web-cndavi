import styles from './SearchBar.module.css'

const SearchBar = (props) => {
  const { setCity, fetchWeather } = props
  return (
    <div className={styles.SearchBarWrapper}>
      <div className={styles.InputFieldWrapper}>
        <input
          type='search'
          placeholder='Search for location..'
          onChange={(e) => {
            setCity(e.target.value)
          }}
        />
      </div>
      <div className={styles.ButtonWrapper}>
        <button type='submit' onClick={fetchWeather}>
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar
