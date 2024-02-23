import { Link, useLocation, useNavigate } from "react-router-dom";
import signupImg from '../../assets/others/authentication2.png';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from './../../hooks/useAxiosPublic';
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
const Signup = () => {
    const [error, setError] = useState("");
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic()
    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                updateUser({
                    displayName: name
                });
                const userInfo = {
                    name,
                    email
                }
                if (loggedUser) {
                    form.reset();
                    axiosPublic.post('/users', userInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Signup Succesfull",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/', { state: { from: location } })
                            }
                        })
                }


            })
            .catch(err => setError(err.message))
    }


    return (
        <div className="hero min-h-screen bg-authImg">
            <div className="hero-content flex-col md:justify-between lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-1/2">
                    <img src={signupImg} alt="" />
                </div>
                <div className="card  w-full md:w-1/2 ">
                    <form onSubmit={handleSignup} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name='password' className="input input-bordered rounded-none" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <p className='text-red-600'>{error}</p>
                        </div>
                        <div className="form-control mt-4">
                            <input className="btn btn-primary" type="submit" value="Signup" />
                        </div>
                        <div className="form-control text-center">
                            <p>Already Have an Account? <Link className='text-primary' to='/authentication/login'>login</Link> </p>
                        </div>
                    </form>
                    <div className="text-center">
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;