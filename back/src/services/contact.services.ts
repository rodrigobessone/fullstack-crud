import Contact from "../entities/Contact.entity";
import User from "../entities/User.entity";
import {  contactCreate } from "../interfaces/contact.interfaces";
import { contactRepo } from "../repositories";
import { contactCreateSchema, contactUpdateSchema } from "../schemas/contact.schema";


export const createServices = async (payload: contactCreate, user: User) => {

    const contact: Contact = contactRepo.create({
        ...payload,
        user
    })
    await contactRepo.save(contact)
    return contactCreateSchema.parse(contact)
};

export const readServices = async (userId: number) => {
  const contacts = await contactRepo.find({
    where: {
    user: { id: userId }
  }, relations: ['user']})
  return contacts
};

export const readContactServices =  async function contactRead(contactId: number): Promise<Contact | null> {
    const contact = await contactRepo.findOne({
      where: {
        id: contactId
      }
    });
    return contact || null
} 

export const updateServices = async (
  contactId: number,
  name?: string,
  email?: string,
  contactNumber?: string,
) => {
  const repository = await contactRepo.findOne({ where: { id: contactId } });
  
  if (!repository) {
    return null; 
  }
  if (name !== undefined) {
    repository .name = name;
  }
  if (email !== undefined) {
    repository .email = email;
  }
  if (contactNumber !== undefined) {
    repository .contactNumber = contactNumber;
  }
  await contactRepo.save(repository );
  return contactUpdateSchema.parse(repository);
};

export const destroyServices = async (contactId: number) => {
  const removeContact = await contactRepo.findOne({
    where: {
      id: contactId
    }
  });

  if (!removeContact) {
    throw new Error(`Contato com id ${contactId} não encontrado.`);
  }

  await contactRepo.remove(removeContact);
};