import { HTMLAttributes } from "react";
import { TAddNewsFormSchema, TEditContactFormSchema } from "../../../schemas/AddContactFormSchema";
import { IUser } from "../@types";
import { FieldError } from "react-hook-form";


export interface ITodoProviderProperties{
    children: React.ReactNode;
} 

export interface IContact{
    id: number;
    name: string;
    email: string;
    contactNumber: string;
}


export interface IContactFormData{
    name: string;
    email: string;
    contactNumber: string;
}


export interface IContactContextRenewed {
    contactList: IContact[];
    addContact: (formData: TAddNewsFormSchema) => void;
    editContact: (formData: TEditContactFormSchema, contactId: number) => void;
    editingContact: IContact | null;
    setEditingContact: React.Dispatch<React.SetStateAction<IContact | null>>;
    isOpenModal: boolean;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    setContactList: React.Dispatch<React.SetStateAction<IContact[]>>
    user: IUser | null
}

export interface IEditContactFormProperties {
    isOpen: boolean;
    closeModal: () => void;
}

export interface IContactCardProperties{
    contact: IContact 
}

export interface IEditModalProperties {
    isOpen: boolean;
    closeModal: () => void;
    contactId:number | null;
}

export interface IInputProperties extends HTMLAttributes<HTMLInputElement>{
    type: string;
    label?: string;
    error?: FieldError;
    isPhoneNumber: boolean;
}