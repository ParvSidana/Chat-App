import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
            <div className='w-full p-6 shadow-md rounded-md bg-clip-padding bg-gray-200  '>
                <h1 className='text-3xl font-semibold text-center text-black'>
                    Login
                    <span className=''> FriendFusion</span>

                </h1>

                <form action="">
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>

                        </label>
                        <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>

                        </label>
                        <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <button className='btn btn-block btn-sm mt-4 border border-slate-700'>Login</button>
                    </div>
                    <p className='text-base inline-block mt-4 ml-16'>Have an account?&nbsp;
                        <span className='hover:underline text-blue-700 font-medium' ><a href="#" >Sign up </a>
                        </span>
                    </p>

                </form>

            </div>

        </div>
    )
}

export default Login;
