import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default () => {

    const [selectedCategory, setSelectedCategory] = useState('All'); // "All" est sélectionné par défaut

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedCategory === 'All' && styles.selectedButton // Appliquer le style si "All" est sélectionné
                    ]}
                    onPress={() => setSelectedCategory('All')} // Met à jour la sélection
                >
                    <Text style={[
                        styles.buttonText,
                        selectedCategory === 'All' && styles.selectedButtonText // Appliquer style texte si sélectionné
                    ]}>
                        All
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedCategory === 'Romance' && styles.selectedButton // Appliquer le style si "Romance" est sélectionné
                    ]}
                    onPress={() => setSelectedCategory('Romance')}
                >
                    <Text style={[
                        styles.buttonText,
                        selectedCategory === 'Romance' && styles.selectedButtonText
                    ]}>
                        Romance
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedCategory === 'Sport' && styles.selectedButton // Appliquer le style si "Sport" est sélectionné
                    ]}
                    onPress={() => setSelectedCategory('Sport')}
                >
                    <Text style={[
                        styles.buttonText,
                        selectedCategory === 'Sport' && styles.selectedButtonText
                    ]}>
                        Sport
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedCategory === 'Kids' && styles.selectedButton // Appliquer le style si "Kids" est sélectionné
                    ]}
                    onPress={() => setSelectedCategory('Kids')}
                >
                    <Text style={[
                        styles.buttonText,
                        selectedCategory === 'Kids' && styles.selectedButtonText
                    ]}>
                        Kids
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedCategory === 'Horror' && styles.selectedButton // Appliquer le style si "Horror" est sélectionné
                    ]}
                    onPress={() => setSelectedCategory('Horror')}
                >
                    <Text style={[
                        styles.buttonText,
                        selectedCategory === 'Horror' && styles.selectedButtonText
                    ]}>
                        Horror
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        alignItems: 'center',
    },
    scrollViewContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    button: {
        borderRadius: 20,
        marginHorizontal: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#E0E0E0',
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
    },
    selectedButton: {
        backgroundColor: '#FFD700',
    },
    selectedButtonText: {
        color: '#000',
    },
});
