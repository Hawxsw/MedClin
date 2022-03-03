import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { name, Type, occupation, email, password, cpf, rg, birthday } =
    request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    name,
    Type,
    occupation,
    email,
    password,
    cpf,
    rg,
    birthday,
  });

  return response.json({ user, token });
});

export default sessionsRouter;
