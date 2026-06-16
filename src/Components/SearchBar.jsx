import { useState } from "react"

export default function SearchBar({ onSearch, dark }) {
  const [city, setCity] = useState("")
  const [error, setError] = useState("")

  const handleSearch = () => {
    if (!city.trim()) {
      setError("Please enter a city name!")
      return
    }
    setError("")
    onSearch(city)
  }

  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <h2 style={{
        color: dark ? "white" : "#111",
        fontSize: "28px",
        marginBottom: "20px"
      }}>
        🌤️ Weather Search
      </h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={e => setCity(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSearch()}
          style={{
            padding: "12px 20px",
            fontSize: "16px",
            borderRadius: "30px",
            border: dark ? "1px solid #444" : "1px solid #ddd",
            backgroundColor: dark ? "#1e1e2e" : "white",
            color: dark ? "white" : "#111",
            width: "300px",
            outline: "none"
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            borderRadius: "30px",
            border: "none",
            backgroundColor: "#6366f1",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Search 🔍
        </button>
      </div>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  )
}