import Axios from "@src/configs/Axios";
import { initialUser, setUser } from "@src/slices/userSlice";
import { useEffect, useState } from "preact/hooks";
import { useDispatch } from "react-redux";


type RedirectType = string | null | undefined;
type RolesType = string[] | null | undefined;

const useGuard = (redirectUnauthenticated: RedirectType = undefined, redirectAuthenticated: RedirectType = undefined, roles: RolesType = []) => {

    const { VITE_CLIENT_URL } = import.meta.env;
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const dispatch = useDispatch();

    useEffect(() => {
        Axios.get('/csrf-cookie')
            .then(() => Axios.get('/user')
                .then((res) => {
                    console.log(res);
                    const { id, email, name } = res.data;

                    dispatch(setUser({
                        id: id,
                        name: name,
                        email: email,
                        roles: [],
                        status: true
                    }));

                    redirectAuthenticated
                        ? window.location.replace(VITE_CLIENT_URL + redirectAuthenticated)
                        : setIsLoading(false);
                })
                .catch(() => {
                    dispatch(setUser(initialUser));

                    redirectUnauthenticated
                        ? window.location.replace(VITE_CLIENT_URL + redirectUnauthenticated)
                        : setIsLoading(false);
                })
            )
            .catch((err) => console.log(err))
    }, []);


    return isLoading;
}

export default useGuard;