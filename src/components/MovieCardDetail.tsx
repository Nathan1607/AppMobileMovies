import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface MovieCardDetailProps {
  title: string;
  imageUrl: string;
  rating: number;
  onPress: () => void;
  style?: object;
}

const MovieCardDetail: React.FC<MovieCardDetailProps> = ({
  title,
  imageUrl,
  rating,
  onPress,
  style
}) => {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.rating}>⭐ {rating.toFixed(1)}</Text>
        </View>
    </TouchableOpacity>
  );
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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 8,
    fontWeight: 'bold',
  },
  rating: {
    color: '#FFD700',
    fontSize: 14,
    marginLeft: 5,
  },
});

export default MovieCardDetail;
