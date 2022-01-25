import { useState } from 'react'

const GetForecast = async () => {
  const [forecast, setForecast] = useState(null)

  return { forecast }
}

export default GetForecast
