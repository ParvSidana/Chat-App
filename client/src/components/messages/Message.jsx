import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({ message }) => {
    const { authUser, setAuthUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    // console.log("Authuser:", authUser);
    console.log(selectedConversation);

    const fromMe = message.senderId === authUser._id;
    const chatClass = fromMe ? "chat-end" : "chat-start";

    const profileClass = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bgColor = fromMe ? "bg-blue-500" : "";

    const formattedTime = extractTime(message.createdAt);

    const shakeClass = message.shake ? "shake" : "";



    return (
        <div className={`chat ${chatClass}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={profileClass} alt="chat bubble" />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bgColor} ${shakeClass}`}>{message.message}</div>
            <div className='chat-footer opacity-90 text-xs flex gap-1 items-center '>{formattedTime}</div>
        </div>
    )
}

export default Message