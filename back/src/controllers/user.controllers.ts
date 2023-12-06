import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { userAuthentication, userCreation, userDestroy, userRead } from "../services/user.services";


export const login = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    const user = await userAuthentication(email, password);

      if (user) {
        const token = jwt.sign({ userId: user.id, email: user.email }, process.env.SECRET_KEY!, { expiresIn: '1h' });
        return res.status(200).json({ message: "Login successful", user, token });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
} 

export const create = async (req: Request, res: Response) => {
    const user = await userCreation(req.body)
    console.log(user)
    return res.status(201).json(user);
}

export const read = async (req: Request, res: Response) => {
    const user = await userRead();
    return res.status(200).json(user);
}

export const destroy = async (req: Request, res: Response) => {
    await userDestroy(res.locals.foundEntity)
    return res.status(204).json();
}