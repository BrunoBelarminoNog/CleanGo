import { Route as ReactDOMRoute } from "react-router-dom";
interface RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  path?: string;
  exact?: boolean;
}

const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: RouteProps) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return <Component />;
      }}
    />
  );
};
export default Route;
