import { useContext, useEffect, useState } from 'react';
import loginImg from '../../assets/others/authentication2.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState("");
    const { loginUser } = useContext(AuthContext);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                if (loggedUser) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Login Succesful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                navigate(from, { replace: true })
            })
            .then(err => {
                setError(err.message)
            })
    }
    const handleCaptcha = (e) => {
        const capthcaValue = e.target.value;
        if (validateCaptcha(capthcaValue)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }
    return (
        <div className="hero min-h-screen bg-authImg">
            <div className="hero-content flex-col md:justify-between lg:flex-row">
                <div className="text-center lg:text-left md:w-1/2">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card  w-full md:w-1/2 ">
                    <form onSubmit={handleLogin} className="card-body ">
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
                            <label className="label">
                                <span className="label-text">
                                    <LoadCanvasTemplate />
                                </span>
                            </label>
                            <input type="text" onBlur={handleCaptcha} placeholder="Enter Captcha" name='captcha' className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <p className='text-red-600'>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div className="form-control text-center">
                            <p>New To Bistro? <Link className='text-primary' to='/authentication/signup'>Signup</Link> </p>
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

export default Login;