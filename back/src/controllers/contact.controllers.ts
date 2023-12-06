import { Request, Response } from "express";
import User from "../entities/User.entity";
import { createServices, destroyServices, readContactServices, readServices, updateServices } from "../services/contact.services";

export const create = async (req: Request, res: Response) => {

    const user: User | undefined = res.locals.foundEntity

    if (!user) {
        return res.status(400).json({ error: 'User not found in res.locals.foundEntity' });
    }

    const contact = await createServices(req.body, user)
    return res.status(201).json(contact);
}

export const read = async (req: Request, res: Response) => {
    const id = Number(res.locals.foundEntity.id)
    const contact = await readServices(id)
    return res.status(200).json(contact);
};

export const readContact = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const contact = await readContactServices(id)
    return res.status(200).json(contact);
};

export const update = async (
    req: Request,
    res: Response
  ) => {
    const id = Number(req.params.id)
    const { name, email, contactNumber } = req.body

    const retriever = await updateServices(
        id,
        name,
        email,
        contactNumber
    )

    if(retriever){
        return res.status(200).json(retriever)
    }else{
        return res.status(404).json({ error: 'Contact not found' })
      }
  };

export const destroy = async (req: Request, res: Response)=> {
    const id = Number(req.params.id)
    await destroyServices(id)
    return res.status(204).json();
};