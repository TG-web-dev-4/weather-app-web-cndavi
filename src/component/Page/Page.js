import React, { useEffect, useState } from 'react'
import styles from './Page.module.css'
import axios from 'axios'
import Header from '../Header/Header'
import SearchBar from '../SearchBar/SearchBar'
import Preview from '../Preview/Preview'
import Card from '../../elements/Card/Card'
import Footer from '../Footer/Footer'
import WeatherDetails from '../WeatherDetails/WeatherDetails'

const Api_Key = process.env.REACT_APP_API_KEY

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState()

  //api Call
  let GetData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_Key}`
      )
      .then((response) => {
        setWeather(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    GetData()
  }, [])

  return (
    <div className={styles.PageWrapper}>
      <Header />
      <main className={styles.PageMain}>
        <SearchBar setCity={setCity} fetchWeather={GetData} />
        <Card>
          {weather ? <WeatherDetails weather={weather} /> : <Preview />}
        </Card>
      </main>
      <Footer />
    </div>
  )
}

export default App
