// import React, { useState, FormEvent } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { LoginError } from './types/loginForm';
// import { User } from '../UserData/types/userData';
// import { LoginFormWrapper, Heading, Input, Button, ErrorMessage, Spinner } from './styles';
// import { useUser } from '../../context/UserContext'; // Импортируйте useUser

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<LoginError | null>(null);
//   const navigate = useNavigate();
//   const { setUser } = useUser(); // Получите setUser из контекста

//   const handleLogin = async (event: FormEvent) => {
//     event.preventDefault();
//     setError(null);

//     if (!email || email.length < 12 || email.length > 40) {
//       setError({ message: 'Email должен быть от 12 до 40 символов.' });
//       return;
//     }

//     if (!password) {
//       setError({ message: 'Пароль обязателен для заполнения.' });
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch('https://randomuser.me/api/');
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       const user: User = data.results[0];
//       setLoading(false);
//       setUser(user); // Обновите состояние пользователя в контексте
//       navigate('/user-data');
//     } catch (e: any) {
//       setLoading(false);
//       setError({ message: `Ошибка при получении данных: ${e.message}` });
//     }
//   };

//   return (
//     <LoginFormWrapper>
//       <Heading>Login Form</Heading>
//       <form onSubmit={handleLogin}>
//         <Input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         {error?.message.includes('Email') && <ErrorMessage>{error.message}</ErrorMessage>}
//         <Input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         {error?.message.includes('Пароль') && <ErrorMessage>{error.message}</ErrorMessage>}
//         <Button type="submit" disabled={loading}>
//           {loading ? <Spinner>Loading...</Spinner> : 'Login'}
//         </Button>
//         {error && !error.message.includes('Email') && !error.message.includes('Пароль') && (
//           <ErrorMessage>{error.message}</ErrorMessage>
//         )}
//       </form>
//     </LoginFormWrapper>
//   );
// }

// export default LoginForm;

import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  LoginFormWrapper,
  LoginFormHeading,
  LoginFormLabel,
  LoginFormInput,
  LoginFormButton,
  LoginErrorMessage,
  LoginFormSpinner,
} from './styles'; // Import styles

import { LoginError } from './types'; // Import type
import { useUser } from '../../context/UserContext';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<LoginError | null>(null);
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!email || email.length < 12 || email.length > 40) {
      setError({ message: 'Email должен быть от 12 до 40 символов.' });
      return;
    }

    if (!password) {
      setError({ message: 'Пароль обязателен для заполнения.' });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://randomuser.me/api/');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const user = data.results[0];
      setUser(user);
      setLoading(false);
      navigate('/user-data');
    } catch (error: any) {
      setError({ message: `Ошибка при получении данных: ${error.message}` });
      setLoading(false);
    }
  };

  return (
    <LoginFormWrapper onSubmit={handleLogin}>
      <LoginFormHeading>Login Form</LoginFormHeading>
      <LoginFormLabel htmlFor="email">Email:</LoginFormLabel>
      <LoginFormInput
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {error?.message.includes('Email') && (
        <LoginErrorMessage>{error.message}</LoginErrorMessage>
      )}
      <LoginFormLabel htmlFor="password">Password:</LoginFormLabel>
      <LoginFormInput
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error?.message.includes('Пароль') && (
        <LoginErrorMessage>{error.message}</LoginErrorMessage>
      )}
      <LoginFormButton type="submit" disabled={loading}>
        {loading ? <LoginFormSpinner>Loading...</LoginFormSpinner> : 'Login'}
      </LoginFormButton>
      {error && !error.message.includes('Email') && !error.message.includes('Пароль') && (
        <LoginErrorMessage>{error.message}</LoginErrorMessage>
      )}
    </LoginFormWrapper>
  );
};