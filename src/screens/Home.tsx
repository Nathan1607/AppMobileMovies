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
  
  const [movie, setMovie] = useState(null);

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
          setMovie(data.results[0]); // On ne prend que le premier film
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

        {/* Image du film qu'il faudra modifier pour un carousel */}
        <View style={styles.imageContainer}>
          {movie && movie.poster_path && (
            <Image 
              source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}} 
              style={styles.posterImage}
              resizeMode="contain"
            />
          )}
        </View>
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
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, // Pour occuper tout l'espace possible
  },
  posterImage: {
    width: 375,
    height: 550,
    borderRadius: 10,
  },
});
