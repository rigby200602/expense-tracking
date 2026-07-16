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
  isLoggedIn : boolean;
  setIsLoggedIn : Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  currency: string
};

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currency] = useState("Đ");

  const value = useMemo(
    () => ({ isCollapsed, setIsCollapsed,
    isLoggedIn, setIsLoggedIn,
    isOpen, setIsOpen, currency, }),
    [isCollapsed, isLoggedIn, isOpen, currency]
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