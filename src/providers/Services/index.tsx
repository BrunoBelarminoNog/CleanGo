import { History } from "history";
import api from "../../services/api";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from "react";
import { ServiceData, AcceptService } from "../../types/ServiceData";
import { useState } from "react";
import { useAuth } from "../Auth";
import { AxiosError, AxiosResponse } from "axios";
import { notification } from "antd";
import { FaCheckCircle, FaTimes, FaTimesCircle } from "react-icons/fa";

interface ServicesProviderProps {
  children: ReactNode;
}
interface ServicesProviderData {
  newService: (
    serviceData: ServiceData,
    setError: Dispatch<SetStateAction<boolean>>,
    history: History
  ) => void;
  acceptService: (
    data: AcceptService,
    setError: Dispatch<SetStateAction<boolean>>
  ) => void;
  token?: string;
  finishService: (
    completed: boolean,
    setError: Dispatch<SetStateAction<boolean>>,
    serviceId?: number,
    setVisible?: Dispatch<SetStateAction<boolean>>
  ) => void;
  deleteService: (
    serviceId: number,
    history: History,
    setError: Dispatch<SetStateAction<boolean>>
  ) => void;
  getServices: (
    setError: Dispatch<SetStateAction<boolean>>,
    page?: number,
    limit?: number
  ) => void;
  getServicesAccepted: (
    setError: Dispatch<SetStateAction<boolean>>,
    partnerId?: number
  ) => void;
  getClientServices: (
    setError: Dispatch<SetStateAction<boolean>>,
    completed: string,
    userId?: number,
    page?: number,
    limit?: number
  ) => void;
  services: ServiceData[];
  servicesAccept: ServiceData[];
  clientServices: ServiceData[];
  setServices: Dispatch<SetStateAction<ServiceData[]>>;
  filterOpenServices: (filter: string, userId?: number) => void;
  filterServices: (filter: string) => void;
  filteredServices: ServiceData[];
  filteredOpenServices: ServiceData[];
  getServicesPaginated: (pageNumber: number, limit?: number) => void;
}
export const ServicesContext = createContext<ServicesProviderData>(
  {} as ServicesProviderData
);

export const ServiceProvider = ({ children }: ServicesProviderProps) => {
  const { token, user } = useAuth();
  const [services, setServices] = useState<ServiceData[]>([]);
  const [filteredServices, setFilteredServices] = useState<ServiceData[]>([]);
  const [filteredOpenServices, setFilteredOpenServices] = useState<
    ServiceData[]
  >([]);
  const [servicesAccept, setServicesAccept] = useState<ServiceData[]>([]);
  const [clientServices, setClientServices] = useState<ServiceData[]>([]);
  const newService = (
    serviceData: ServiceData,
    setError: Dispatch<SetStateAction<boolean>>,
    history: History
  ) => {
    api
      .post("services", serviceData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        getServices(setError);
        notification.open({
          message: "Sucesso",
          closeIcon: <FaTimes />,
          style: {
            WebkitBorderRadius: 4,
          },
          description:
            "Pedido de serviço concluído! Acompanhe detalhes na págine de serviços.",
          icon: <FaCheckCircle style={{ color: "green" }} />,
        });

        history.push("/dashboardcliente/servicos");
      })
      .catch((err) => setError(true));
  };
  const acceptService = (
    data: AcceptService,
    setError: Dispatch<SetStateAction<boolean>>
  ) => {
    api
      .patch(`services/${data.serviceId}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        getServicesAccepted(setError, user?.id);
        getServices(setError);
        getClientServices(setError, "false", response.data.userId);
        notification.open({
          message: "Sucesso",
          closeIcon: <FaTimes />,
          style: {
            WebkitBorderRadius: 4,
          },
          description: "Serviço aceito",
          icon: <FaCheckCircle style={{ color: "green" }} />,
        });
      })
      .catch(() => setError(true));
  };

  const finishService = (
    completed: boolean,
    setError: Dispatch<SetStateAction<boolean>>,
    serviceId?: number,
    setVisible?: Dispatch<SetStateAction<boolean>>
  ) => {
    api
      .patch(
        `services/${serviceId}`,
        { completed },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        getClientServices(setError, "false", user?.id);
        notification.open({
          message: "Sucesso",
          closeIcon: <FaTimes />,
          style: {
            WebkitBorderRadius: 4,
          },
          description: "Serviço finalizado",
          icon: <FaCheckCircle style={{ color: "green" }} />,
        });
      })
      .catch((err: AxiosError) => {
        notification.open({
          message: "Erro.",
          closeIcon: <FaTimes />,
          description: `Erro ao tentar concluir serviço. ${err.response?.data}`,
          icon: <FaTimesCircle style={{ color: "red" }} />,
        });

        setVisible && setVisible(false);
      });
  };
  const deleteService = (
    serviceId: number,
    history: History,
    setError: Dispatch<SetStateAction<boolean>>
  ) => {
    api
      .delete(`services/${serviceId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => history.push("/dashboardparceiro"))
      .catch((err) => setError(true));
  };
  const getServices = (
    setError: Dispatch<SetStateAction<boolean>>,
    page?: number,
    limit?: number
  ) => {
    page && limit
      ? api
          .get<ServiceData[]>(
            `services?opened=true&_page=${page}&_limit=${limit}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((response) => setServices(response.data))
          .catch((err) => setError(true))
      : api
          .get<ServiceData[]>(`services?opened=true`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => setServices(response.data))
          .catch((err) => setError(true));
  };

  const getServicesAccepted = (
    setError: Dispatch<SetStateAction<boolean>>,
    partnerId: number = 0
  ) => {
    if (partnerId === 0) {
      console.log("err");
      return setError(true);
    }
    console.log(partnerId);

    api
      .get<ServiceData[]>(`services?partnerId=${partnerId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response: AxiosResponse) => setServicesAccept([...response.data]))
      .catch(() => setError(true));
  };
  const getClientServices = (
    setError: Dispatch<SetStateAction<boolean>>,
    completed: string,
    userId: number = 0,
    page?: number,
    limit?: number
  ) => {
    if (userId === 0) {
      console.log("err");
      return setError(true);
    }
    completed
      ? api
          .get<ServiceData[]>(
            `services?userId=${userId}&completed=${completed}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((response: AxiosResponse) =>
            setClientServices([...response.data])
          )
          .catch(() => setError(true))
      : page && limit
      ? api
          .get<ServiceData[]>(
            `services?userId=${userId}&opened=false&completed=${completed}&_page=${page}&_limit=${limit}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((response: AxiosResponse) =>
            setClientServices([...response.data])
          )
          .catch(() => setError(true))
      : api
          .get<ServiceData[]>(
            `services?userId=${userId}&opened=false&completed=${completed}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((response: AxiosResponse) =>
            setClientServices([...response.data])
          )
          .catch(() => setError(true));
  };

  const filterServices = (filter: string) => {
    api
      .get<ServiceData[]>(
        `services?serviceDetails.class=${filter}&opened=true`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => setFilteredServices(response.data))
      .catch((err) => console.log(err));
  };
  const filterOpenServices = (filter: string, userId?: number) => {
    api
      .get<ServiceData[]>(
        `services?serviceDetails.class=${filter}&userId=${userId}&completed=false`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => setFilteredOpenServices(response.data))
      .catch((err) => console.log(err));
  };

  const getServicesPaginated = (pageNumber: number, limit?: number) => {
    api
      .get<ServiceData[]>(`services?_page=${pageNumber}&_limit=${limit}`)
      .then((response) => setServices(response.data))
      .catch((err) => console.log(err));
  };
  return (
    <ServicesContext.Provider
      value={{
        filterOpenServices,
        getServices,
        acceptService,
        deleteService,
        finishService,
        newService,
        services,
        servicesAccept,
        clientServices,
        setServices,
        getServicesAccepted,
        getClientServices,
        filterServices,
        filteredServices,
        filteredOpenServices,
        getServicesPaginated,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};
export const useServices = () => useContext(ServicesContext);
