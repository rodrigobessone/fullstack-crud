import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema, TLoginSchema } from "../../schemas/loginSchema"
import { Input } from "../Input/Input"
import { api } from "../../services/Api"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext/UserContext"
import { useNavigate } from 'react-router-dom'
import { StyledContainerLogin } from "./StyledContainerLogin"
import { StyledLoginForm } from "./StyledLoginForm"
import { StyledLoginBox } from "./StyledLoginBox"
import { StyledSubmitButton } from "../Buttons/StyledSubmitButton"
import { IUserAuthenticationResponse } from "../../providers/UserContext/@types"

export const UserAuthenticationForm = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm<TLoginSchema>({
        resolver:zodResolver(LoginSchema),
    })
 
    const { setUser } = useContext(UserContext)

    const navigate = useNavigate()

    const handleUserLogin = async (data: TLoginSchema) => {
        const newData = {
            email: data.email,
            password: data.password,
        }
        try{
            const { data } = await api.post<IUserAuthenticationResponse>('users/login', newData)
            localStorage.setItem('user', JSON.stringify(data.user))
            localStorage.setItem('@TOKEN', data.token)
            setUser(data.user)
            navigate(`/contact`)     
        } catch (error) {
            console.log('Usuário ou Senha incorreto')
        }
    }


  return (
    <>
    <StyledContainerLogin>
    <StyledLoginForm>
    <StyledLoginBox>
        <form  className="login-form" onSubmit={handleSubmit(handleUserLogin)}>

            <h1>Login</h1>
            <Input isPhoneNumber={false} type="email"
                          placeholder="E-mail"
                          id="email"
                          error={errors.email}
                          {...register('email')} />
            <Input isPhoneNumber={false} type="password"
                          placeholder="Senha"
                          id="password"
                          error={errors.password}
                          {...register('password')} />
                
            <StyledSubmitButton type="submit" > Entrar </StyledSubmitButton>
        </form>
    </StyledLoginBox>
    </StyledLoginForm>
    </StyledContainerLogin>
    </>
  )
}
