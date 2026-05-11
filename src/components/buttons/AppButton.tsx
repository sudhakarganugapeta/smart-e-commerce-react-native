import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';
import AppText from '../texts/AppText';
import { s, vs } from 'react-native-size-matters';
import { AppColors } from '../../styles/color';

interface AppButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  backgroundColor: string;
  TextColor: string;
  disabled?: boolean;
  styleTitle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  title,
  backgroundColor,
  TextColor,
  disabled = false,
  styleTitle,
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.button,
        {
          backgroundColor: disabled
            ? AppColors.disableGray
            : backgroundColor,
        },
        style,
      ]}
      disabled={disabled}
    >
      <AppText
        variant="bold"
        style={StyleSheet.flatten([styles.textTitle, { color: TextColor }, styleTitle])}
      >
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: vs(40),
    borderRadius: s(25),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textTitle: {
    fontSize: s(16),
  },
});