import React, { useState, useEffect } from 'react'
import styles from './Page.module.css'
import SearchBar from '../SearchBar/SearchBar'
import Header from '../Header/Header'
import Card from '../../elements/Card/Card'
import Preview from '../Preview/Preview'
import WeatherDetails from '../WeatherDetails/WeatherDetails'
import Footer from '../Footer/Footer'
import { getWeatherData } from '../../actions/FetchWeather'

const Page = () => {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  let cardContent = <WeatherDetails />

  return (
    <div className={styles.PageWrapper}>
      <Header />
      <main className={styles.PageMain}>
        <SearchBar />
        <Card>{cardContent}</Card>
      </main>
      <Footer />
    </div>
  )
}

export default Page
