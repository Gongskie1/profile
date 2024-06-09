import { PropsWithChildren, useState } from "react";
import AuthContext from "./AuthContext.tsx";

function AuthProvider({ children }: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
