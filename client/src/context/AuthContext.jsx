import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// CUSTOM HOOK TO USE AuthContext
export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {

    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

    return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
}
