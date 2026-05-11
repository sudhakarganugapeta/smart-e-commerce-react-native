import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSaveView from '../views/AppSaveView'
import { IMAGES } from '../../constants/images-paths'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/color'

const HomeHeader = () => {
  return (
       <View style={styles.container}>
         <Image style={styles.logo} source={IMAGES.appLogo}/>
       </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
   
    container:{
        backgroundColor:AppColors.black,
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
    },
     logo:{
        width:s(40),
        height:vs(40),
        tintColor:AppColors.white
        
    },
})