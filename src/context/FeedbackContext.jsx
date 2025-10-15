import { createContext, useState, useContext } from "react";

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [answers, setAnswers] = useState({
    "Which exhibit did you enjoy the most?": "",
    "How would you describe the gallery?": [],
    "What did you learn from the gallery?": [],
    "Is there anything you would like to add?": "",
  });

  const updateAnswer = (question, value) => {
    setAnswers((prev) => ({ ...prev, [question]: value }));
  };

  const resetAnswers = () => {
    setAnswers({
      "Which exhibit did you enjoy the most?": "",
      "How would you describe the gallery?": [],
      "What did you learn from the gallery?": [],
      "Is there anything you would like to add?": "",
    });
  };

  return (
    <FeedbackContext.Provider value={{ answers, updateAnswer, resetAnswers }}>
      {children}
    </FeedbackContext.Provider>
  );
}

export const useFeedback = () => useContext(FeedbackContext);
