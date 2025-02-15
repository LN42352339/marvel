import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useState} from 'react';

const LoginViewModel = ({LoginUseCase, GetUserUseCase}) => {
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [result, setResult] = useState<FirebaseAuthTypes.UserCredential>();

  const [user, setUser] = useState<FirebaseAuthTypes.User>();

  const getUser = () => {
    const {result, error} = GetUserUseCase.run();
    setUser(result);
    setError(error);
    console.log('Data:', result);
    console.log('Data:', error);
  };

  const onChange = (prop: string, value: string) => {
    setValues({...values, [prop]: value});
  };

  const login = async () => {
    if (isValidForm()) {
      try {
        const {result, error} = await LoginUseCase.run(
          values.email,
          values.password,
        );

        console.log('🎯 Resultado de LoginUseCase en LoginViewModel:', result);
        console.log('🎯 Error de LoginUseCase en LoginViewModel:', error);

        if (error) {
          setError(error);
          return;
        }

        setResult(result);
      } catch (err) {
        console.error('🔥 Error en login:', err);
        setError('Error inesperado en el login');
      }
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
    result,
    user,
    setError,
    getUser,
  };
};

export default LoginViewModel;
