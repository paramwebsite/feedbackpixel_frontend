import { useNavigate } from "react-router-dom";

export default function Page6() {
  const navigate = useNavigate();
  const options = [
    "The gallery layout was intuitive.",
    "The interactive exhibits were engaging.",
    "The lighting enhanced the experience.",
    "The overall flow could improve.",
  ];

  return (
    <div className="page" style={{ backgroundImage: "url('/bg6.jpg')" }}>
      <h2 className="text-3xl font-bold mb-4">HOW WAS YOUR OVERALL EXPERIENCE?</h2>
      <div className="flex flex-col gap-3 max-w-xl text-left">
        {options.map((opt) => (
          <label key={opt}>
            <input type="radio" name="experience" value={opt} /> {opt}
          </label>
        ))}
      </div>
      <button onClick={() => navigate("/page7")} className="nav-btn">Next</button>
    </div>
  );
}
