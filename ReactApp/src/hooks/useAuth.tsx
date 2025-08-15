import { setUser } from "@src/slices/userSlice";
import { useDispatch } from "react-redux";


const useAuth = () => {

    const dispatch = useDispatch();

    // fetch user data;
    // if true set new user;
    // if false set initial user;

    dispatch(setUser({
        name: "Future",
        email: "IamSoulfuller@gmail.com",
        roles: [],
        status: true
    }));

};

export default useAuth;