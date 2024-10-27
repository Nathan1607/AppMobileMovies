import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface MovieCardSimpleProps {
  title: string;
  imageUrl: string;
  onPress: () => void;
  style?: object;
}

const MovieCardSimple: React.FC<MovieCardSimpleProps> = ({
  title,
  imageUrl,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
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
    height: 250,
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
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default MovieCardSimple;
