import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useState} from 'react';

const RegisterViewModel = ({RegisterUseCase}) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FirebaseAuthTypes.UserCredential>();
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const register = async () => {
    if (isValidForm()) {
      setLoading(true); // Mensaje de espera
      const {result, error} = await RegisterUseCase.run(values);
      setResult(result);
      setError(error);
      setLoading(false);
    }
  };

  const onChange = (prop: string, value: any) => {
    setValues({...values, [prop]: value});
  };

  const isValidForm = (): boolean => {
    let reg = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;

    if (values.username === '') {
      setError('El usuario no puede estar vacio');
      return false;
    }
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
    if (values.password !== values.confirmPassword) {
      setError('las contraseñas no coinciden');
      return false;
    }
    return true;
  };

  return {
    ...values,
    result,
    error,
    loading,
    setError,
    onChange,
    register,
  };
};

export default RegisterViewModel;
