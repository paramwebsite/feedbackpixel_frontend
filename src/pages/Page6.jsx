import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useFeedback } from "../context/FeedbackContext";
import "../styles/Page6.css";

export default function Page6() {
  const navigate = useNavigate();
  const { resetAnswers } = useFeedback();
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      resetAnswers(); // Clear feedback
      navigate("/"); // Auto-go home
    }, 15000); // 15 seconds of inactivity
  };

  useEffect(() => {
    // Start timer on mount
    resetTimer();

    // Detect any user interaction
    const handleActivity = () => resetTimer();

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("click", handleActivity);
    window.addEventListener("touchstart", handleActivity);

    return () => {
      // Cleanup
      clearTimeout(timerRef.current);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("click", handleActivity);
      window.removeEventListener("touchstart", handleActivity);
    };
  }, []);

  const handleHome = () => {
    resetAnswers();
    navigate("/");
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
