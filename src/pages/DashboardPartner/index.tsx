import { Switch, Redirect } from "react-router-dom";
import Route from "../../routes/route";
import Aside from "../../components/Aside";
import Main from "./Main";
import Gains from "./Gains";
import Reviews from "./Reviews";
import Header from "../../components/Header";
import HeaderNavAuth from "../../components/HeaderNavAuth";
import Complaints from "./Complaints";
import Settings from "./Settings";
import Services from "./Services";
import { useTheme } from "../../providers/Theme";
import { useEffect } from "react";

import TitlePage from "../../components/TitlePage";
import { useAuth } from "../../providers/Auth";
const Dashboard = () => {
  const { handleBackground } = useTheme();
  const { token } = useAuth();

  useEffect(() => {
    handleBackground(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TitlePage title="Dashboard Empregado" />

      <Header auth={true}>
        <HeaderNavAuth name={"Mockado"} />
      </Header>
      <Aside />
      <Switch>
        {token ? (
          <Route isPrivate path="/dashboardparceiro" exact component={Main} />
        ) : (
          <Redirect to="/" />
        )}{" "}
        <Route isPrivate path="/dashboardparceiro/receita" component={Gains} />
        <Route
          isPrivate
          path="/dashboardparceiro/avaliacoes"
          component={Reviews}
        />
        <Route
          isPrivate
          path="/dashboardparceiro/reclamacoes
          "
          component={Complaints}
        />
        <Route
          isPrivate
          path="/dashboardparceiro/configuracoes"
          component={Settings}
        />
        <Route
          isPrivate
          path="/dashboardparceiro/servicos"
          component={Services}
        />
      </Switch>
    </>
  );
};

export default Dashboard;
