import useGuard from "@src/hooks/useGuard";
import { Outlet } from "react-router";


const AdminWrapper = () => {

    const isLoading = useGuard("/auth");


    return (
        <>
            {
                isLoading
                    ? <div>Loading</div>
                    : <Outlet />
            }
        </>
    );
}

export default AdminWrapper;