import {
  Image,
  ScrollView,
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
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
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
          setMovies(data.results.slice(0, 4));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchMovies();
  }, []);

  const renderItem = ({item}: {item: any}) => {
    if (!item.poster_path) {
      return null;
    }
    const posterUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    return (
      <View style={styles.carouselItem}>
        <Image source={{uri: posterUrl}} style={styles.posterImage} />
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <View>
          <BarCategory />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {movies.map((movie, index) => (
            <View key={index} style={styles.carouselItem}>
              {renderItem({item: movie})}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  posterImage: {
    width: 300,
    height: 450,
    borderRadius: 10,
  },
});
