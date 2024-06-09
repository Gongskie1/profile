import { createContext } from "react";

type AuthContextType = {
  isAuthenticated: boolean | undefined;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean | undefined>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
