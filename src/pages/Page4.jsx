import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFeedback } from "../context/FeedbackContext";
import "../styles/Page5.css";

export default function Page7() {
  const navigate = useNavigate();
  const { updateAnswer } = useFeedback();
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim()) {
      updateAnswer("page7", text);
      setTimeout(() => navigate("/page6"), 300);
    }
  };

  return (
    <div className="page7">
      <h2 className="page7-title">
        Is there anything you would like<br />to add?
      </h2>

      <div className="page7-input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder=""
          className="page7-input"
        />
      </div>

      <button
        className="page7-submit-btn"
        onClick={handleSubmit}
        disabled={!text.trim()}
      >
        Submit
      </button>
    </div>
  );
}
