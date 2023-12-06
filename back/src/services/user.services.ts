import { compareSync } from "bcryptjs";
import { UserCreate } from "../interfaces/user.interfaces";
import { userRepo } from "../repositories";
import User from "../entities/User.entity";

export const userCreation = async (payload: UserCreate) => {
  const { email } = payload; 
  const searchUser = await userRepo.findOne({ where: { email } });
  if (searchUser) {
    throw new Error('Este e-mail está em utilização.');
  }
  const user: User = userRepo.create({ ...payload });
  await userRepo.save(user);
  console.log(user)
  return user;
};

export const userAuthentication = async (email: string, password: string) => {
  const repository = await userRepo.findOne({ where: { email } });
  if (repository && compareSync(password, repository.password)) {
    const passWithoutUser = {
      id: repository.id,
      name: repository.name,
      email: repository.email,
      contactNumber: repository.contactNumber,
      createdAt: repository.createdAt,
    };
    return passWithoutUser; 
  }

  return null; 
};

export const userRead = async () => {
    return await userRepo.find()
};

export const userDestroy = async (user: User) => {
    await userRepo.softRemove(user)
};

