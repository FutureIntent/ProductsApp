import { useState } from "preact/hooks";


type RedirectType = string | null | undefined;
type RolesType = string[] | null | undefined;

const useGuard = (redirect: RedirectType = undefined, roles: RolesType = []) => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { VITE_CLIENT_URL } = import.meta.env;

    // fetch user;
    // if true set loading to false and reset user
    // if false set redirect to login page


    redirect && window.location.replace(VITE_CLIENT_URL + redirect);

    return isLoading;
}

export default useGuard;