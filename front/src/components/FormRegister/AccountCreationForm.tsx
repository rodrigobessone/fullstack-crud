import { zodResolver } from "@hookform/resolvers/zod/src/zod.js"
import { SubmitHandler, useForm} from "react-hook-form"
import { RegisterSchema, TRegisterUserSchema } from "../../schemas/registerFormSchema"
import { useUserContext } from '../../hooks/useUserContext'
import { Input } from "../Input/Input"
import { StyledRegistrationContainer } from "./StyledRegistrationContainer"
import { StyledAccountCreationForm } from "./StyledAccountCreationForm"
import { StyledRegistrationBackground } from "./StyledRegistrationBackground"
import { StyledSubmitButton } from "../Buttons/StyledSubmitButton"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AccountCreationForm = () => {

  const { UserRegister } = useUserContext()
  const [toastStatus, setToastStatus] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, } = useForm<TRegisterUserSchema>({
    resolver:zodResolver(RegisterSchema),
})

  const submit: SubmitHandler<TRegisterUserSchema> = async (data: TRegisterUserSchema) => {
    await UserRegister(data)
    }
    

    useEffect(() => {
      if (toastStatus) {
        const timeout = setTimeout(() => {
          setToastStatus(false);
          navigate("/login");
        }, 1800);
        return () => clearTimeout(timeout);
      }
    }, [toastStatus]);
    
  return (
    <>
    <StyledRegistrationContainer>
    <StyledAccountCreationForm  onSubmit={handleSubmit(submit)}>
      <StyledRegistrationBackground>
      <div>
      <h1>Cadastre-se</h1>
      </div>
      
      <Input isPhoneNumber={false} type="text"
            placeholder="Nome Completo"
            id="name"
            error={errors.name}
            {...register('name')} />
      
      <Input isPhoneNumber={false} type="email"
            placeholder="E-mail"
            id="email"
            error={errors.email}
            {...register('email')} />

      <Input isPhoneNumber={false} type="password"
            placeholder="Digite aqui sua senha"
            id="password"
            error={errors.password}
            {...register('password')} />
             

      <Input
              isPhoneNumber={false} type="password"
              placeholder="Confirmar senha"
              id="passwordConfirm"
              error={errors.confirm}
              {...register('confirm')} />
          

      <Input isPhoneNumber={true} type="text"
            placeholder="Digite seu telefone"
            id="phoneNumber"
            error={errors.contactNumber}
            {...register('contactNumber')} />
             
      <StyledSubmitButton type="submit"> Cadastrar </StyledSubmitButton>
      </StyledRegistrationBackground>
    </StyledAccountCreationForm>
    </StyledRegistrationContainer>
    </>
  )
}

