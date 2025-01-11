<<<<<<< HEAD
import { useState } from 'react';

const LoginViewModel = () => {

  const [error, setError] = useState('')
=======
import {useState} from 'react';

const LoginViewModel = () => {
  const [error, setError] = useState('');
>>>>>>> origin/dev

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onChange = (prop: string, value: any) => {
<<<<<<< HEAD
    setValues({ ...values, [prop]: value });
=======
    setValues({...values, [prop]: value});
>>>>>>> origin/dev
  };

  const login = () => {
    if (!isValidForm()) {
      console.log('El formulario es valido');

      console.log('Email', values.email);
      console.log('Password', values.password);
    }
<<<<<<< HEAD

  };

  const isValidForm = (): boolean => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
=======
  };

  const isValidForm = (): boolean => {
    let reg = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;
>>>>>>> origin/dev

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
<<<<<<< HEAD
  }

=======
  };
>>>>>>> origin/dev

  return {
    ...values,
    onChange,
    login,
    error,
<<<<<<< HEAD
    setError
  }
}
=======
    setError,
  };
};
>>>>>>> origin/dev

export default LoginViewModel;
