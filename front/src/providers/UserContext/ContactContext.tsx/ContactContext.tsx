import React, { createContext, useState } from "react";
import { TEditContactFormSchema } from "../../../schemas/AddContactFormSchema";
import { api } from "../../../services/Api";
import { useUserContext } from "../../../hooks/useUserContext";
import { IContact, IContactContextRenewed, IContactFormData, ITodoProviderProperties } from "./@types";

export const ContactContext = createContext({} as IContactContextRenewed);

export const ContactProvider = ({ children }: ITodoProviderProperties) => {

    const [contactList, setContactList] = React.useState<IContact[]>([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [ editingContact, setEditingContact] = useState<IContact | null>(null);
    const { user } = useUserContext()
    
    const addContact = async (formData: IContactFormData) => {
            try {
                const response = await api.post(`contact/`, formData);
                const newContact = response.data
                setContactList((contactList) => [...contactList, newContact])   
            } catch (error) {
                console.log('Algo deu errado ao criar o seu contato.')
        }
    };

    const editContact = async (formData: TEditContactFormSchema, contactId: number) => {

      try {
          const response = await api.patch(`contact/${contactId}`, formData);
  
          if (response.status === 200) {
              setContactList((contactList) => {
                  return contactList.map(contact => 
                      contactId === contact.id ? { ...contact, ...formData } : contact
                  );
              });
          }
      } catch (error) {
        console.log('Erro ao editar contato')
  };
}
    
    return (
        <ContactContext.Provider
          value={{
            contactList,
            addContact,
            editContact,
            editingContact,        
            setEditingContact,
            isOpenModal,
            setIsOpenModal,
            setContactList,
            user,
          }}
        >
          {children}
        </ContactContext.Provider>
      );
}

