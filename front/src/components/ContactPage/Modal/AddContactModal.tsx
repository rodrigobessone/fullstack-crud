import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddContactFormSchema, TAddNewsFormSchema } from '../../../schemas/AddContactFormSchema';
import { ContactContext } from '../../../providers/UserContext/ContactContext.tsx/ContactContext';
import { Input } from '../../Input/Input';
import { StyledModalContainer } from './StyledModalContainer';
import { StyledHeaderModal } from './StyledHeaderModal';
import { StyledFormModal } from './StyledFormModal';
import { StyledModalOpenButton } from '../../Buttons/StyledModalOpenButton';
import { IEditContactFormProperties } from '../../../providers/UserContext/ContactContext.tsx/@types';



export const AddContactModal: React.FC<IEditContactFormProperties> = ({ isOpen, closeModal}) => {

  const { register, handleSubmit, formState: { errors } } = useForm<TAddNewsFormSchema>({
    resolver: zodResolver(AddContactFormSchema),
  });

  const { addContact } = useContext(ContactContext);

  const submit: SubmitHandler<TAddNewsFormSchema> = async (formData: TAddNewsFormSchema) => {
      addContact(formData);
      closeModal();
  }; 
  
  return (
    <>
    {isOpen && (
            <StyledModalContainer>
                <StyledHeaderModal>
                <h2>Cadastre seu contato</h2>
                <p onClick={closeModal}>X</p>
                </StyledHeaderModal>
                <StyledFormModal>
                    <Input isPhoneNumber={false} type="text" label="Nome Completo:" placeholder="Digite seu nome completo" {...register('name')} error={errors.name} className="custom-input"/>
                    <Input isPhoneNumber={false} type="email" label="E-mail:" placeholder="Digite seu email aqui" {...register('email')} error={errors.email} className="custom-input"/>
                    <Input isPhoneNumber={true} type="text" label="Telefone:" placeholder="Digite seu telefone aqui" {...register('contactNumber')} error={errors.contactNumber} className="custom-input"/>
                    <StyledModalOpenButton type="submit" onClick={handleSubmit(submit)}>Cadastrar Contato</StyledModalOpenButton>
                </StyledFormModal>
            </StyledModalContainer>
    )}
    </>
  );
};