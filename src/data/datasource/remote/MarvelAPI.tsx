import axios from 'axios';
import CryptoJS from 'crypto-js';
import Config from 'react-native-config';

// Base URL de la API de Marvel
const BASE_URL = 'https://gateway.marvel.com/v1/public';
const PUBLIC_KEY = Config.MARVEL_PUBLIC_KEY!;
const PRIVATE_KEY = Config.MARVEL_PRIVATE_KEY!;
const GOOGLE_TRANSLATE_API_KEY = Config.GOOGLE_TRANSLATE_API_KEY;

console.log('Clave API:', GOOGLE_TRANSLATE_API_KEY); // Para verificar que se está cargando

// Tipo de datos para un personaje de Marvel
export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

// Función para generar el hash de autenticación
const getHash = (ts: string): string => {
  return CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
};

// Configuración de Axios
const api = axios.create({baseURL: BASE_URL});

// Función para traducir texto con Google Translate API
const translateText = async (text: string): Promise<string> => {
  if (!text || text.trim() === '') return 'Sin descripción disponible';

  try {
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2`,
      null,
      {
        params: {
          q: text,
          target: 'es',
          key: GOOGLE_TRANSLATE_API_KEY,
        },
      },
    );
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error al traducir:', error.response?.data || error.message);
    return text; // Si falla la traducción, devolver el texto original
  }
};

// Función para obtener personajes de Marvel y traducir la descripción
export const fetchCharacters = async (search = ''): Promise<Character[]> => {
  const ts = new Date().getTime().toString();
  const hash = getHash(ts);

  const params = {
    ts,
    apikey: PUBLIC_KEY,
    hash,
    ...(search ? {nameStartsWith: search} : {}),
  };

  try {
    const response = await api.get('/characters', {params});

    const characters = await Promise.all(
      response.data.data.results.map(async (item: any) => {
        const translatedDescription = await translateText(item.description);
        return {
          id: item.id,
          name: item.name,
          description: translatedDescription, // Ahora la descripción está en español
          thumbnail: {
            path: item.thumbnail.path,
            extension: item.thumbnail.extension,
          },
        };
      }),
    );

    return characters;
  } catch (error: any) {
    console.error(
      'Error en la API de Marvel:',
      error.response?.data || error.message,
    );
    return [];
  }
};
