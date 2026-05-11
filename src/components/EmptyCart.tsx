import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from './buttons/AppButton'
import { AppColors } from '../styles/color'
import { s } from 'react-native-size-matters'
import AppText from './texts/AppText'
import { appFonts } from '../styles/fonts'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'
const EmptyCart = () => {
    const navigation = useNavigation()
    const startShopping = () => {
        navigation.navigate('Home')
      }
  return (
    <View style={styles.container}>
        <View>
            <Ionicons name="bag-handle-outline" size={120} color={AppColors.primary} />
        </View>
      <AppText style={styles.title}>Your Cart is Empty</AppText>
      <AppText style={styles.subtitle}>Browse our products and find something you like!</AppText>
      <AppButton 
        title="Start Shopping"
      backgroundColor={AppColors.primary} 
      TextColor={AppColors.white} 
      onPress={startShopping}
      />
    </View>
  )
}

export default EmptyCart

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:s(80)
    },
    title:{
        fontSize:s(16),
        marginBottom:s(10),
        fontFamily:appFonts.Bold
    },
    subtitle:{
        fontSize:s(14),
        marginBottom:s(20),
        fontFamily:appFonts.Medium,
        textAlign:'center',
        lineHeight:s(20)
    }
})