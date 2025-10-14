import { useNavigate } from "react-router-dom";
import { useFeedback } from "../context/FeedbackContext";
import "../styles/Page3.css";

export default function Page3() {
  const navigate = useNavigate();
  const { answers, updateAnswer } = useFeedback();

  const options = [
    "Creative",
    "Fun & Playful",
    "Educational",
    "Could be better",
    "Confusing",
    "Not my style",
  ];

  const handleSelect = (option) => {
    let newSelection = [...answers.page3];
    if (newSelection.includes(option)) {
      newSelection = newSelection.filter((item) => item !== option);
    } else {
      newSelection.push(option);
    }
    updateAnswer("page3", newSelection);

    // ✅ Navigate automatically when at least one option is selected
    setTimeout(() => navigate("/page4"), 300);
  };

  return (
    <div className="page3">
      <h2 className="page3-title">How would you describe the gallery?</h2>
      <p className="page3-subtitle">
        Let us know if it’s a bit glitchy — we’re still upgrading the map! You can select multiple!
      </p>

      <div className="page3-grid">
        {options.map((opt) => (
          <button
            key={opt}
            className={`page3-option ${answers.page3.includes(opt) ? "selected" : ""}`}
            onClick={() => handleSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
