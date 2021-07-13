import { createContext, ReactNode, useContext } from "react";
import { useState } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeProviderData {
  backgroundGray: boolean;
  handleBackground: (condition: boolean) => void;
}

const ThemeContext = createContext<ThemeProviderData>({} as ThemeProviderData);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [backgroundGray, setBackgroundGray] = useState(false);

  const handleBackground = (condition: boolean) => {
    setBackgroundGray(condition);
  };

  return (
    <ThemeContext.Provider value={{ handleBackground, backgroundGray }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
