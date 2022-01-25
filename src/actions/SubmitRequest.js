import axios from 'axios'

const SubmitRequest = async (location) => {
  const { data } = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
  )
  console.log({ data })
}

export default SubmitRequest
