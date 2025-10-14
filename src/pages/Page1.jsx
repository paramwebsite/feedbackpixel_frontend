import { useNavigate } from "react-router-dom";
import "../styles/Page1.css";

export default function Page1() {
  const navigate = useNavigate();

  return (
    <div className="page1">
      <h1 className="page1-title">
        Decode<br />The Image
      </h1>

      <p className="page1-subtitle">
        Answer a few questions to decode the background image.
      </p>

      <button className="page1-button" onClick={() => navigate("/page2")}>
        Begin
      </button>
    </div>
  );
}
