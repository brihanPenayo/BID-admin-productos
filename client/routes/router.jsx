import { createBrowserRouter } from "react-router-dom";
import Form from "../components/Form";
import Product from "../components/Product";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Form />
            },
            {
                path: "/:prod",
                element: <Product />
            }
        ],

    }
])
