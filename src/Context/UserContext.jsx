import React, { createContext, useState } from 'react'


export const UserDataContext = createContext()


const UserContext = ({ children }) => {

    
    const [UCON, setUCON] = useState({
        email: '',
        name: '',
        userId: '',
    })

    return (
        <div>
            <UserDataContext.Provider value={{ UCON, setUCON }}>
                {children}
            </UserDataContext.Provider>
        </div>
    )
}

export default UserContext