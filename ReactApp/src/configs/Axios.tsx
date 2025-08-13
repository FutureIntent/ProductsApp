import axios from 'axios';


const { VITE_CLIENT_URL, VITE_API_URL } = import.meta.env;

const Axios = axios.create({
    url: VITE_CLIENT_URL,
    baseURL: VITE_API_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    withCredentials: true,
    responseType: 'json'
});


export default Axios;