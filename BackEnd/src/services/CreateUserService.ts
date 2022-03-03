import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';
import User from '../models/User';

interface Request {
  name: string;
  Type: string;
  occupation: string;
  email: string;
  cpf: string;
  rg: string;
  birthday: Date;
  password: string;
}

class CreateUserService {
  // eslint-disable-next-line class-methods-use-this
  public async execute({
    name,
    Type,
    occupation,
    email,
    cpf,
    rg,
    birthday,
    password,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email address already used');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      Type,
      occupation,
      email,
      cpf,
      rg,
      birthday,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
