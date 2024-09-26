import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { Text } from "react-native-elements";
import { CounterContext } from "../providers/CounterContext";

export default ({navigation} : any) => {
    const { counter, setCounter } = useContext(CounterContext);

    const handleClickCounter = (type: 'minus' | 'plus') => {
        if (type === 'minus') {
            setCounter!((prevCounter) => prevCounter - 1);
        } else {
            setCounter!((prevCounter) => prevCounter + 1);
        }
    };

    return (
        <View style={styles.container}>
            <Text h4 style={styles.header}>Home</Text>
            <View style={styles.counterContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Auth')}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.counterText}>{counter}</Text>
                <TouchableOpacity style={styles.button} onPress={() => handleClickCounter('plus')}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
    header: {
        marginBottom: 20,
        color: '#343a40',
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    button: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#007bff',
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    counterText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#343a40',
    },
});
