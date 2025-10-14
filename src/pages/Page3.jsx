import { useNavigate } from "react-router-dom";
import { useFeedback } from "../context/FeedbackContext";
import "../styles/Page3.css";

export default function Page4() {
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
    let newSelection = [...(answers.page4 || [])];
    if (newSelection.includes(option)) {
      newSelection = newSelection.filter((item) => item !== option);
    } else {
      newSelection.push(option);
    }
    updateAnswer("page4", newSelection);
  };

  return (
    <div className="page4">
      <h2 className="page4-title">How would you describe the gallery?</h2>
      
      <p className="page4-subtitle">
        Let us know if it’s a bit glitchy — we’re still upgrading the map! You can select multiple!
      </p>

      <div className="page4-grid">
        {options.map((opt) => (
          <button
            key={opt}
            className={`page4-option ${answers.page4?.includes(opt) ? "selected" : ""}`}
            onClick={() => handleSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* ✅ Show Next button only when user selects at least one option */}
      {answers.page4?.length > 0 && (
        <button className="page4-next-btn" onClick={() => navigate("/page4")}>
          Next
        </button>
      )}
    </div>
  );
}
