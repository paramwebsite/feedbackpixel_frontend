import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Page1() {
  const navigate = useNavigate();

  return (
    <div
      className="page text-center"
      style={{
        backgroundImage: "url('/bg1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "90%",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: "1.2",
            color: "white",
            textTransform: "capitalize",
            textShadow: "2px 2px 10px rgba(0,0,0,0.4)",
          }}
        >
          Decode the<br />Image
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontFamily: "Arial, sans-serif",
            fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.5px",
          }}
        >
          Answer a few questions to decode the background image.
        </p>

        <button
          onClick={() => navigate("/page2")}
          style={{
            marginTop: "40px",
            padding: "12px 36px",
            border: "2px solid white",
            borderRadius: "30px",
            background: "transparent",
            color: "white",
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "1rem",
            letterSpacing: "1px",
            transition: "0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "white";
            e.target.style.color = "black";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "white";
          }}
        >
          Begin
        </button>
      </div>
    </div>
  );
}
