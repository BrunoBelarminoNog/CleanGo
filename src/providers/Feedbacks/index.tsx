import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from "react";

import { FeedBackData } from "../../types/feedbackData";
import api from "../../services/api";
import { useAuth } from "../Auth";
import { useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { notification } from "antd";
import { FaCheckCircle, FaTimes, FaTimesCircle } from "react-icons/fa";

interface FeedbackProviderProps {
  children: ReactNode;
}

interface EditFeedback {
  userId?: number;
  score?: number;
  feedback?: string;
}

interface FeedbackProviderData {
  newFeedback: (
    feedbackData: FeedBackData,
    setVisible: Dispatch<SetStateAction<boolean>>
  ) => void;
  deleteFeedback: (idFeedback: number) => void;
  editFeedback: (feedbackData: EditFeedback) => void;
  getAllFeedback: (userId: number, setError: Dispatch<boolean>) => void;
  feedbacks: FeedBackData[];
}

const FeedbackContext = createContext<FeedbackProviderData>(
  {} as FeedbackProviderData
);
export const FeedbackProvider = ({ children }: FeedbackProviderProps) => {
  const { token } = useAuth();
  const [feedbacks, setFeedbacks] = useState<FeedBackData[]>([]);

  const newFeedback = (
    feedbackData: FeedBackData,
    setVisible: Dispatch<SetStateAction<boolean>>
  ) => {
    api
      .post("feedback", feedbackData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res: AxiosResponse) => {
        notification.open({
          message: "Sucesso",
          closeIcon: <FaTimes />,
          style: {
            WebkitBorderRadius: 4,
          },
          description: "Serviço avaliado com o sucesso.",
          icon: <FaCheckCircle style={{ color: "green" }} />,
        });

        setVisible(false);
      })
      .catch((err: AxiosError) => {
        notification.open({
          message: "Erro.",
          closeIcon: <FaTimes />,
          description: `Erro ao tentar avaliar. ${err.response?.data}`,
          icon: <FaTimesCircle style={{ color: "red" }} />,
        });
      });
  };
  const getAllFeedback = (userId: number, setError: Dispatch<boolean>) => {
    if (userId === 0) {
      return setError(true);
    }

    api
      .get(`feedback?userId=${userId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response: AxiosResponse) => {
        setFeedbacks(response.data);
      })
      .catch((err: AxiosError) => {
        notification.open({
          message: "Erro.",
          closeIcon: <FaTimes />,
          description: `Erro ao listar feedbacks. ${err.response?.data}`,
          icon: <FaTimesCircle style={{ color: "red" }} />,
        });
      });
  };

  const deleteFeedback = (idFeedback: number) => {
    api
      .delete(`feedback/${idFeedback}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {
        notification.open({
          message: "Sucesso",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Roboto",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 4,
          },
          description: "Feedback apagado com sucesso!",
          icon: <FaCheckCircle style={{ color: "green" }} />,
        });
      })
      .catch((err: AxiosError) => {
        notification.open({
          message: "Erro.",
          closeIcon: <FaTimes />,
          description: `Erro ao deletar feedback. ${err.response?.data}`,
          icon: <FaTimesCircle style={{ color: "red" }} />,
        });
      });
  };

  const editFeedback = (feedbackData: EditFeedback) => {
    api
      .patch("feedback", feedbackData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(() => {
        notification.open({
          message: "Sucesso",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Roboto",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 4,
          },
          description: "Feedback editado com sucesso!",
          icon: <FaCheckCircle style={{ color: "green" }} />,
        });
      })
      .catch((err: AxiosError) => {
        notification.open({
          message: "Erro.",
          closeIcon: <FaTimes />,
          description: `Erro ao editar feedback. ${err.response?.data}`,
          icon: <FaTimesCircle style={{ color: "red" }} />,
        });
      });
  };
  return (
    <FeedbackContext.Provider
      value={{
        newFeedback,
        editFeedback,
        deleteFeedback,
        getAllFeedback,
        feedbacks,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => useContext(FeedbackContext);
