import { createBrowserRouter } from "react-router-dom";
import {
    LoginPage,
    RegisterPage,
    HomePage // Make sure to import your HomePage component
} from "./pages/index.ts";
import ProtectedRoutes from "./pages/utils/ProtectedRoutes.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoutes />,
        children: [
            
            {
                path: "home",
                element: <HomePage />
            }
        ],
    },
    {
        path: "register",
        element: <RegisterPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
]);

export default router;