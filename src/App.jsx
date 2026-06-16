import { useState, useEffect } from "react"
import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"
import CategoryFilter from "./components/CategoryFilter"
import NewsCard from "./components/NewsCard"
import SkeletonLoader from "./components/SkeletonLoader"
import ThemeToggle from "./components/ThemeToggle"
import { useWeather } from "./hooks/useWeather"
import { useNews } from "./hooks/useNews"

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark")
  const [category, setCategory] = useState("general")
  const { data, loading: wLoading, error: wError, fetchWeather } = useWeather()
  const { news, loading: nLoading, error: nError, fetchNews } = useNews()

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  useEffect(() => {
    fetchNews(category)
  }, [category])

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: dark ? "#0f0f1a" : "#f3f4f6",
      transition: "all 0.3s ease",
      padding: "40px 20px"
    }}>
      <ThemeToggle dark={dark} onToggle={() => setDark(!dark)} />

      <h1 style={{
        textAlign: "center",
        color: dark ? "white" : "#111",
        fontSize: "36px",
        fontWeight: "bold",
        marginBottom: "40px"
      }}>
        🌤️ Weather & 📰 News Dashboard
      </h1>

      <SearchBar onSearch={fetchWeather} dark={dark} />

      {wLoading && (
        <div style={{ textAlign: "center", color: "#6366f1", fontSize: "18px", marginBottom: "20px" }}>
          ⏳ Loading weather...
        </div>
      )}
      {wError && (
        <div style={{ textAlign: "center", color: "red", fontSize: "18px", marginBottom: "20px" }}>
          ❌ {wError}
        </div>
      )}
      {data && <WeatherCard data={data} dark={dark} />}

      <h2 style={{
        textAlign: "center",
        color: dark ? "white" : "#111",
        fontSize: "28px",
        marginBottom: "20px"
      }}>
        📰 Top News
      </h2>

      <CategoryFilter selected={category} onSelect={setCategory} dark={dark} />

      {nLoading && <SkeletonLoader dark={dark} />}
      {nError && (
        <div style={{ textAlign: "center", color: "red", fontSize: "18px" }}>
          ❌ {nError}
        </div>
      )}

      {!nLoading && !nError && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {news.map((article, index) => (
            <NewsCard key={index} article={article} dark={dark} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App