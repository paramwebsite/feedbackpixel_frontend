import { useNavigate } from "react-router-dom";

export default function Page5() {
  const navigate = useNavigate();
  const options = [
    "A voxel is a 3D equivalent of a pixel.",
    "All pixels are always the same colour.",
    "Raster images are always sharper than vectors.",
    "Higher pixel density usually means a sharper image.",
    "I didn’t learn anything.",
  ];

  return (
    <div className="page" style={{ backgroundImage: "url('/bg5.jpg')" }}>
      <h2 className="text-3xl font-bold mb-4">WHAT DID YOU LEARN FROM THE GALLERY?</h2>
      <p className="mb-8 text-sm opacity-80">
        Let us know if it’s a bit glitchy — we’re still upgrading the map!
      </p>
      <div className="flex flex-col gap-3 max-w-xl text-left">
        {options.map((opt) => (
          <label key={opt}>
            <input type="radio" name="learn" value={opt} /> {opt}
          </label>
        ))}
      </div>
      <button onClick={() => navigate("/page6")} className="nav-btn">Next</button>
    </div>
  );
}
