import React, { useState } from 'react'
import styles from './Page.module.css'
import FetchWeather from '../../actions/FetchWeather'
import SearchBar from '../SearchBar/SearchBar'
import Header from '../Header/Header'
import Card from '../../elements/Card/Card'
import Footer from '../Footer/Footer'

const Page = ({ onSubmit }) => {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = async (event) => {
    if (event.key == 'Enter' || onSubmit()) {
      const data = await FetchWeather(query)
      console.log(data)
      setWeather(data)
      setQuery('')
    }
  }

  return (
    <div className={styles.PageWrapper}>
      <Header />
      <main className={styles.PageMain}>
        <SearchBar />
        <Card></Card>
      </main>
      <Footer />
    </div>
  )
}

export default Page
