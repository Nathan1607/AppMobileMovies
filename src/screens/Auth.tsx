import React, { useContext } from 'react';
import { Text, View, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../providers/AuthContext';
import { AuthContext } from '../providers/AuthContext';

export default () => {

    const { login } = useAuth();
    const { username, setUsername } = useContext(AuthContext);
    const { password, setPassword } = useContext(AuthContext);

    const handleLogin = async () => {
        await login(username, password);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Authentication</Text>
                <TextInput placeholder="John Doe" placeholderTextColor="#aaa" style={styles.input} onChangeText={setUsername} />
                <TextInput placeholder="Password" placeholderTextColor="#aaa" style={styles.input} onChangeText={setPassword} secureTextEntry />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>        
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    innerContainer: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50,
        marginTop: 50,
    },
    input: {
        backgroundColor: '#333',
        color: '#fff',
        borderColor: '#555',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 5,
        borderColor: '#555',
        marginVertical: 10,
        marginTop: 30,
    },
    textButton: {
        color: '#fff',
        textAlign: 'center',
    }
});
