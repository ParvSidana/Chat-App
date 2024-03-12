import React from 'react'
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
    return (
        <form className='flex items-center gap-2'>
            <input type="text" placeholder='Search Here' className='input input-bordered rounded-full' />
            <button className='btn btn-circle text-white bg-slate-900' type='submit'>
                <BsSearch className='w-6 h-6 outline-none' />
            </button>

        </form>
    )
}

export default SearchInput
