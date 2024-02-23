import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-food-server-raisul227.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;