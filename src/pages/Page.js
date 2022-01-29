import React, { Component } from 'react'
import WeatherApp from '../components/WeatherApp/WeatherApp'
import styles from './Page.module.css'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import Image from '../elements/Image/Image'
import Card from '../elements/Card/Card'
import Preview from '../components/Preview/Preview'
import Footer from '../components/Footer/Footer'
import ErrorNotice from '../components/ErrorNotice/ErrorNotice'

class Page extends Component {
  state = {
    searchBarInput: '',
    temperature: '',
    description: '',
    predictability: '',
    city: '',
    country: '',
    error: false,
  }

  searchBarHandler = (event) => {
    this.setState({
      searchBarInput: event.target.value,
    })
  }

  tryAgainHandler = () => {
    this.setState({
      searchBarInput: '',
      temperature: '',
      description: '',
      predictability: '',
      city: '',
      country: '',
      error: false,
    })
  }

  fetchWeather = async (event) => {
    event.preventDefault()
    const city = event.target.elements.city.value
    const api_key = process.env.REACT_APP_WEATHER_API_KEY
    const api_url = 'https://api.openweathermap.org/data/2.5/weather'
    const url = api_url + `?q=${city}&appid=${api_key}&units=metric`

    this.setState(
      {
        temperature: '',
        description: '',
        predictability: '',
        city: '',
        country: '',
        loading: true,
        error: false,
      },
      () => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            if (data.cod === 200) {
              this.setState({
                temperature: data.main.temp,
                main: data.weather[0].description,
                description: data.weather[0].description,
                predictability: data.predictability,
                city: data.name,
                country: data.sys.country,
              })
              console.log(data)
            } else {
              throw data.cod
            }
          })
          .catch((err) => {
            console.log(err)
            this.setState({
              error: true,
            })
          })
      }
    )
  }

  render() {
    let cardContent = <Preview />
    if (this.state.error) {
      cardContent = <ErrorNotice onClickHandler={this.tryAgainHandler} />
    } else if (this.state.temperature !== '') {
      cardContent = (
        <WeatherApp
          temperature={this.state.temperature}
          description={this.state.description}
          city={this.state.city}
          country={this.state.country}
        />
      )
    }

    return (
      <>
        <Header />
        <SearchBar
          weatherMethod={this.fetchWeather}
          value={this.state.searchBarInput}
          onChangeHandler={this.searchBarHandler}
          error={this.state.error}
        />
        <Image />
        <div className={styles.PageWrapper}>
          <Card>{cardContent}</Card>
        </div>
        {/* <Footer /> */}
      </>
    )
  }
}

export default Page
