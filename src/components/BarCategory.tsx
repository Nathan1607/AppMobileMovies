import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";


export default () => {
    
    return (
        <SafeAreaView>
            <ScrollView horizontal>
                <Text>Bar Category</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
});
