import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BarCategory from '../components/BarCategory';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default () => {
    
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODZhOGEwOWJiZmU2MWUwNjIxNWUzMmQyMDllYzE5YyIsIm5iZiI6MTcyODk3ODU0Ni4xNzE1MTUsInN1YiI6IjY3MGE5N2MwMzdkODZkNTIwYmIwODQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.49O9dbuRFT3Q32zn15USk97k9AMplfp0d0YwIi5TG18';
  
  interface Movie {
    poster_path: string;
  }

  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?page=1',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + token,
            },
          },
        );
        if (response.ok) {
          const data = await response.json();
          setMovie(data.results[0]);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchMovie();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        {/* Barre de catégorie en haut */}
        <View style={styles.barCategoryContainer}>
          <BarCategory />
        </View>

        <View style={styles.grayBackground} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  barCategoryContainer: {
    marginTop: 20,
    zIndex: 1,
  },
  grayBackground: {
    top: -100,
    backgroundColor: '#808080',
    height: 350, 
    width: '100%',
  },
});
