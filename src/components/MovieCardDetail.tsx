import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface MovieCardDetailProps {
    title: string;
    imageUrl: string;
    rating: number;
    onPress: () => void;
}

const MovieCardDetail: React.FC<MovieCardDetailProps> = ({title, imageUrl, rating, onPress}) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        {rating && <Text style={styles.rating}>⭐ {rating}</Text>}
      </View>
    </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    card: {
      width: 150,
      margin: 10,
      borderRadius: 8,
      overflow: 'hidden',
      backgroundColor: '#1c1c1c',
    },
    image: {
      width: '100%',
      height: 200,
    },
    info: {
      padding: 10,
    },
    title: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    rating: {
      color: '#FFD700',
      marginTop: 5,
    },
  });
  
  export default MovieCardDetail;