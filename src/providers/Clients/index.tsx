import { createContext, Dispatch, ReactNode, useContext } from "react";
import { ClientData } from "../../types/clientData";
import api from "../../services/api";
import { History } from "history";
import { useAuth } from "../Auth";
import { notification } from "antd";
import { FaCheckCircle, FaTimes, FaTimesCircle } from "react-icons/fa";
import { useState } from "react";
import { AxiosError, AxiosResponse } from "axios";

interface ClientProviderProps {
  children: ReactNode;
}
interface EditClient {
  partner?: boolean;
  name?: string;
  email?: string;
  cpf?: string;
  password?: string;
}

interface ClientProviderData {
  newClient: (
    clientData: ClientData,
    setLoad: Dispatch<boolean>,
    history: History
  ) => void;

  deleteClient: (idClient: number) => void;
  editClient: (clientData: EditClient) => void;
  getAllClients: () => void;
  searchClient: (idClient: number) => void;
  clients: ClientData[];
  client: ClientData;
}

const ClientContext = createContext<ClientProviderData>(
  {} as ClientProviderData
);

export const ClientProvider = ({ children }: ClientProviderProps) => {
  const { token, idClient } = useAuth();
  const [clients, setClients] = useState<ClientData[]>([]);
  const [client, setClient] = useState<ClientData>({} as ClientData);

  // registrar cliente
  const newClient = (
    clientData: ClientData,
    setLoad: Dispatch<boolean>,
    history: History
  ) => {
    const client: ClientData = {
      ...clientData,
      partner: false,
    };

    api
      .post("register", client)
      .then(() => {
        notification.open({
          message: "Sucesso",
          closeIcon: <FaTimes />,
          style: {
            WebkitBorderRadius: 4,
          },
          description: "Usuário criado com sucesso! Faça login agora mesmo.",
          icon: <FaCheckCircle style={{ color: "green" }} />,
        });
        setLoad(false);

        history.push("/login");
      })
      .catch(() => {
        setLoad(false);

        notification.open({
          message: "Erro",
          closeIcon: <FaTimes />,
          style: {
            WebkitBorderRadius: 4,
          },
          description:
            "Erro ao realizar cadastro. Verifique sua conexão e tente novamente.",
          icon: <FaTimesCircle style={{ color: "red" }} />,
        });
      });
  };

  const editClient = (clientData: EditClient) => {
    api
      .patch(`users/${idClient}`, clientData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response: AxiosResponse) =>
        notification.open({
          message: "Sucesso",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Roboto",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 4,
          },
          description: "Dados atualizados",
          icon: <FaCheckCircle style={{ color: "green" }} />,
        })
      )
      .catch((err: AxiosError) => {
        notification.open({
          message: "Erro",
          closeIcon: <FaTimes />,
          style: {
            WebkitBorderRadius: 4,
          },
          description:
            "Erro ao editar cadastro. Verifique sua conexão e tente novamente.",
          icon: <FaTimesCircle style={{ color: "red" }} />,
        });
      });
  };
  const searchClient = (idClient: number) => {
    api
      .get(`users/${idClient}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setClient(response.data);
      })
      .catch((err) => {
        notification.open({
          message: "Erro",
          closeIcon: <FaTimes />,
          style: {
            WebkitBorderRadius: 4,
          },
          description:
            "Erro ao pesquisar. Verifique sua conexão e tente novamente.",
          icon: <FaTimesCircle style={{ color: "red" }} />,
        });
      });
  };

  const getAllClients = () => {
    api
      .get(`users/?partner=false`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response: AxiosResponse) => setClients([...response.data]))
      .catch((err) => {
        notification.open({
          message: "Erro",
          closeIcon: <FaTimes />,
          style: {
            WebkitBorderRadius: 4,
          },
          description: "Erro. Verifique sua conexão e tente novamente.",
          icon: <FaTimesCircle style={{ color: "red" }} />,
        });
      });
  };
  const deleteClient = (idClient: number) => {
    api
      .delete(`users/${idClient}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        notification.open({
          message: "Sucesso",
          closeIcon: <FaTimes />,
          style: {
            fontFamily: "Roboto",
            backgroundColor: "var(--gray)",
            WebkitBorderRadius: 4,
          },
          description: "Sucesso ao deletar.",
          icon: <FaCheckCircle style={{ color: "green" }} />,
        });
      })
      .catch((err) => {
        notification.open({
          message: "Erro",
          closeIcon: <FaTimes />,
          style: {
            WebkitBorderRadius: 4,
          },
          description:
            "Erro ao excluir. Verifique sua conexão e tente novamente.",
          icon: <FaTimesCircle style={{ color: "red" }} />,
        });
      });
  };

  return (
    <ClientContext.Provider
      value={{
        newClient,
        editClient,
        deleteClient,
        searchClient,
        getAllClients,
        clients,
        client,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClients = () => useContext(ClientContext);
