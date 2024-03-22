import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast';

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { authUser, setAuthUser } = useAuthContext();


    const login = async (username, password) => {

        const success = handleInputErrors({ username, password });
        if (!success) return;


        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            const data = await res.json();
            if (data.err) {
                throw new Error(data.err);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));

            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    }
    return { loading, login };
}

function handleInputErrors({
    username,
    password
}) {
    if (!username || !password) {
        // console.log("error no field");
        toast.error("Please fill in all the fields");
        return false;
    }

    return true;
}

export default useLogin