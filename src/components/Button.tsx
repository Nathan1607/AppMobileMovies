// Button.tsx

import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

interface ButtonProps {
  text: string;
  iconName?: IconProp;
  color: string;
  onPress: (event: GestureResponderEvent) => void;
  fontSize?: number;
  textColor?: string;
  width?: number | string;
  marginLeft?: number;
  marginTop?: number;
}

const Button: React.FC<ButtonProps> = ({
  text,
  iconName,
  color,
  onPress,
  fontSize = 16,
  textColor = '#fff',
  width,
  marginLeft,
  marginTop
}) => {
  return (
    <TouchableOpacity
    style={[styles.button, { backgroundColor: color, width: width as number | undefined, marginLeft, marginTop }]}
    onPress={onPress}>
      <View style={styles.buttonContent}>
        {iconName && (
          <FontAwesomeIcon
            icon={iconName}
            size={20}
            color="#fff"
            style={styles.icon}
          />
        )}
        <Text style={[styles.text, {fontSize, color: textColor}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
});

export default Button;
