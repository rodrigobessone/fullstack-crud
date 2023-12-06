import { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TEditContactFormSchema, editContactFormSchema } from '../../../schemas/AddContactFormSchema';
import { ContactContext } from '../../../providers/UserContext/ContactContext.tsx/ContactContext';
import { Input } from '../../Input/Input';
import { StyledHeaderModal } from '../Modal/StyledHeaderModal';
import { StyledFormModal } from '../Modal/StyledFormModal';
import { StyledEditModal } from './StyledEditModal';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../../../services/Api';
import { StyledModalOpenButton } from '../../Buttons/StyledModalOpenButton';
import { IEditModalProperties } from '../../../providers/UserContext/ContactContext.tsx/@types';


export const UpdateModal: React.FC<IEditModalProperties> = ({ isOpen, closeModal, contactId}) => {


  const { editContact, editingContact } = useContext(ContactContext);
  if (!isOpen) {
    return null; 
  }

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TEditContactFormSchema>({
    resolver: zodResolver(editContactFormSchema),
    defaultValues: {
      ...editingContact
    },
  });

  const formattedId = typeof contactId === 'string' ? Number(contactId) : contactId;

  const submit: SubmitHandler<TEditContactFormSchema> = async (formData: TEditContactFormSchema) => {
    
    if (formattedId !== null) {
      editContact(formData, formattedId);
      closeModal();
    }
  };
  
  useEffect(() => {

    const data = async () => {
      try {
        if(formattedId !== null) {
          const response = await api.get(`/contact/${formattedId}`);
          const data = response.data;
          reset( data )
        }
    } catch (error) {
      console.log('Erro ao buscar dados do contato')
  };
}
  data();
}, [formattedId]);

  return (
    <>
      {isOpen && (
        <StyledEditModal>
          <StyledHeaderModal>
            <h2>Editar Contato</h2>
            <p onClick={closeModal}>X</p>
          </StyledHeaderModal>
          <StyledFormModal>
            <Input isPhoneNumber={false} type="text" label="Nome Completo:" placeholder="Digite seu nome completo" {...register('name')} error={errors.name} className="custom-input"/>
            <Input defaultValue={editingContact?.email} isPhoneNumber={false} type="email" label="E-mail:" placeholder="Digite seu email aqui" {...register('email')} error={errors.email} className="custom-input"/>
            <Input isPhoneNumber={true} type="text" label="Telefone:" placeholder="Digite seu telefone aqui" {...register('contactNumber')} error={errors.contactNumber} className="custom-input"/>
            <StyledModalOpenButton onClick={handleSubmit(submit)}>Atualizar Contato</StyledModalOpenButton>
          </StyledFormModal>
        </StyledEditModal>
      )}
    </>
  );
};
