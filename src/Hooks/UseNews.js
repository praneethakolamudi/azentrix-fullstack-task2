import { useState } from "react"
import axios from "axios"

export function useNews() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchNews = async (category = "top") => {
    setLoading(true)
    setError("")
    setNews([])
    try {
      const res = await axios.get(
        `https://newsdata.io/api/1/latest`,
        {
          params: {
            apikey: import.meta.env.VITE_GNEWS_KEY,
            language: "en",
          }
        }
      )
      if (res.data.results.length === 0) {
        setError("No news found!")
      } else {
        setNews(res.data.results)
      }
    } catch (e) {
      setError("Failed to load news. Please try again!")
    } finally {
      setLoading(false)
    }
  }

  return { news, loading, error, fetchNews }
}