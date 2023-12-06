import { createContext, useState } from "react";
import { IUser, IUserContextProviderRenewed, IUserContextRenewed, IUserRegistrationResponse } from "./@types";
import { useNavigate } from 'react-router-dom'
import { TRegisterUserSchema } from "../../schemas/registerFormSchema";
import { api } from "../../services/Api";

export const UserContext = createContext({} as IUserContextRenewed)

export const UserContextProvider = ({ children }: IUserContextProviderRenewed) => {

    
    const [ user, setUser ] = useState<IUser | null> (null)
    const [ globalLoading, setGlobalLoading ] = useState(false)
    const navigate = useNavigate()
    

    const UserRegister = async (data: TRegisterUserSchema) => {

        const newData = {
            name: data.name,
            email: data.email,
            password: data.password,
            contactNumber: data.contactNumber,
        }

        try{
            await api.post<IUserRegistrationResponse>('/users', newData)
            console.log('Usuário cadastrado com sucesso')
            navigate('/login')
        } catch (error) {
            console.log('Ops! Algo deu errado')
        }
    }

    return(
        <UserContext.Provider value={{
            user, 
            globalLoading,
            setGlobalLoading,
            UserRegister,
            setUser,
        }}>
            { children }
        </UserContext.Provider>
    )
}