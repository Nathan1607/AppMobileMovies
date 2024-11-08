import { ActivityIndicator, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Text } from "react-native-elements";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from '../providers/AuthContext';

export default () => {
    
    const navigation = useNavigation();
    const { logout } = useAuth();

    const handleLogout= () => {
        logout();
    }

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                <View style={styles.center}>
                    <Text style={styles.text}>Cette page est en développement</Text>
                    <ActivityIndicator size="large" color="#fff" style={styles.loader} />
                    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>Déconnexion</Text>
            </TouchableOpacity>
                </View>
            </SafeAreaView>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
    loader: {
        marginTop: 10,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutButton: {
        backgroundColor: '#FF3B30',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 30,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
