import React, { useState } from 'react'
import { GrSend } from "react-icons/gr";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {

    const { loading, sendMessage } = useSendMessage();
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");

    }

    return (
        <form className='px-4 my-3' action="" onSubmit={handleSubmit}>
            <div className='w-full relative'>
                <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' placeholder='Type Message...'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} />

                {/* HANDLE NEW LINE TO INPUT  */}
                <button type='submit' className='absolute text-white inset-y-4 end-0 flex items-center pe-3' disabled={loading}>
                    <GrSend />
                </button>
            </div>
        </form>
    )
}

export default MessageInput
