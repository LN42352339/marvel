import {useState} from 'react';

const LoginViewModel = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onChange = (prop: string, value: any) => {
    setValues({...values, [prop]: value});
  };

  const login = () => {
    console.log('Email', values.email);
    console.log('Password', values.password);
  };

  return {
    ...values,
    onChange,
    login,
  };
};

export default LoginViewModel;
