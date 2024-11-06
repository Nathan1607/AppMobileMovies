import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const categories = [
  { name: 'All', id: null },
  { name: 'Drama', id: 18 },
  { name: 'Western', id: 37 },
  { name: 'Comedy', id: 35 },
  { name: 'Animation', id: 16 },
];

interface Category {
  name: string;
  id: number | null;
}

export default ({ onCategoryChange }: { onCategoryChange: (categoryId: number | null) => void }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryPress = (category: Category) => {
    setSelectedCategory(category.name);
    onCategoryChange(category.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.scrollViewWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.name}
              style={[
                styles.button,
                selectedCategory === category.name && styles.selectedButton,
              ]}
              onPress={() => handleCategoryPress(category)}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedCategory === category.name && styles.selectedButtonText,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  scrollViewWrapper: {
    width: '90%',
    backgroundColor: '#333333',
    borderRadius: 20,
    overflow: 'hidden',
  },
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingLeft: 0,
  },
  button: {
    borderRadius: 20,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  selectedButton: {
    backgroundColor: '#fff',
  },
  selectedButtonText: {
    color: '#000',
  },
});
