import { createContext } from "react";
import type { ReactNode } from "react";
import { useState } from "react";

// Define the interface for the context value
type AppContextType = {
  isCollaspe: boolean;
};

// Create the context with an initial value of undefined
const AppContext = createContext<AppContextType | undefined>(undefined);

// Define the Provider props type
type AppProvider = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProvider) => {
  const [isCollaspe, setIsCollaspe] = useState(false);

  const value: AppContextType = {
    isCollaspe
  };
  
  <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>;
};
