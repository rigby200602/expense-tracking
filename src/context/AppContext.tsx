import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type AppContextType = {
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>;
  logIn: boolean;
  setLogIn: Dispatch<SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [logIn, setLogIn] = useState(false);
  const [isOpen, setIsOpen] = useState(null);

  const value = useMemo(
    () => ({ isCollapsed, setIsCollapsed,
    logIn, setLogIn,
    isOpen, setIsOpen }),
    [isCollapsed, logIn, isOpen]
  );

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }

  return context;
};