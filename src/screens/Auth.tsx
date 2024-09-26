import React from 'react';
import { Text, View, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { useAuth } from '../providers/AuthContext';
import { AuthContext } from '../providers/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default ({navigation}: any) => {

    const { login } = useAuth();

    const { username, setUsername } = useContext(AuthContext);
    const { password, setPassword } = useContext(AuthContext);
    const { isAuthenticated } = useContext(AuthContext);

    const handleLogin = async () => {
        await login(username, password);

        navigation.navigate('Home');
    }

    return (
        <SafeAreaView>
            <View style={{ padding: 20 }}>
                <Text style={styles.title}>Authentication</Text>
                <TextInput placeholder="John Doe" style={styles.input} onChangeText={setUsername} />
                <TextInput placeholder="Password" style={styles.input} onChangeText={setPassword} secureTextEntry />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
                <Text>Authentification : {isAuthenticated}</Text>
            </View>
        </SafeAreaView>        
    )
};

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50,
      },
    input: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
      },
    button: {
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        marginVertical: 10,
        marginTop: 50,
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
    }
});

