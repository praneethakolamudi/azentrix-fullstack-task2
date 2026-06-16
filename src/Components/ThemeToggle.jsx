export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "10px 20px",
        borderRadius: "30px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        backgroundColor: dark ? "white" : "#111",
        color: dark ? "#111" : "white",
        zIndex: 1000,
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease"
      }}
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  )
}