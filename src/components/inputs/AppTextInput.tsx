import { StyleSheet, Text, View, TextInput, KeyboardTypeOptions, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { AppColors } from '../../styles/color'
import { s, vs } from 'react-native-size-matters'

interface AppTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: ViewStyle | TextStyle;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

const AppTextInput: React.FC<AppTextInputProps> = ({value, onChangeText, placeholder, style, keyboardType, secureTextEntry}) => {
  return (
    <TextInput 
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[styles.input, style]}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
    />
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  input:{
    borderColor:AppColors.borderColor,
    borderWidth:s(1),
    width:'100%',
    height:vs(40),
    borderRadius:s(25),
    paddingHorizontal:s(15),
    marginBottom:vs(10),
    fontSize:s(16)
  }
})