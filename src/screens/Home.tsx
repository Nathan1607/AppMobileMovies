import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BarCategory from '../components/BarCategory';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import Button from '../components/Button';
import { faHeart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default () => {
    
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODZhOGEwOWJiZmU2MWUwNjIxNWUzMmQyMDllYzE5YyIsIm5iZiI6MTcyODk3ODU0Ni4xNzE1MTUsInN1YiI6IjY3MGE5N2MwMzdkODZkNTIwYmIwODQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.49O9dbuRFT3Q32zn15USk97k9AMplfp0d0YwIi5TG18';

  interface Movie {
    poster_path: string;
  }

  const [movies, setMovies] = useState<Movie[]>([]);

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
          setMovies(data.results.slice(0, 10));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.barCategoryContainer}>
          <BarCategory />
        </View>

        <View style={styles.grayBackground} />

        <View style={styles.buttonContainer}>
          <Button
            text="Wishlist"
            iconName={faHeart}
            color="#333"
            onPress={function (event: GestureResponderEvent): void {
              throw new Error('Function not implemented.');
            }}   
          />
          <Button
            text="Details"
            color="#FFC107" 
            onPress={function (event: GestureResponderEvent): void {
              throw new Error('Function not implemented.');
            }}          
            />
        </View>
        
        <View>
          <Text style={styles.titleCategorie}>Marvel Studios</Text>
          <Text style={styles.link}>See more</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.carouselContainer}
          >
            {movies.map((movie, index) => (
              <Image
                key={index}
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                style={[
                  styles.posterImage,
                  index === movies.length - 1 ? { marginRight: 30 } : {},
                ]}
              />
            ))}
          </ScrollView>
        </View>

        <View>
          <Text style={styles.titleCategorie}>Best Movies</Text>
          <Text style={styles.link}>See more</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.carouselContainer}
          >
            {movies.map((movie, index) => (
              <Image
                key={index}
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                style={[
                  styles.posterImage,
                  index === movies.length - 1 ? { marginRight: 30 } : {},
                ]}
              />
            ))}
          </ScrollView>
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
  grayBackground: {
    top: -100,
    backgroundColor: '#808080',
    height: 350, 
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginTop: -150,
    width: '100%',
    height: 50,
  },
  titleCategorie : {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 20,
  },
  link: {
    color: 'yellow',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: -20,
    marginRight: 20,
  },
  carouselContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  posterImage: {
    width: 120,
    height: 180,
    borderRadius: 10,
    marginRight: 15,
  },
});
