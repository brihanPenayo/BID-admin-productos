import { createBrowserRouter } from "react-router-dom";
import Details from "../components/Details";
import UpdateForm from "../components/UpdateForm";
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
                element: <Details />,
            },
            {
                path: ":prod/edit",
                element: <UpdateForm />
            }
        ],

    }
])
