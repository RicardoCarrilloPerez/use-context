import { createContext, useState } from "react";
import { IUser } from "../../interfaces/IUser";
import { PropsContext } from "../../interfaces/PropsContext";
import { User } from "../../interfaces/User";
const props : PropsContext = {
    user : new User(0,'',''),
    updateUser : function (user: IUser) {
        return;
    }
}
export const UserContext = createContext<PropsContext>(props);
    export function UserProvider({ children }: any) {
        const [user, setUser] = useState(new User(0,'',''));
            const updateUser = (user: IUser) => {
                setUser(user);
            };
        return (
            <UserContext.Provider value = { { user, updateUser } }>
                {children}
            </UserContext.Provider>
        )
    }