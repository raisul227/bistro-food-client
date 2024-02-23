// import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    const publicAxios = useAxiosPublic();
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('https://bistro-food-server-raisul227.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //         })
    // }, []);


    const { data: menu = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await publicAxios.get('/menu');
            return res.data;
        }
    })

    return [menu, loading, refetch]

}

export default useMenu;