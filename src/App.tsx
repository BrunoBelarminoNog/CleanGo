import GlobalStyle from "./style/global";
import Routes from "./routes";
import "./style/antdStyle.css";

import { useTheme } from "./providers/Theme";

function App() {
  const { backgroundGray } = useTheme();

  return (
    <>
      <Routes />
      <GlobalStyle backgroundGray={backgroundGray} />
    </>
  );
}

export default App;
