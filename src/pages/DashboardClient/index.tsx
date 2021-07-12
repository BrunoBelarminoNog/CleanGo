import { useEffect } from "react";
import { Switch } from "react-router-dom";
import Route from "../../routes/route";

import Aside from "../../components/Aside";
import Header from "../../components/Header";
import HeaderNavAuth from "../../components/HeaderNavAuth";
import TitlePage from "../../components/TitlePage";

import Main from "./Main";
import Reviews from "./Reviews";
import Services from "./Services";

import { useTheme } from "../../providers/Theme";

const DashboardClient = () => {
  const { handleBackground } = useTheme();

  useEffect(() => {
    handleBackground(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TitlePage />

      <Header auth={true}>
        <HeaderNavAuth name={"Mockado"} />
      </Header>
      <Aside />
      <Switch>
        <Route isPrivate path="/dashboardcliente/" exact component={Main} />
        <Route
          isPrivate
          path="/dashboardcliente/avaliacoes"
          component={Reviews}
        />
        <Route
          isPrivate
          path="/dashboardcliente/servicos"
          component={Services}
        />
      </Switch>
    </>
  );
};

export default DashboardClient;
