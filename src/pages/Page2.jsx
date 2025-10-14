import { useNavigate } from "react-router-dom";
import "../styles/page2.css";

export default function Page2() {
  const navigate = useNavigate();
  const options = [
    "Hands on Opera",
    "Mo Cap",
    "Colour Game",
    "Rangolify",
    "Land Sat",
    "Hologram Fan",
  ];

  const handleSelect = (opt) => {
    console.log("Selected:", opt);
    navigate("/page3");
  };

  return (
    <div className="page2">
      <div className="page2-content">
        <h2 className="page2-title">Which exhibit did you enjoy the most?</h2>

        <div className="page2-grid">
          {options.map((opt) => (
            <div
              key={opt}
              className="page2-card"
              onClick={() => handleSelect(opt)}
            >
              <div className="page2-card-top"></div>
              <div className="page2-card-label">{opt}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
