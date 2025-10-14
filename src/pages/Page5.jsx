import { useNavigate } from "react-router-dom";
import "../styles/Page6.css";

export default function Page8() {
  const navigate = useNavigate();

  return (
    <div className="page8">
      <h1 className="page8-title">Image decoded</h1>

      <div className="page8-bubble">Thank you!</div>

      <button className="page8-home-btn" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
}
