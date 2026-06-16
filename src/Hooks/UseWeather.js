import { useState } from "react"
import axios from "axios"

export function useWeather() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchWeather = async (city) => {
    setLoading(true)
    setError("")
    setData(null)
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: import.meta.env.VITE_WEATHER_KEY,
            units: "metric"
          }
        }
      )
      setData(res.data)
    } catch (e) {
      setError("City not found! Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, fetchWeather }
}