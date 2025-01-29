import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import { LoginUseCase } from '../../../../domain/useaCases/auth/LoginUseCase';

const LoginViewModel = ({LoginUseCase}:{LoginUseCase:LoginUseCase}) => {
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onChange = (prop: string, value: string) => {
    setValues({...values, [prop]: value});
  };

  const login = async () => {
    if (isValidForm()) {
      const data = await LoginUseCase.execute(values.email, values.password);
      console.log('Data', data);
    }
  };

  const isValidForm = (): boolean => {
    let reg = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;
    if (values.email === '') {
      setError('El email no puede estar vacío');
      return false;
    }
    if (values.password === '') {
      setError('La contraseña no puede estar vacía');
      return false;
    }
    if (values.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return false;
    }
    if (!reg.test(values.email)) {
      setError('El email no es válido');
      return false;
    }
    return true;
  };

  return {
    ...values,
    onChange,
    login,
    error,
    setError,
  };
};

export default LoginViewModel;
