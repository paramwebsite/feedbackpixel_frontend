import { useNavigate } from "react-router-dom";
import { useFeedback } from "../context/FeedbackContext";
import "../styles/Page3.css";

export default function Page3() {
  const navigate = useNavigate();
  const { answers, updateAnswer ,resetAnswers} = useFeedback();

  const question = "How would you describe the gallery?";
  const options = [
    "Creative",
    "Fun & Playful",
    "Educational",
    "Could be better",
    "Confusing",
    "Not my style",
  ];

   const handleHomeClick = () => {
    resetAnswers(); // ✅ clears context
    navigate("/"); // ✅ navigate to home page
  };

  const handleSelect = (option) => {
    let newSelection = [...(answers[question] || [])];
    if (newSelection.includes(option)) {
      newSelection = newSelection.filter((item) => item !== option);
    } else {
      newSelection.push(option);
    }
    updateAnswer(question, newSelection);
  };

  return (
    <div className="page3">
       <button className="home-btn" onClick={handleHomeClick}>
        <img src="/home.png" alt="Home" className="home-icon" />
      </button>
      <div className="page3-content">
        <h2 className="page3-title">{question}</h2>
        <p className="page3-subtitle">
          Let us know if it’s a bit glitchy — we’re still upgrading the map! You can select multiple!
        </p>

        <div className="page3-grid">
          {options.map((opt) => (
            <button
              key={opt}
              className={`page3-option ${
                answers[question]?.includes(opt) ? "selected" : ""
              }`}
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {answers[question]?.length > 0 && (
        <button className="page3-next-btn" onClick={() => navigate("/page4")}>
          Next
        </button>
      )}
    </div>
  );
}
