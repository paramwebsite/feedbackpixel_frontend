import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFeedback } from "../context/FeedbackContext";
import "../styles/Page5.css";

export default function Page5() {
  const navigate = useNavigate();
  const { answers, resetAnswers } = useFeedback();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // 👈 new state

  const question = "Is there anything you would like to add?";

  const handleSubmit = async () => {
    if (!text.trim()) return;

    const updatedAnswers = { ...answers, [question]: text };

    const cleanedAnswers = Object.fromEntries(
      Object.entries(updatedAnswers).filter(([_, v]) =>
        Array.isArray(v) ? v.length > 0 : v !== ""
      )
    );

    const payload = {
      question: "User Feedback",
      answer: cleanedAnswers,
    };

    try {
      setLoading(true);
      setErrorMessage(""); // clear previous errors
      const response = await fetch("http://3.109.132.143/api/qna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Feedback saved:", data);
      navigate("/page6");
    } catch (err) {
      console.error("❌ Error submitting feedback:", err);
      setErrorMessage("Something went wrong while saving your feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleHomeClick = () => {
    resetAnswers(); // ✅ clears context
    navigate("/"); // ✅ navigate to home page
  };

  return (
    <div className="page7">
      {/* 🏠 Home button */}
      <button className="home-btn" onClick={handleHomeClick}>
        <img src="/home.png" alt="Home" className="home-icon" />
      </button>

      <div className="page7-inner1">
        <h2 className="page7-title">
          Is there anything <br /> you would like to <br /> add?
        </h2>

        <div className="page7-input-container">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your feedback..."
            className="page7-input"
          />
        </div>

        <button
          className="page7-submit-btn"
          onClick={handleSubmit}
          disabled={!text.trim() || loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {/* 🚨 Inline Error Message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}
