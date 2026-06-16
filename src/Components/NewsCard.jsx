export default function NewsCard({ article, dark }) {
  return (
    <div style={{
      backgroundColor: dark ? "#1e1e2e" : "white",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease",
      cursor: "pointer"
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
      onClick={() => window.open(article.link, "_blank")}
    >
      {article.image_url && (
        <img
          src={article.image_url}
          alt={article.title}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover"
          }}
          onError={e => e.target.style.display = "none"}
        />
      )}
      <div style={{ padding: "16px" }}>
        <p style={{
          color: "#6366f1",
          fontSize: "12px",
          fontWeight: "bold",
          marginBottom: "8px"
        }}>
          {article.source_id}
        </p>
        <h4 style={{
          color: dark ? "white" : "#111",
          fontSize: "15px",
          lineHeight: "1.5",
          marginBottom: "10px"
        }}>
          {article.title}
        </h4>
        <p style={{
          color: dark ? "#aaa" : "#666",
          fontSize: "13px",
          lineHeight: "1.5",
          marginBottom: "12px"
        }}>
          {article.description?.slice(0, 100)}...
        </p>
        <p style={{
          color: dark ? "#555" : "#999",
          fontSize: "12px"
        }}>
          🕒 {new Date(article.pubDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}