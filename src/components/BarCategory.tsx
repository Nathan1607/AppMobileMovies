import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default () => {

    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <View style={styles.container}>
            <View style={styles.scrollViewWrapper}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewContent}
                    contentInset={{ left: 10, right: 10 }}
                >
                    <TouchableOpacity
                        style={[
                            styles.button,
                            selectedCategory === 'All' && styles.selectedButton
                        ]}
                        onPress={() => setSelectedCategory('All')}
                    >
                        <Text style={[
                            styles.buttonText,
                            selectedCategory === 'All' && styles.selectedButtonText
                        ]}>
                            All
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.button,
                            selectedCategory === 'Romance' && styles.selectedButton
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
                            selectedCategory === 'Sport' && styles.selectedButton
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
                            selectedCategory === 'Kids' && styles.selectedButton
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
                            selectedCategory === 'Horror' && styles.selectedButton
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
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
        paddingHorizontal: 0,
        paddingLeft: 0
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
