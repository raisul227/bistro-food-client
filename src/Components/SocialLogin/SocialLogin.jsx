import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignup } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const usePublicAxios = useAxiosPublic();
    const handlegoogleSignup = () => {
        googleSignup()
            .then(result => {
                const loggedUser = result.user;
                const userInfo = {
                    name: loggedUser?.displayName,
                    email: loggedUser?.email
                }
                usePublicAxios.post('/users', userInfo)
                    .then(res => {
                        if (res.data) {
                            navigate('/', { state: { from: location } })
                        }
                    })
            })
    }
    return (
        <div className="my-2">
            <h4 className="text-lg font-semibold font-Inter">Or Sign In with</h4>
            <div className="my-3">
                <button onClick={handlegoogleSignup} className="btn btn-circle btn-outline btn-sm text-lg">
                    <FaGoogle />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;