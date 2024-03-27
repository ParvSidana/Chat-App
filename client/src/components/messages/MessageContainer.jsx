import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { BiSolidMessageEdit } from "react-icons/bi";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl  font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 🤗 {authUser.fullName}</p>
                <p>Select a chat to  start messaging</p>
                <BiSolidMessageEdit className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    // console.log(selectedConversation);

    useEffect(() => {
        // cleanup function (when component gets unmount )
        return () => {
            setSelectedConversation(null)
            // console.log("changed")
        };
    }, [setSelectedConversation])

    const noChatSelected = !selectedConversation;
    return (
        <div className='sm:w-[450px] lg:w-[650px] flex flex-col '>
            {noChatSelected ? <NoChatSelected /> : (<>
                <div className='px-5 py-2 mb-2 bg-slate-500 flex items-center'>

                    <div className='w-9 rounded-full'>
                        <img src={selectedConversation?.profilePic} alt="chat bubble" />
                    </div>


                    <span className='ml-2 mb-1 font-bold text-xl text-amber-300'>{selectedConversation.fullName}</span>
                </div>

                <Messages />
                <MessageInput />
            </>)
            }

        </div>
    )
}

export default MessageContainer
