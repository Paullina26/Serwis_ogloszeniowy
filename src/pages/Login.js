import { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Form/Input';
import Submit from 'components/Form/Submit';

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.BackgroundForm};
  width: 30vw;
  height: 40vh;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.Border};
  box-shadow: 0px 2px 12px ${({ theme }) => theme.BorderShadow};
`;

export const FormTittle = styled.div`
  margin: 10px;
  p {
    font-size: 30px;
    font-weight: bold;
  }
`;

const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  console.log(mail);
  console.log(password);

  return (
    <Container>
      <FormTittle>
        <p>Logowanie</p>
      </FormTittle>

      <form>
        <Input
          label='E-mail:'
          id='e-mail'
          type='text'
          value={mail}
          onChange={e => setMail(e.target.value)}
          autoComplete='email'
        />
        <Input
          label='Hasło:'
          id='password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete='current-password'
        />
        <Submit id='Login' type='submit' value='Zaloguj' />
      </form>
      <div>
        <button>Rejestracja</button>
      </div>
    </Container>
  );
};

export default Login;
