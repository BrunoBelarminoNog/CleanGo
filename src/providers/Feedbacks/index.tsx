import { createContext, ReactNode, useContext } from "react";

import { FeedBackData } from "../../types/feedbackData";
import api from "../../services/api";

interface FeedbackProviderProps {
  children: ReactNode;
}

interface FeedbackProviderData {
  newFeedback: (feedbackData: FeedBackData) => void;
  deleteFeedback: (idFeedback: number) => void;
  editFeedback: (feedbackData: EditFeedback) => void;
  getAllFeedback: () => void;
}

interface EditFeedback {
  userId?: number;
  score?: number;
  feedback?: string;
}

const FeedbackContext = createContext<FeedbackProviderData>(
  {} as FeedbackProviderData
);
export const FeedbackProvider = ({ children }: FeedbackProviderProps) => {
  const token = localStorage.getItem("token") || "";

  const newFeedback = (feedbackData: FeedBackData) => {
    api
      .post("feedback", feedbackData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {
        console.log("Feedback feito com sucesso");
      })
      .catch((err) => console.log(err));
  };
  const getAllFeedback = () => {
    api
      .get("feedback", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {
        console.log("Todos os feedbacks");
      })
      .catch((err) => console.log(err));
  };

  const deleteFeedback = (idFeedback: number) => {
    api
      .delete(`feedback/${idFeedback}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {
        console.log("Feedback deletado com sucesso");
      })
      .catch((err) => console.log(err));
  };

  const editFeedback = (feedbackData: EditFeedback) => {
    api
      .patch("feedback", feedbackData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {
        console.log("Feedback editado com sucesso");
      })
      .catch((err) => console.log(err));
  };
  return (
    <FeedbackContext.Provider
      value={{ newFeedback, editFeedback, deleteFeedback, getAllFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => useContext(FeedbackContext);
