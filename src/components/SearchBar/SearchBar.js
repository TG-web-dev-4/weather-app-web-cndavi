import React, { useState } from 'react'
import styles from './SearchBar.module.css'
import Button from '../../elements/Button/Button'

const SearchBar = ({ getData }) => {
  const [location, setLocation] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    if (!location || location === '') return
    console.log({ location })
  }

  return (
    <form className={styles.SearchBarWrapper} onSubmit={onSubmit}>
      <div className={styles.InputFieldWrapper}>
        <input
          aria-label='location'
          type='text'
          placeholder='Search for location'
          required
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </div>
      <Button type='submit' />
    </form>
  )
}

export default SearchBar
