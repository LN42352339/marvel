import {useState} from 'react';

const HomeViewModel = ({LogoutUseCase}) => {
  // 📌 Estado para controlar si el usuario está autenticado
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false); // 📌 Estado para manejar carga

  // 📌 Función para cerrar sesión
  const logout = async () => {
    try {
      setLoading(true); // 🔄 Activamos loading antes de cerrar sesión
      const {result: logoutResult, error} = await LogoutUseCase.run(); // 📌 Renombramos `result`

      if (error) {
        console.error('Error en logout:', error); // ⚠️ Mostramos el error en consola
        return;
      }

      setResult(logoutResult); // ✅ Actualizamos el estado solo si no hubo error
    } catch (err) {
      console.error('Excepción en logout:', err);
    } finally {
      setLoading(false); // 🔄 Desactivamos loading después del logout
    }
  };

  return {
    result,
    loading, // ✅ Devolvemos el estado de carga por si queremos usarlo en la UI
    logout,
  };
};

export default HomeViewModel;
