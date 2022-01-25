import styles from './Page.module.css'
import SearchBar from '../SearchBar/SearchBar'
import Header from '../Header/Header'
import Card from '../../elements/Card/Card'
import Preview from '../Preview/Preview'
import WeatherDetails from '../WeatherDetails/WeatherDetails'
import Footer from '../Footer/Footer'
import GetForecast from '../../actions/GetForecast'
import SubmitRequest from '../../actions/SubmitRequest'

const Page = () => {
  const { forecast } = GetForecast()

  const onSubmit = (value) => {
    SubmitRequest(value)
  }

  let cardContent = <WeatherDetails />

  return (
    <div className={styles.PageWrapper}>
      <Header />
      <main className={styles.PageMain}>
        <SearchBar submitSearch={onSubmit} />
        <Card>{cardContent}</Card>
      </main>
      <Footer />
    </div>
  )
}

export default Page
