import React, { useState } from 'react'
import Gender from './Gender'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js'


const Signup = () => {

    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: '',
        confirmPassword: "",
        gender: ""
    })

    // CUSTOM HOOK
    const { loading, signup } = useSignup();

    const handleCheckbox = (gender) => {
        setInputs({
            ...inputs, gender
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(inputs)
        await signup(inputs);
    }

    return (
        <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
            <div className='w-full p-6 shadow-md rounded-md bg-clip-padding bg-gray-200'>
                <h1 className='text-3xl font-semibold text-center text-black'>
                    Sign Up
                    <span className=''> FriendFusion</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Full Name'
                            className='w-full input input-bordered h-10'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>User Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder='User Name'
                            className='w-full input input-bordered h-10'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                    </div>

                    {/* GENDER CHECKBOX */}

                    <Gender selectedgender={inputs.gender} onCheckboxChange={handleCheckbox} />

                    {/* SIGNUP FORM */}

                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}
                        >
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>

                    <p className='text-base inline-block mt-4 ml-20'>Have an account?&nbsp;
                        <span className='hover:underline text-blue-700 font-medium' >
                            <Link to="/login" >Log In </Link>
                        </span>
                    </p>


                </form>

            </div>

        </div>
    )
}

export default Signup
