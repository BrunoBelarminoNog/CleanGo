import { Switch, Redirect } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Dashboard from "../pages/DashboardPartner";
import Route from "./route";
import ProfessionalRegister from "../pages/ProfessionalRegister";
import { useAuth } from "../providers/Auth";

import EnterPage from "../pages/EnterPage";

import DashboardClient from "../pages/DashboardClient";
import WorkWithUs from "../pages/WorkWithUs";
const Routes = () => {
  const { token } = useAuth();

  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/sejaumparceiro" component={WorkWithUs} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/entrar" exact component={EnterPage} />
      <Route path="/cadastro" exact component={RegisterPage} />
      <Route path="/cadastroparceiro" exact component={ProfessionalRegister} />
      {token ? (
        <Route isPrivate path="/dashboardparceiro" component={Dashboard} />
      ) : (
        <Redirect to="/" />
      )}
      {token ? (
        <Route isPrivate path="/dashboardcliente" component={DashboardClient} />
      ) : (
        <Redirect to="/" />
      )}

      {/* <Route component={() => <h1>Rota não encontrada</h1>} /> */}
    </Switch>
  );
};
export default Routes;
