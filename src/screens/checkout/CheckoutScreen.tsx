import { Alert, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import AppSaveView from '../../components/views/AppSaveView'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/color'
import AppButton from '../../components/buttons/AppButton'
import AppTextInputController from '../../components/inputs/AppTextInputController'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface CheckoutFormData {
  fullName: string
  phoneNumber: string
  detailedAddress: string
}

const schema: yup.SchemaOf<CheckoutFormData> = yup.object({
  fullName: yup
    .string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters'),

  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(10, 'Phone number must be at least 10 digits'),

  detailedAddress: yup
    .string()
    .required('Address is required')
    .min(15, 'Please provide a detailed address with at least 15 characters'),
}).required()

const CheckoutScreen: FC = () => {
  const { control, handleSubmit } = useForm<CheckoutFormData>({
    resolver: yupResolver(schema),
  })

  const saveOrder: SubmitHandler<CheckoutFormData> = formData => {
    Alert.alert('Order details', JSON.stringify(formData))
    console.log(formData)
  }

  return (
    <AppSaveView>
      <View style={styles.container}>
        <AppTextInputController
          control={control}
          name="fullName"
          placeholder="Full name"
          secureTextEntry={false}
        />
        <AppTextInputController
          name="phoneNumber"
          control={control}
          placeholder="Phone Number"
        />
        <AppTextInputController
          name="detailedAddress"
          control={control}
          placeholder="Address"
        />
      </View>
      <AppButton
        onPress={handleSubmit(saveOrder)}
        title="Confirm"
        style={styles.confirmButton}
        backgroundColor={AppColors.primary}
        TextColor={AppColors.white}
      />
    </AppSaveView>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: s(10),
    minHeight: vs(160),
    backgroundColor: AppColors.white,
    borderRadius: s(20),
    shadowColor: AppColors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  confirmButton: {
    position: 'absolute',
    bottom: vs(50),
  },
})