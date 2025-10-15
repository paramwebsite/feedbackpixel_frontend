import { useNavigate } from "react-router-dom";
import { useFeedback } from "../context/FeedbackContext"; // ✅ import context
import "../styles/Page6.css";

export default function Page6() {
  const navigate = useNavigate();
  const { resetAnswers } = useFeedback(); // ✅ get reset function

  const handleHome = () => {
    resetAnswers(); // ✅ clear all stored answers
    navigate("/");  // ✅ go back to home
  };

  return (
    <div className="page8">
      <h1 className="page8-title">Image decoded</h1>

      <div className="page8-bubble">
        <img src="/thankyou.png" alt="Thank You" className="page8-image" />
      </div>

      <button className="page8-home-btn" onClick={handleHome}>
        Home
      </button>
    </div>
  );
}
