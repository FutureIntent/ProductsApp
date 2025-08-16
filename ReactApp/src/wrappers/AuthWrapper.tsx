import useGuard from "@src/hooks/useGuard";
import { Outlet } from "react-router";


const AuthWrapper = () => {

    const isLoading = useGuard(null, "/");


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

export default AuthWrapper;