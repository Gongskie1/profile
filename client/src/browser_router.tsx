import { createBrowserRouter } from "react-router-dom";
import {
    LoginPage,
    RegisterPage,

} from "./pages/index.ts";


const  router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>
    },
    {
        path:"/register",
        element: <RegisterPage/>
    }
])

export default router;