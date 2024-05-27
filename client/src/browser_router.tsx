import { createBrowserRouter } from "react-router-dom";
import {
    HomePage,
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
    },
    {
        path:"/homepage",
        element: <HomePage/>
    }
])

export default router;