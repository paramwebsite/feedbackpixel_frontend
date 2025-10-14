import { useNavigate } from "react-router-dom";

export default function Page8() {
  const navigate = useNavigate();

  return (
    <div className="page" style={{ backgroundImage: "url('/bg8.jpg')" }}>
      <h1 className="text-6xl font-bold mb-4">IMAGE DECODED</h1>
      <p className="text-2xl mb-8">Thank you!</p>
      <button onClick={() => navigate("/")} className="nav-btn">
        Home
      </button>
    </div>
  );
}
