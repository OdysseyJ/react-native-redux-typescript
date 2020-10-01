import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

type CustomButtonProps = {
  backgroundStyle?: any;
  textStyle?: any;
  title?: string;
  onPress: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  backgroundStyle,
  textStyle,
  title,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, backgroundStyle]}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  title: {
    fontSize: 15,
  },
});

export default CustomButton;
