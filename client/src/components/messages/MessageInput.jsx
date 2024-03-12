import React from 'react'
import { GrSend } from "react-icons/gr";

const MessageInput = () => {
    return (
        <form className='px-4 my-3' action="">
            <div className='w-full relative'>
                <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' placeholder='Type Message...' />
                {/* HANDLE NEW LINE TO INPUT  */}
                <button type='submit' className='absolute text-white inset-y-4 end-0 flex items-center pe-3'>
                    <GrSend />
                </button>
            </div>
        </form>
    )
}

export default MessageInput
