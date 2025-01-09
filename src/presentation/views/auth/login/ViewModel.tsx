import {useState} from 'react';

const LoginViewModel = () => {
  const [error, setError] = useState('');

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onChange = (prop: string, value: any) => {
    setValues({...values, [prop]: value});
  };

  const login = () => {
    if (!isValidForm()) {
      console.log('El formulario es valido');

      console.log('Email', values.email);
      console.log('Password', values.password);
    }
  };

  const isValidForm = (): boolean => {
    let reg = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;

    if (values.email === '') {
      setError('El email no puede estar vacio');
      return false;
    }
    if (values.password === '') {
      setError('la contraseña no puede estar vacia');
      return false;
    }
    if (values.password.length < 6) {
      setError('la contraseña debe tener al menos 6 caracteres');
      return false;
    }
    if (reg.test(values.email) === false) {
      setError('El email no es valido');
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
