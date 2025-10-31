import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  organization: string;
  setOrganization: (newValue: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const Context: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [organization, setOrganization] = useState("lemoncode");

  return (
    <AppContext.Provider value={{ organization, setOrganization }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
