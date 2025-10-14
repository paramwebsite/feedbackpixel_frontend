import { useNavigate } from "react-router-dom";

export default function Page3() {
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
    <div className="page" style={{ backgroundImage: "url('/bg3.jpg')" }}>
      <h2 className="text-3xl font-bold mb-2">How would you describe the gallery?</h2>
      <p className="mb-8 text-sm opacity-80">
        Let us know if it’s a bit glitchy — we’re still upgrading the map! You can select multiple!
      </p>
      <div className="grid grid-cols-2 gap-4 max-w-lg">
        {options.map((opt) => (
          <button key={opt} className="option-btn">{opt}</button>
        ))}
      </div>
      <button onClick={() => navigate("/page4")} className="nav-btn">Next</button>
    </div>
  );
}
