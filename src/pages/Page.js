import React, { Component } from 'react'
import WeatherDetails from '../components/WeatherDetails/WeatherDetails'
import styles from './Page.module.css'
import Header from '../components/Header/Header'
import Form from '../components/Form/Form'
import Card from '../elements/Card/Card'
import Preview from '../components/Preview/Preview'
import Footer from '../components/Footer/Footer'

const api_key = process.env.REACT_APP_API_KEY

class Page extends Component {
  state = {
    temperature: '',
    city: 'London',
    country: 'UK',
    error: '',
  }

  fetchWeather = async (event) => {
    event.preventDefault()
    const city = event.target.elements.city.value
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    )
    const data = await api_url.json()
    console.log(data)

    this.setState({
      temperature: `${data.main.temp}`,
      city: data.name,
      country: data.sys.country,
      error: '',
    })
  }

  render() {
    let cardContent = <Preview />

    if (this.state.temperature !== '') {
      cardContent = (
        <WeatherDetails
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
        />
      )
    }

    const { city, country } = this.state

    return (
      <div className={styles.PageWrapper}>
        <Header />
        <main className={styles.PageMain}>
          <Form weatherMethod={this.fetchWeather} />
          <Card>{cardContent}</Card>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Page
