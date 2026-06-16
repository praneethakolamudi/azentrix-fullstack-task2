const categories = [
  { name: "General", value: "general", emoji: "🌍" },
  { name: "Technology", value: "technology", emoji: "💻" },
  { name: "Sports", value: "sports", emoji: "⚽" },
  { name: "Business", value: "business", emoji: "💼" },
  { name: "Health", value: "health", emoji: "🏥" },
  { name: "Entertainment", value: "entertainment", emoji: "🎬" },
]

export default function CategoryFilter({ selected, onSelect, dark }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      flexWrap: "wrap",
      marginBottom: "30px"
    }}>
      {categories.map(cat => (
        <button
          key={cat.value}
          onClick={() => onSelect(cat.value)}
          style={{
            padding: "8px 20px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "bold",
            backgroundColor: selected === cat.value ? "#6366f1" : dark ? "#1e1e2e" : "#f3f4f6",
            color: selected === cat.value ? "white" : dark ? "#aaa" : "#555",
            transition: "all 0.3s ease"
          }}
        >
          {cat.emoji} {cat.name}
        </button>
      ))}
    </div>
  )
}