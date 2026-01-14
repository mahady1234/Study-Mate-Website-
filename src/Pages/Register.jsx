import React, { use, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const { createUser, setUser, updateUser, handleSignInWithGoogle } = use(AuthContext)
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        setError("");

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!/(?=.*[0-9])/.test(password)) {
            setError("Password must contain at least one number.");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter.");
            return;
        }

        createUser(email, password).then(result => {
            const loggedUser = result.user
            toast.success('Registration Successful')

            updateUser({ displayName: name, photoURL: photo, userEmail: email }).then(() => {
                setUser({ ...loggedUser, displayName: name, photoURL: photo, userEmail: email })
                navigate('/')
            }).catch(error => {
                toast.error(error.message)
                setUser(loggedUser)
            })

        })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleGoogleSignIn = (e) => {
        e.preventDefault()
        handleSignInWithGoogle().then(() => {
            navigate(`${location?.state ? location.state : '/'}`)

        })
            .catch(error => {
                toast.error(error.message)
            })

    }

    return (
        <div>
            <div className='min-h-screen flex justify-center items-center mx-auto pb-15 mt-30'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-3">
                    <h3 className='font-semibold text-2xl text-center'>Register Your Account</h3>
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Your Name</label>
                                <input required name='name' type="text" className="input" placeholder="Enter your name" />
                                <label className="label">Photo URL</label>
                                <input required name='photo' type="text" className="input" placeholder="PhotoURL" />
                                <label className="label">Email</label>
                                <input required name='email' type="email" className="input" placeholder="Enter Your Email" />
                                <label className="label">Password</label>

                                <div className="relative w-full">
                                    <input
                                        required
                                        name='password'
                                        type={showPassword ? "text" : "password"}
                                        className="input input-bordered w-full pr-10"
                                        placeholder="Password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                                    </button>
                                </div>


                                {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

                                <div className='flex justify-start items-center gap-3 mt-2'>
                                    <input type="checkbox" defaultChecked className="checkbox" />
                                    <h3>Accept Term & Conditions</h3>
                                </div>
                                <button type='submit' className="btn btn-neutral mt-4">Register</button>

                                <div className=' grid grid-cols-3  items-center w-3/12 mx-auto mt-3'>
                                    <p className='border-2 border-gray-500'></p>
                                    <h3 className='text-[16px] text-black '>Or</h3>
                                    <p className='border-2 border-gray-500'></p>
                                </div>

                                <button onClick={handleGoogleSignIn} className="btn my-3 btn-outline btn-primary w-full">
                                    <span><FaGoogle size={24} /></span> Login with Google
                                </button>
                            </fieldset>
                        </form>
                    </div>
                    <h3 className='text-center'>Already Have An Account ? <Link className='text-red-500 font-semibold' to='/authRoot/login'>Login</Link></h3>
                </div>
            </div>
            <ToastContainer />
        </div>
    );

};


export default Register;