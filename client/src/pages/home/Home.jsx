import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
    return (
        <div className='bk flex lg:w-[950px] rounded-lg overflow-hidden  shadow-md bg-clip-padding bg-slate-300 '>
            <Sidebar />
            <MessageContainer />

        </div>
    )
}

export default Home
