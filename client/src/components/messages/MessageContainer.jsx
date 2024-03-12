import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { BiSolidMessageEdit } from "react-icons/bi";

const NoChatSelected = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl  font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 🤗 Parv Sidana</p>
                <p>Select a chat to  start messaging</p>
                <BiSolidMessageEdit className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}

const MessageContainer = () => {
    const noChatSelected = true;
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {noChatSelected ? <NoChatSelected /> : (<>
                <div className='px-4 py-2 mb-2 bg-slate-600 '>
                    <span className='label-text'>To : </span>
                    <span className='font-bold text-gray-900'>Parv Sidana</span>
                </div>

                <Messages />
                <MessageInput />
            </>)
            }

        </div>
    )
}

export default MessageContainer