import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from './useAuth';


const useCart = () => {
    const secureAxios = useAxios();
    const { user } = useAuth();
    const { refetch, data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await secureAxios.get(`/orders?email=${user.email}`);
            return res.data;
        }
    })
    return [orders, refetch]
};

export default useCart;