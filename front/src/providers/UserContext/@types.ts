import { ReactNode } from 'react'
import { TRegisterUserSchema } from '../../schemas/registerFormSchema'

export interface IUserContextProviderRenewed {
  children: ReactNode
}

export interface IUser {
  email: string
  name: string
  id: number
}

export interface IUserContextRenewed {
  user: IUser | null
  globalLoading: boolean
  setGlobalLoading: (state: boolean) => void
  UserRegister: (data: TRegisterUserSchema) => Promise<void>
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
}

export interface IUserRegistrationResponse {
  accessToken: string
  user: IUser
}

export interface IUserRetrievalResponse {
  email: string
  password: string
  name: string
  id: number
}

export interface IUserAuthenticationResponse {
  token: string
  user: IUser
  id: number
}

