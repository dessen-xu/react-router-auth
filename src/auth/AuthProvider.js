import React, { useState } from "react";
import fakeAuthProvider from "./auth";

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const singIn = (newUser, callback) => {
        return fakeAuthProvider.singIn(() => {
            setUser(newUser)
            callback()
        })
    }

    const singOut = (callback) => {
        return fakeAuthProvider.singIn(() => {
            setUser(null)
            callback()
        })
    }

    return <AuthContext.Provider value={{user, singIn, singOut}}>{children}</AuthContext.Provider>
}

const useAuth = () => {
    return React.useContext(AuthContext)
}

export { useAuth }

export default AuthProvider