import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import Logout from './Logout'

const Sidebar = () => {
    return (
        <div className='border-r flex flex-col border-slate-600 p-4 '>
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations />
            <Logout />
        </div>
    )
}

export default Sidebar
