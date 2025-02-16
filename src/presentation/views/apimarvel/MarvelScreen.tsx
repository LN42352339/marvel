import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TextInput,
  Button,
} from 'react-native';
import {
  fetchCharacters,
  Character,
} from '../../../data/datasource/remote/MarvelAPI';
import {styles} from './Styles';

const MarvelScreen = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(''); // Estado para el input de búsqueda

  // Función para cargar personajes de Marvel
  const loadCharacters = async (searchTerm = '') => {
    setLoading(true);
    try {
      const data = await fetchCharacters(searchTerm);
      setCharacters(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCharacters(); // Carga inicial de personajes
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PERSONAJES DE MARVEL</Text>

      {/* Cuadro de Búsqueda */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Escribe tu personaje..."
          value={search}
          onChangeText={text => setSearch(text)}
        />
        <Button title="Buscar" onPress={() => loadCharacters(search)} />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#E62429" />
      ) : (
        <FlatList
          data={characters}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.characterCard}>
              <Image
                source={{
                  uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                }}
                style={styles.image}
              />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>
                {item.description || 'Sin descripción disponible'}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default MarvelScreen;
