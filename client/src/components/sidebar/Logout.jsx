import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

const Logout = () => {

    const { loading, logout } = useLogout();


    return (
        <div className='mt-auto pt-2'>
            {!loading ? <BiLogOut className='w-7 h-7  text-black cursor-pointer hover:bg-red-600 rounded-md '
                onClick={logout} /> :
                <span className='loading loading-spinner'></span>
            }

        </div>
    )
}

export default Logout
