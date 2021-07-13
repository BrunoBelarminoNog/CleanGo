import Helmet from "react-helmet";
import { useLocation } from "react-router-dom";
import { formatedPath } from "../../utils/formatedPath";

const TitlePage = () => {
  const location = useLocation();
  return (
    <Helmet title={`CleanGo | Página ${formatedPath(location.pathname)}`} />
  );
};

export default TitlePage;
