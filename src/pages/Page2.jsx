

// import { useNavigate } from "react-router-dom";
// import { useFeedback } from "../context/FeedbackContext";
// import "../styles/page2.css";

// export default function Page2() {
//   const navigate = useNavigate();
//   const { updateAnswer, resetAnswers } = useFeedback();

//   const question = "Which exhibit did you enjoy the most?";
//   const options = [
//     "Hands on Opera",
//     "Mo Cap",
//     "Colour Game",
//     "Rangolify",
//     "Land Sat",
//     "Hologram Fan",
//   ];

//   const handleSelect = (opt) => {
//     updateAnswer(question, opt);
//     setTimeout(() => navigate("/page3"), 200);
//   };

//   const handleHomeClick = () => {
//     resetAnswers(); // ✅ clears context
//     navigate("/"); // ✅ navigate to home page
//   };

//   return (
//     <div className="page2">
//       {/* 🏠 Home Button */}
//       <button className="home-btn" onClick={handleHomeClick}>
//         <img src="/home.png" alt="Home" className="home-icon" />
//       </button>

//       <div className="page2-content">
//         <h2 className="page2-title">
//           Which exhibit did <br /> you enjoy the most?
//         </h2>

//         <div className="page2-grid">
//           {options.map((opt) => (
//             <div key={opt} className="page2-card" onClick={() => handleSelect(opt)}>
//               <div className="page2-card-top"></div>
//               <div className="page2-card-label">{opt}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";
import { useFeedback } from "../context/FeedbackContext";
import "../styles/page2.css";

export default function Page2() {
  const navigate = useNavigate();
  const { updateAnswer, resetAnswers } = useFeedback();

  const question = "Which exhibit did you enjoy the most?";

  // 🖼️ Each option with its image
  const options = [
    { name: "Hands on Opera", img: "/HandsonOpera.jpeg" },
    { name: "Mo Cap", img: "/MoCap.jpeg" },
    { name: "Colour Game", img: "/color_game.jpeg" },
    { name: "Rangolify", img: "/Rangolify.jpeg" },
    { name: "Land Sat", img: "/Land_sat.jpeg" },
    { name: "Hologram Fan", img: "/hologram.jpeg" },
  ];

  const handleSelect = (opt) => {
    updateAnswer(question, opt.name);
    setTimeout(() => navigate("/page3"), 200);
  };

  const handleHomeClick = () => {
    resetAnswers();
    navigate("/");
  };

  return (
    <div className="page2">
      {/* 🏠 Home Button */}
      <button className="home-btn" onClick={handleHomeClick}>
        <img src="/home.png" alt="Home" className="home-icon" />
      </button>

      <div className="page2-content">
        <h2 className="page2-title">
          Which exhibit did <br /> you enjoy the most?
        </h2>

        <div className="page2-grid">
          {options.map((opt) => (
            <div key={opt.name} className="page2-card" onClick={() => handleSelect(opt)}>
              <div className="page2-card-top">
                <img src={opt.img} alt={opt.name} className="page2-image" />
              </div>
              <div className="page2-card-label">{opt.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
