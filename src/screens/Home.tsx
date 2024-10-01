import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import BarCategory from "../components/BarCategory";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Button from "../components/Button";

export default () => {
    
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <BarCategory />
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text h1>Home</Text>
                        <Button text="Go to Search" color="#f00" onPress={() => {}} />
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
});
