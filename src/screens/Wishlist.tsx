import { ActivityIndicator, SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-elements";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default () => {
    
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                <View style={styles.center}>
                    <Text style={styles.text}>Cette page est en développement</Text>
                    <ActivityIndicator size="large" color="#fff" style={styles.loader} />
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
});
