import { useEffect } from "react";
import { Switch } from "react-router-dom";
import Route from "../../routes/route";

import Aside from "../../components/Aside";
import Header from "../../components/Header";
import HeaderNavAuth from "../../components/HeaderNavAuth";
import TitlePage from "../../components/TitlePage";
import OpenServices from "./OpenServices";
import Main from "./Main";
import Settings from "./Settings";
import ReviewsAndServices from "./ReviewsAndServices";
import { useTheme } from "../../providers/Theme";

const DashboardClient = () => {
  const { handleBackground } = useTheme();

  useEffect(() => {
    handleBackground(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TitlePage title="Dashboard Empregador" />

      <Header auth={true}>
        <HeaderNavAuth name={"Mockado"} />
      </Header>
      <Aside />
      <Switch>
        <Route isPrivate path="/dashboardcliente/" exact component={Main} />
        <Route
          isPrivate
          path="/dashboardcliente/avaliacoes-e-servicos"
          component={ReviewsAndServices}
        />
        <Route
          isPrivate
          path="/dashboardcliente/servicos"
          component={OpenServices}
        />
        <Route
          isPrivate
          path="/dashboardcliente/configuracoes"
          component={Settings}
        />
      </Switch>
    </>
  );
};

export default DashboardClient;
