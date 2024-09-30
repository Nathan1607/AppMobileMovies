import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import BarCategory from "../components/BarCategory";

export default () => {
    
    return (
        <SafeAreaView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity>
                    <Text>All</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Romance</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Sport</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Kids</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Horror</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
});
