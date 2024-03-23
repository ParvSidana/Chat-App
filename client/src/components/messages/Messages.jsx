import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeleton/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
    const { loading, messages } = useGetMessages();
    // console.log(messages);

    // SOCKET IO FUNCTIONALITY HOOK
    useListenMessages();


    const lastMessref = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessref.current?.scrollIntoView({ behaviour: "smooth" })
        }, 100)
    }, [messages])
    return (
        <div className='px-4 flex-1 overflow-auto'>

            {!loading && messages.length > 0 && (
                messages.map((message) => (
                    <div key={message._id} ref={lastMessref}>
                        <Message message={message} />
                    </div>
                ))
            )}

            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

            {!loading && messages.length === 0 && (
                <p className='text-center'>Send a Message to start the Conversation.</p>
            )}

        </div>
    )
}

export default Messages
