export default function SkeletonLoader({ dark }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px",
      marginTop: "20px"
    }}>
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} style={{
          backgroundColor: dark ? "#1e1e2e" : "white",
          borderRadius: "16px",
          padding: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
        }}>
          <div style={{
            height: "160px",
            backgroundColor: dark ? "#2a2a3e" : "#f3f4f6",
            borderRadius: "12px",
            marginBottom: "16px",
            animation: "pulse 1.5s infinite"
          }} />
          <div style={{
            height: "16px",
            backgroundColor: dark ? "#2a2a3e" : "#f3f4f6",
            borderRadius: "8px",
            marginBottom: "10px",
            animation: "pulse 1.5s infinite"
          }} />
          <div style={{
            height: "16px",
            backgroundColor: dark ? "#2a2a3e" : "#f3f4f6",
            borderRadius: "8px",
            width: "70%",
            animation: "pulse 1.5s infinite"
          }} />
        </div>
      ))}
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}