import { createBrowserRouter } from "react-router";
import Index from "@pages/quest/Index";
import ProductsAdd from "@src/pages/user/ProductsAdd";
import Login from "@pages/quest/Login";
import AuthWrapper from "@src/wrappers/AuthWrapper";
import AdminWrapper from "@src/wrappers/AdminWrapper";
import Dashboard from "@pages/user/Dashboard";
import IndexWrapper from "@src/wrappers/IndexWrapper";


const router = createBrowserRouter([
    {
        path: '/', Component: IndexWrapper,
        children: [
            {
                index: true,
                Component: Index,
            },
            {
                path: 'auth',
                Component: AuthWrapper,
                children: [
                    { index: true, Component: Login },
                    // { path: '/register', Component: Register }
                ]
            },
            {
                path: 'admin',
                Component: AdminWrapper,
                children: [
                    { index: true, Component: Dashboard },
                    { path: 'products-add', Component: ProductsAdd }
                ]
            }
        ]
    }
],
    {
        basename: "/ui"
    });

export default router;