import { View } from "react-native";
import React, { useContext } from "react";
import { Text } from "react-native-elements";
import { CounterContext } from "../providers/CounterContext";

export default () => {

    const { counter, setCounter } = useContext(CounterContext);

    return (
        <View>
            <Text>Settings Screen</Text>
            <Text>{counter}</Text>
        </View>
    )
}
