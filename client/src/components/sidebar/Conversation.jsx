import React from 'react'

const Conversation = () => {
    return (
        <div>
            <div className='flex gap-2 items-center rounded p-2 py-1 cursor-pointer hover:bg-sky-500'>

                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avatar" />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-black'>User 1</p>
                        {/* EMOJI */}
                        {/* <span></span> */}
                    </div>
                </div>

            </div>
            <div className='divider my-0 py-0 h-1' />

        </div>
    )
}

export default Conversation
