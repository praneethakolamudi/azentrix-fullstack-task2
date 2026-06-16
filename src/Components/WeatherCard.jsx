export default function WeatherCard({ data, dark }) {
  return (
    <div style={{
      backgroundColor: dark ? "#1e1e2e" : "white",
      borderRadius: "20px",
      padding: "30px",
      maxWidth: "400px",
      margin: "0 auto 40px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      textAlign: "center"
    }}>
      <h3 style={{
        color: dark ? "white" : "#111",
        fontSize: "28px",
        marginBottom: "10px"
      }}>
        📍 {data.name}, {data.sys.country}
      </h3>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <h2 style={{
        color: "#6366f1",
        fontSize: "52px",
        margin: "0"
      }}>
        {Math.round(data.main.temp)}°C
      </h2>
      <p style={{
        color: dark ? "#aaa" : "#555",
        fontSize: "20px",
        textTransform: "capitalize",
        marginBottom: "20px"
      }}>
        {data.weather[0].description}
      </p>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: "10px"
      }}>
        {[
          { label: "Feels Like", value: `${Math.round(data.main.feels_like)}°C` },
          { label: "Humidity", value: `${data.main.humidity}%` },
          { label: "Wind", value: `${data.wind.speed} m/s` },
          { label: "Pressure", value: `${data.main.pressure} hPa` }
        ].map(item => (
          <div key={item.label} style={{
            backgroundColor: dark ? "#2a2a3e" : "#f3f4f6",
            borderRadius: "12px",
            padding: "12px 20px"
          }}>
            <p style={{ color: dark ? "#aaa" : "#666", fontSize: "13px" }}>{item.label}</p>
            <p style={{ color: dark ? "white" : "#111", fontWeight: "bold" }}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}