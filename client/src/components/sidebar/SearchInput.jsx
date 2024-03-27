import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {

    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3)
            return toast.error("Search for atleast 3 characters.");

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        }
        else
            return toast.error("No such User found.");

    }
    return (
        <form onSubmit={handleSubmit} className='flex items-center gap-2'>
            <input type="text" placeholder='Search Here...' className='input input-bordered rounded-full text-black'
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
            <button className='btn btn-circle hover:bg-green-600 text-white bg-slate-900' type='submit'>
                <BsSearch className='w-6 h-6 outline-none' />
            </button>

        </form>
    )
}

export default SearchInput
