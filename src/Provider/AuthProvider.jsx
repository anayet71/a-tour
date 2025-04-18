import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser]  = useState({
        name: 'anayet',
        email : 'ariyan@gmal.com'
    })
    const authInfo ={
        user,
        setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;