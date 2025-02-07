import {useEffect, useState, useCallback} from 'react';

const HomeViewModel = ({LogoutUseCase, GetUserUseCase}) => {
  const [user, setUser] = useState(null);
  const [result, setResult] = useState(false);

  // ✅ Uso de useCallback para evitar advertencias de React
  const fetchUser = useCallback(async () => {
    const {result, error} = await GetUserUseCase.run();

    if (result) {
      setUser(result);
    } else {
      console.error('Error obteniendo usuario:', error);
    }
  }, [GetUserUseCase]);

  // ✅ Llamamos fetchUser solo cuando se monta el componente
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const logout = async () => {
    const {result} = await LogoutUseCase.run();
    setResult(result);
  };

  return {user, result, logout};
};

export default HomeViewModel;
