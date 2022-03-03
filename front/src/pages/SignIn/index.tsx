import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Background, Container, Content } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <form>
        <h1>Faça seu logon</h1>

        <input placeholder="email" />

        <input placeholder="Senha" type="password" />

        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="">
        <FiLogIn />
        Criar conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
