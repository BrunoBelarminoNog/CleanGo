import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useState,
} from "react";
import { History } from "history";
import jwt_decode from "jwt-decode";
import api from "../../services/api";
import { PartnerData } from "../../types/partnerData";
import { ClientData } from "../../types/clientData";
import { notification } from "antd";
import { FaCheckCircle, FaTimes, FaTimesCircle } from "react-icons/fa";

interface AuthProviderProps {
  children: ReactNode;
}

interface ClientLogin {
  email: string;
  password: string;
}

interface AuthProviderData {
  userLogin: (
    clientData: ClientLogin,
    setLoad: Dispatch<boolean>,
    history: History
  ) => void;
  userLogoff: (history: History) => void;
  token: string;
  setAuth: (value: React.SetStateAction<string>) => void;
  idClient: number;
  setIdClient: (value: React.SetStateAction<number>) => void;
  user?: PartnerData | ClientData;
}

interface DecodeToken {
  sub: string;
  iat: number;
  email: string;
  exp: number;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const convertStringToNumber = (str: string): number => {
    return parseInt(str);
  };

  //  login de cliente
  const [auth, setAuth] = useState<string>(() => {
    let token = localStorage.getItem("@CleanGo/token");

    if (token) {
      return JSON.parse(token);
    }
    return "";
  });
  const [user, setUser] = useState<PartnerData | ClientData>(() => {
    let userStorage = localStorage.getItem("@CleanGo/user");

    if (userStorage) {
      return JSON.parse(userStorage);
    }
    return {} as PartnerData | ClientData;
  });

  const [idClient, setIdClient] = useState<number>(0);

  const getUser = (
    id: string,
    token: string,
    history: History,
    setLoad: Dispatch<boolean>
  ) => {
    api
      .get(`users/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setUser(response.data);
        localStorage.setItem("@CleanGo/user", JSON.stringify(response.data));

        notification.open({
          message: "Sucesso",
          closeIcon: <FaTimes />,
          style: {
            WebkitBorderRadius: 4,
          },
          description: "Login efetuado com sucesso",
          icon: <FaCheckCircle style={{ color: "green" }} />,
        });
        setLoad(false);
        if (response.data.partner) {
          history.push("/dashboardparceiro");
        } else {
          history.push("/dashboardcliente");
        }
      })
      .catch((err) => {
        setLoad(false);

        notification.open({
          message: "Erro",
          closeIcon: <FaTimes />,
          style: {
            WebkitBorderRadius: 4,
          },
          description:
            "Erro no login. Verifique seu email e senha, tente novamente.",
          icon: <FaTimesCircle style={{ color: "red" }} />,
        });
      });
  };

  const userLogin = (
    clientData: ClientLogin,
    setLoad: Dispatch<boolean>,
    history: History
  ) => {
    api
      .post("login", clientData)
      .then((response) => {
        console.log("Entrou na aplicação");
        localStorage.setItem(
          "@CleanGo/token",
          JSON.stringify(response.data.accessToken)
        );
        const decodedToken: DecodeToken = jwt_decode(response.data.accessToken);
        localStorage.setItem("@CleanGo/idClient", decodedToken.sub);
        setIdClient(convertStringToNumber(decodedToken.sub));

        setAuth(response.data.accessToken);
        getUser(decodedToken.sub, response.data.accessToken, history, setLoad);
      })
      .catch((err) => {
        setLoad(false);

        notification.open({
          message: "Erro",
          closeIcon: <FaTimes />,
          style: {
            WebkitBorderRadius: 4,
          },
          description:
            "Erro no login. Verifique seu email e senha, tente novamente.",
          icon: <FaTimesCircle style={{ color: "red" }} />,
        });
      });
  };

  const userLogoff = (history: History) => {
    setUser({});
    setAuth("");
    setIdClient(0);
    localStorage.removeItem("@CleanGo/token");
    localStorage.removeItem("@CleanGo/idClient");
    localStorage.removeItem("@CleanGo/user");

    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        token: auth,
        setAuth,
        userLogin,
        idClient,
        setIdClient,
        user,
        userLogoff,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
