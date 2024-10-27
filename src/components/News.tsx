import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';


interface NewsProps {
  title: string;
  descriptif: string;
  imageUrl: string;
  onPress: () => void;
  style?: object;
}

const News: React.FC<NewsProps> = ({
  title,
  descriptif,
  imageUrl,
  onPress,
  style
}) => {
  return (
    <View>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.descriptif}>{descriptif}</Text>
            <Button
            text="Details"
            color="#FFC107" 
            onPress={onPress}
            />
        </View>
     </View>
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
  descriptif: {
    color: '#fff',
  },
});

export default News;
