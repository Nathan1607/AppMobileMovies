import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import BarCategory from "../components/BarCategory";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";

export default () => {
    
      
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <View>
                    <BarCategory />
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
