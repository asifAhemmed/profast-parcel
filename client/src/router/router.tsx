import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/root-layout";
import HomePage from "../pages/home/home/home-page";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: HomePage
            }
        ]
    }
])