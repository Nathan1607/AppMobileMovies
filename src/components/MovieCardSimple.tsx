import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface MovieCardSimpleProps {
  title: string;
  imageUrl: string;
  onPress: () => void;
}

const MovieCardSimple: React.FC<MovieCardSimpleProps> = ({
  title,
  imageUrl,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
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
});

export default MovieCardSimple;
