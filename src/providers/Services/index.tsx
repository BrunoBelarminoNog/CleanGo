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

interface ServicesProviderProps {
  children: ReactNode;
}
interface ServicesProviderData {
  newService: (
    serviceData: ServiceData,
    setError: Dispatch<SetStateAction<boolean>>
  ) => void;
  acceptService: (
    data: AcceptService,
    setError: Dispatch<SetStateAction<boolean>>
  ) => void;
  token?: string;
  finishService: (
    completed: boolean,
    serviceId: number,
    setError: Dispatch<SetStateAction<boolean>>
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
    partnerId: number
  ) => void;
  services: ServiceData[];
  servicesAccept: ServiceData[];
  setServices: Dispatch<SetStateAction<ServiceData[]>>;
  filterServices: (filter: string) => void;
  filteredServices: ServiceData[];
  getServicesPaginated: (pageNumber: number, limit?: number) => void;
}
export const ServicesContext = createContext<ServicesProviderData>(
  {} as ServicesProviderData
);

export const ServiceProvider = ({ children }: ServicesProviderProps) => {
  const { token } = useAuth();
  const [services, setServices] = useState<ServiceData[]>([]);
  const [filteredServices, setFilteredServices] = useState<ServiceData[]>([]);
  const [servicesAccept, setServicesAccept] = useState<ServiceData[]>([]);

  const newService = (
    serviceData: ServiceData,
    setError: Dispatch<SetStateAction<boolean>>
  ) => {
    api
      .post("services", serviceData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => getServices(setError))
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
      .then(() => getServices(setError))
      .catch((err) => setError(true));
  };
  const finishService = (
    completed: boolean,
    serviceId: number,
    setError: Dispatch<SetStateAction<boolean>>
  ) => {
    api
      .patch(
        `services/${serviceId}`,
        { completed },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .catch((err) => setError(true));
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
          .get<ServiceData[]>(`services?_page=${page}&_limit=${limit}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => setServices(response.data))
          .catch((err) => setError(true))
      : api
          .get<ServiceData[]>(`services`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => setServices(response.data))
          .catch((err) => setError(true));
  };

  const getServicesAccepted = (
    setError: Dispatch<SetStateAction<boolean>>,
    partnerId: number
  ) => {
    let servicesAcc: ServiceData[] = [];

    api
      .get<ServiceData[]>(`services?partnerId=${partnerId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => (servicesAcc = [...response.data]))
      .catch((err) => setError(true));

    setServicesAccept(servicesAcc);
    return servicesAcc;
  };
  const filterServices = (filter: string) => {
    api
      .get<ServiceData[]>(`services?serviceDetails.class=${filter}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setFilteredServices(response.data))
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
        getServices,
        acceptService,
        deleteService,
        finishService,
        newService,
        services,
        servicesAccept,
        setServices,
        getServicesAccepted,
        filterServices,
        filteredServices,
        getServicesPaginated,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};
export const useServices = () => useContext(ServicesContext);
