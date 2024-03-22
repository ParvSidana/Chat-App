import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useGetConversations = () => {

    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    // THIS USEEFFECT WILL RUN ON FIRST RENDER ONLY DUE TO EMPTY ARRAY DEPENDENCY [].
    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/users");

                // GET ALL USERS(array) FROM DATABASE 
                const data = await res.json();
                if (data.err) {
                    throw new Error(data.err);
                }

                setConversations(data);
                // console.log(data);

            } catch (error) {
                toast.error(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        getConversations();
    }, [])

    return { loading, conversations }

}

export default useGetConversations
