import { StyleSheet, KeyboardTypeOptions } from 'react-native'
import React from 'react'
import { Controller, Control, FieldValues, Path, RegisterOptions } from 'react-hook-form'
import AppTextInput from './AppTextInput'
import AppText from '../texts/AppText'
import { AppColors } from '../../styles/color'

interface AppTextInputControllerProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  rules?: RegisterOptions
  placeholder?: string
  secureTextEntry?: boolean
  keyboardType?: KeyboardTypeOptions
}

const AppTextInputController = <T extends FieldValues>({
  name,
  rules = { required: 'This is required' },
  control,
  placeholder,
  secureTextEntry,
  keyboardType,
}: AppTextInputControllerProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <AppTextInput
            value={String(value ?? '')}
            onChangeText={onChange}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={error && styles.inputError}
          />
          {error && <AppText style={styles.textError}>{error.message}</AppText>}
        </>
      )}
    />
  )
}

export default AppTextInputController

const styles = StyleSheet.create({
  inputError: {
    borderColor: AppColors.red,
    borderWidth: 1,
  },
  textError: {
    color: AppColors.red,
  },
})