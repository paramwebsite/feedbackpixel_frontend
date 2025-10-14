import { createContext, useState, useContext } from "react";

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [answers, setAnswers] = useState({
    page2: "",
    page3: [],
    page4: [],
    page5: "",
    page6: "",
    page7: "",
  });

  const updateAnswer = (page, value) => {
    setAnswers((prev) => ({ ...prev, [page]: value }));
  };

  return (
    <FeedbackContext.Provider value={{ answers, updateAnswer }}>
      {children}
    </FeedbackContext.Provider>
  );
}

export const useFeedback = () => useContext(FeedbackContext);
