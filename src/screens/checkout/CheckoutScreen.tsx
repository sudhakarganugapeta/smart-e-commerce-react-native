import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSaveView from '../../components/views/AppSaveView'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/color'
import AppTextInput from '../../components/inputs/AppTextInput'
import AppButton from '../../components/buttons/AppButton'

const CheckoutScreen = () => {
  return (
    <AppSaveView>
        <View style={styles.container}>
            <AppTextInput placeholder='Full name'/>
             <AppTextInput placeholder='Phone Number'/>
              <AppTextInput placeholder='Address'/>
        </View>
        <AppButton title="Confirm" style={styles.confirmButton} backgroundColor={AppColors.primary} TextColor={AppColors.white}/>
    </AppSaveView>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({
    container:{
        // justifyContent:'center',
        // alignItems:'center',
        width:'100%',
        padding:s(10),
        height:vs(160),
        backgroundColor:AppColors.white,
        borderRadius:s(20),
        shadowColor:AppColors.primary,
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5,
    },
    confirmButton:{
        position:'absolute',
        bottom:vs(50),
    }
})