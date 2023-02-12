import { createBrowserRouter } from "react-router-dom";
import Form from "../components/Form";
import Product from "../components/Product";
import Layout from "../layout/Layout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/:prod",
                element: <Product />
            }
        ],

    }
])
