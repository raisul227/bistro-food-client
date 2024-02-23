import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";


const PaymentHistory = () => {
    const { user } = useAuth();
    const secureAxios = useAxios();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await secureAxios.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div className="mx-5">
            <h1 className="text-3xl">Total Payments: {payments.length}</h1>
            <div className="overflow-x-auto my-4">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] uppercase text-white">
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.email}</td>
                                <td>{payment.price}</td>
                                <td>{payment.transactionId}</td>
                                <td className="uppercase">{payment.status}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default PaymentHistory;