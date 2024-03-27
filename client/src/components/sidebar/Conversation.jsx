import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = (props) => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const { socket, onlineUsers } = useSocketContext();

    const isOnline = onlineUsers.includes(props.conversation._id);

    const isSelected = selectedConversation?._id === props.conversation._id;
    return (
        <>
            <div className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer hover:bg-green-500 ${isSelected ? "bg-green-500" : ""} `}
                onClick={() => setSelectedConversation(props.conversation)}>


                <div className={`avatar ${isOnline ? "online" : ""} `}>
                    <div className='w-12 rounded-full'>
                        <img src={props.conversation.profilePic} alt="user avatar" />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-black'>{props.conversation.fullName}</p>
                        {/* EMOJI */}
                        {/* <span></span> */}
                    </div>
                </div>

            </div >

            {!props.lastIdx && <div className='divider my-0 py-0 h-1' />
            }

        </>
    )
}

export default Conversation
