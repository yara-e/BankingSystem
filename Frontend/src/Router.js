import { createBrowserRouter } from "react-router-dom";
import Customers from "./components/Customer";
import Transaction from "./components/Transaction";
import Home from "../src/components/Home"
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/customers",
        element: <Customers />
    },
    {
        path: "/trans",
        element: <Transaction />
    },
])
