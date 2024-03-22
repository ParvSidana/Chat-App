import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    }

    return (
        <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
            <div className='w-full p-6 shadow-md rounded-md bg-clip-padding bg-gray-200  '>
                <h1 className='text-3xl font-semibold text-center text-black'>
                    Login
                    <span className=''> FriendFusion</span>

                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>

                        </label>
                        <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>

                        </label>
                        <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>


                    <div>
                        <button className='btn btn-block btn-sm mt-4 border border-slate-700'
                            disabled={loading}
                        >
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}</button>
                    </div>


                    <p className='text-base inline-block mt-4 ml-16'>Have an account?&nbsp;
                        <span className='hover:underline text-blue-700 font-medium' ><Link to="/signup" >Sign up </Link>
                        </span>
                    </p>

                </form>

            </div>

        </div>
    )
}

export default Login;
