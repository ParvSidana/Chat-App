import React from 'react'
import Gender from './Gender'

const Signup = () => {
    return (
        <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
            <div className='w-full p-6 shadow-md rounded-md bg-clip-padding bg-gray-200'>
                <h1 className='text-3xl font-semibold text-center text-black'>
                    Sign Up
                    <span className=''> FriendFusion</span>
                </h1>

                <form action="">
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" placeholder='Full Name' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>User Name</span>
                        </label>
                        <input type="text" placeholder='User Name' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" placeholder='Password' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
                    </div>

                    {/* GENDER CHECKBOX */}
                    <Gender />

                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
                    </div>

                    <p className='text-base inline-block mt-4 ml-20'>Have an account?&nbsp;
                        <span className='hover:underline text-blue-700 font-medium' ><a href="#" >Log In </a>
                        </span>
                    </p>


                </form>

            </div>

        </div>
    )
}

export default Signup
