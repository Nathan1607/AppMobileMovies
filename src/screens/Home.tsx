import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BarCategory from '../components/BarCategory';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import Button from '../components/Button';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import MovieCardSimple from '../components/MovieCardSimple';
import MovieCardDetail from '../components/MovieCardDetail';
import LinearGradient from 'react-native-linear-gradient';
import { TOKEN_API } from '@env';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Warning: TextElement: Support for defaultProps will be removed from function components', 
]);

const {width: screenWidth} = Dimensions.get('window');

export default function() {

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
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categoryId, setCategoryId] = useState<number | null>(null);

  const fetchData = async (url: string) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + TOKEN_API,
        },
      });
      if (response.ok) {
        const data = await response.json();
        return data.results;
      }
    } catch (error) {
      console.error('Error:', error);
    }
    return [];
  };

  useEffect(() => {
    const fetchMoviesAndTv = async () => {
      let movieUrl = 'https://api.themoviedb.org/3/movie/popular?page=1';
      let tvUrl = 'https://api.themoviedb.org/3/tv/popular?page=1';

      if (categoryId !== null && categoryId !== 0) {
        movieUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=${categoryId}&page=1`;
        tvUrl = `https://api.themoviedb.org/3/discover/tv?with_genres=${categoryId}&page=1`;
      }

      const movieResults = await fetchData(movieUrl);
      const tvResults = await fetchData(tvUrl);

      setMovies(movieResults.slice(0, 10));
      setMoviesCarousel(movieResults.slice(0, 5));
      setTvLists(tvResults.slice(0, 10));
    };

    fetchMoviesAndTv();
  }, [categoryId]);

  useEffect(() => {
    let scrollPosition = 0;

    const interval = setInterval(() => {
      if (scrollViewRef.current) {
        scrollPosition += screenWidth;
        if (scrollPosition >= screenWidth * moviesCarousel.length) {
          scrollPosition = 0;
        }
        scrollViewRef.current.scrollTo({x: scrollPosition, animated: true});
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [moviesCarousel]);

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.barCategoryContainer}>
            <BarCategory onCategoryChange={setCategoryId} />
          </View>

          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            onScroll={handleScroll}
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

          <View style={styles.indicatorContainer}>
            {moviesCarousel.map((_, index) => ( 
              <View
                key={index}
                style={[
                  styles.indicator,
                  currentIndex === index ? styles.activeIndicator : null,
                ]}
              />
            ))}
          </View>
          <View style={{ width: 20 }} />

          <View style={styles.buttonContainer}>
          <View style={[styles.textButtonSection, { alignItems: 'flex-end', marginRight: 10 }]}>
          <Text style={styles.sectionTitle}>My List</Text>
              <Button
                text="Wishlist"
                iconName={faPlus}
                color="#333"
                textColor='#fff'
                width={170}
                onPress={() => {}}
              />
            </View>
            <View style={[styles.textButtonSection, { alignItems: 'flex-start' }]}>
            <Text style={styles.sectionTitle}>Discover</Text>
              <Button
                text="Details"
                color="#FFC107"
                width={170}
                textColor='#000'
                onPress={() => {}}
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
                  onPress={() => {}}
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
                  onPress={() => {}}
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
              textColor="#000"
              marginLeft={30}
              marginTop={15}
              onPress={() => {}}
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
  titleCategorie: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 30,
  },
  link: {
    color: '#FFC107',
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
    height: 560,
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
    height: 300,
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
    marginTop: 10,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#888',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#fff',
  },
});
