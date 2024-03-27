import React, { useState } from 'react'
import { GrSend } from "react-icons/gr";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {

    const { loading, sendMessage } = useSendMessage();
    const [message, setMessage] = useState("");

    const adjustTextareaHeight = (event) => {
        const textarea = event.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");

        const textarea = event.target.querySelector("textarea");
        textarea.style.height = 'auto';
        textarea.rows = 1;

    }


    return (
        <form className='px-4 my-3 flex' onSubmit={handleSubmit}>
            <div className='w-full '>
                <textarea
                    className='border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-600 text-white resize-none max-h-20 '
                    placeholder='Type Message...'
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                        adjustTextareaHeight(e);
                    }}
                    rows={1}
                />
            </div>

            {/* HANDLE NEW LINE TO INPUT  */}
            <button type='submit' className=' text-white  flex items-center ml-1 ' disabled={loading}>
                <span className='bg-black p-2 rounded-md mr-0.5'>
                    <GrSend className='w-6 h-6' />
                </span>

            </button>
        </form>
    )
}

export default MessageInput
