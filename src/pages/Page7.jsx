import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Page7() {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  return (
    <div className="page" style={{ backgroundImage: "url('/bg7.jpg')" }}>
      <h2 className="text-3xl font-bold mb-6">IS THERE ANYTHING YOU WOULD LIKE TO ADD?</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your feedback..."
        className="w-2/3 p-2 rounded bg-white/20 text-white border-b border-white outline-none"
      />
      <button onClick={() => navigate("/page8")} className="nav-btn">Submit</button>
    </div>
  );
}
