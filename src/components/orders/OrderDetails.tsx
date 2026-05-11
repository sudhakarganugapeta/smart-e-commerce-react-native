import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../texts/AppText'
import { AppColors } from '../../styles/color'
import { s } from 'react-native-size-matters'
import { appFonts } from '../../styles/fonts'

const OrderDetails = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>ORDER DETAILS</AppText>
      <View style={styles.orderInfo}>
        <AppText>Total Price: 123456</AppText>
        <AppText>120.50 $</AppText>
      </View>
       <View style={styles.orderInfo}>
        <AppText>Date:2025-01-01</AppText>
        <AppText>2024-06-01</AppText>
      </View>
    </View>
  )
}

export default OrderDetails

const styles = StyleSheet.create({
    title:{
        borderBottomColor:AppColors.primary,
        borderBottomWidth:1,
        paddingBottom:s(5),
        marginBottom:s(10),
        fontFamily:appFonts.Bold,
    },
    container:{
        padding:20,
        backgroundColor:AppColors.white,
        borderRadius:10,
        shadowColor:AppColors.primary,
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.5,
        shadowRadius:5.84,
        elevation:5,
        borderColor:AppColors.blueGray,
        borderWidth:1,
        marginVertical:s(5),
        marginHorizontal:s(5)
    },
    orderInfo:{
        marginBottom:s(10),
        justifyContent:'space-between',
        flexDirection:'row',
         
    }
})