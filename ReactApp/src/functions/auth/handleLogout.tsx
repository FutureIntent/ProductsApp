import Axios from "@src/configs/Axios";


export const handleLogout = () => {

    const { VITE_CLIENT_URL } = import.meta.env;

    Axios.post("/logout")
        .then(() => window.location.replace(VITE_CLIENT_URL + "/"))
        .catch((err) => console.log(err))
}