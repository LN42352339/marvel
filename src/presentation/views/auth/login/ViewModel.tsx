import {useState} from 'react';
import auth from '@react-native-firebase/auth';

const LoginViewModel = () => {
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onChange = (prop: string, value: string) => {
    setValues({...values, [prop]: value});
  };

  const login = () => {
    if (isValidForm()) {
      auth()
        .signInWithEmailAndPassword(values.email, values.password)
        .then(() => {
          console.log('Usuario logeado');
          setError('');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            setError('Ese correo ya está en uso.');
          } else if (error.code === 'auth/invalid-email') {
            setError('El correo electrónico es inválido.');
          } else if (error.code === 'auth/wrong-password') {
            setError('La contraseña es incorrecta.');
          } else if (error.code === 'auth/user-not-found') {
            setError('Usuario no encontrado.');
          } else {
            setError('Error inesperado. Por favor, intenta de nuevo.');
          }
          console.error(error);
        });
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
