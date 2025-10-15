import { useNavigate } from "react-router-dom";
import { useFeedback } from "../context/FeedbackContext";
import "../styles/Page4.css";

export default function Page4() {
  const navigate = useNavigate();
  const { answers, updateAnswer,resetAnswers } = useFeedback();

  const question = "What did you learn from the gallery?";
  const options = [
    "A voxel is a 3D equivalent of a pixel.",
    "All pixels are always the same colour.",
    "Raster images are always sharper than vectors.",
    "Higher pixel density usually means a sharper image.",
    "I didn’t learn anything.",
  ];

  const handleSelect = (opt) => {
    let newSelection = [...(answers[question] || [])];
    if (newSelection.includes(opt)) {
      newSelection = newSelection.filter((item) => item !== opt);
    } else {
      newSelection.push(opt);
    }
    updateAnswer(question, newSelection);
  };

   const handleHomeClick = () => {
    resetAnswers(); // ✅ clears context
    navigate("/"); // ✅ navigate to home page
  };
  return (
    <div className="page4">
         <button className="home-btn" onClick={handleHomeClick}>
        <img src="/home.png" alt="Home" className="home-icon" />
      </button>
      <div className="page4-inner">
        <h2 className="page4-title">{question}</h2>
        <p className="page4-subtitle">
          Let us know if it’s a bit glitchy — we’re still upgrading the map! You can select multiple!
        </p>

        <div className="page4-options">
          {options.map((opt) => (
            <label
              key={opt}
              className={`page4-option ${
                answers[question]?.includes(opt) ? "selected" : ""
              }`}
            >
              <input
                type="checkbox"
                value={opt}
                checked={answers[question]?.includes(opt)}
                onChange={() => handleSelect(opt)}
              />
              <span className="custom-checkbox"></span>
              {opt}
            </label>
          ))}
        </div>

        {answers[question]?.length > 0 && (
          <button className="page4-next-btn" onClick={() => navigate("/page5")}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
