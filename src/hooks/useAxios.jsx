import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from './useAuth';

const secureAxios = axios.create({
    baseURL: 'https://bistro-food-server-raisul227.vercel.app'
})
const useAxios = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();
    secureAxios.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, (err) => {
        return Promise.reject(err);
    })

    //handle intercepts 401 and 403

    secureAxios.interceptors.response.use((response) => {
        return response;
    }, async (err) => {
        const status = err.response.status;
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/authentication/login');
        }
        return Promise.reject(err)
    })

    return secureAxios;
};

export default useAxios;