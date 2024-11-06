import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BarCategory from '../components/BarCategory';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import Button from '../components/Button';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import MovieCardSimple from '../components/MovieCardSimple';
import MovieCardDetail from '../components/MovieCardDetail';
import LinearGradient from 'react-native-linear-gradient';

const {width: screenWidth} = Dimensions.get('window');

export default () => {
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODZhOGEwOWJiZmU2MWUwNjIxNWUzMmQyMDllYzE5YyIsIm5iZiI6MTcyODk3ODU0Ni4xNzE1MTUsInN1YiI6IjY3MGE5N2MwMzdkODZkNTIwYmIwODQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.49O9dbuRFT3Q32zn15USk97k9AMplfp0d0YwIi5TG18';

  interface Movie {
    vote_average: number;
    title: string;
    poster_path: string;
  }

  interface TvList {
    name: string;
    poster_path: string;
  }

  const [movies, setMovies] = useState<Movie[]>([]);
  const [tvLists, setTvLists] = useState<TvList[]>([]);
  const [moviesCarousel, setMoviesCarousel] = useState<Movie[]>([]);

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
          setMoviesCarousel(data.results.slice(0, 5));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchTvList = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/tv/popular?page=1',
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
          setTvLists(data.results.slice(0, 10));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchMovies();
    fetchTvList();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.barCategoryContainer}>
            <BarCategory />
          </View>

          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.carouselContainerHeader}>
            {moviesCarousel.map((movie, index) => (
              <Image
                key={index}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }}
                style={styles.headerCarouselImage}
                resizeMode="contain"
              />
            ))}
            <LinearGradient
              colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
              style={styles.gradientOverlay}
            />
          </ScrollView>

          <View style={styles.buttonContainer}>
            <View style={styles.textButtonSection}>
              <Text style={styles.sectionTitle}>My List</Text>
              <Button
                text="Wishlist"
                iconName={faHeart}
                color="#333"
                onPress={(event: GestureResponderEvent) => {
                  throw new Error('Function not implemented.');
                }}
              />
            </View>
            <View style={styles.textButtonSection}>
              <Text style={styles.sectionTitle}>Discover</Text>
              <Button
                text="Details"
                color="#FFC107"
                onPress={(event: GestureResponderEvent) => {
                  throw new Error('Function not implemented.');
                }}
              />
            </View>
          </View>

          <View>
            <Text style={styles.titleCategorie}>Best TV</Text>
            <Text style={styles.link}>See more</Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.carouselContainer}>
              {tvLists.map((tvList, index) => (
                <MovieCardSimple
                  key={index}
                  title={tvList.name}
                  imageUrl={`https://image.tmdb.org/t/p/w500${tvList.poster_path}`}
                  onPress={() => console.log(`${tvList.name} selected`)}
                  style={[
                    index === tvLists.length - 1 ? {marginRight: 30} : null,
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
              style={styles.carouselContainer}>
              {movies.map((movie, index) => (
                <MovieCardDetail
                  key={index}
                  title={movie.title}
                  imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  rating={movie.vote_average}
                  onPress={() => console.log(`${movie.title} selected`)}
                  style={[
                    index === tvLists.length - 1 ? {marginRight: 30} : null,
                  ]}
                />
              ))}
            </ScrollView>
          </View>
          <View>
            <Image
              source={require('../images/blackfriday.jpg')}
              style={styles.imageNews}
              resizeMode="cover"
            />
            <Text style={styles.textBlackFriday}>Black friday is here !</Text>
            <Text style={styles.textBlackFridayDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              cumque assumenda! Nesciunt accusantium.
            </Text>
            <Button
              text="Check Details"
              color="#FFC107"
              fontSize={18}
              width="85%"
              textColor="#fff"
              marginLeft={30}
              marginTop={15}
              onPress={function (event: GestureResponderEvent): void {
                throw new Error('Function not implemented.');
              }}
            />
          </View>
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
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  barCategoryContainer: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  grayBackground: {
    top: -100,
    backgroundColor: '#808080',
    height: 350,
    width: '100%',
  },
  titleCategorie: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 30,
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
    paddingHorizontal: 20,
  },
  posterImage: {
    width: 120,
    height: 180,
    borderRadius: 10,
    marginRight: 20,
  },
  imageNews: {
    width: '95%',
    height: 120,
    marginTop: 20,
    marginLeft: 30,
  },
  textBlackFriday: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 30,
  },
  textBlackFridayDescription: {
    color: 'white',
    fontSize: 14,
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 30,
  },
  headerCarouselImage: {
    width: screenWidth,
    height: 700,
    marginTop: -40,
  },
  carouselContainerHeader: {
    left: 0,
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 250,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: -120,
    height: 100,
  },
  textButtonSection: {
    alignItems: 'center',
    flex: 1,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
