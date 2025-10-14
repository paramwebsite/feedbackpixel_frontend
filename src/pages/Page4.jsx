import { useNavigate } from "react-router-dom";

export default function Page4() {
  const navigate = useNavigate();
  const options = [
    "Creative",
    "Fun & Playful",
    "Educational",
    "Could be better",
    "Confusing",
    "Not my style",
  ];

  return (
    <div className="page" style={{ backgroundImage: "url('/bg4.jpg')" }}>
      <h2 className="text-3xl font-bold mb-8">HOW WOULD YOU DESCRIBE THE GALLERY?</h2>
      <div className="grid grid-cols-2 gap-4 max-w-lg">
        {options.map((opt) => (
          <button key={opt} className="option-btn">{opt}</button>
        ))}
      </div>
      <button onClick={() => navigate("/page5")} className="nav-btn">Next</button>
    </div>
  );
}
