import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import AppText from '../texts/AppText'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { AppColors } from '../../styles/color';
import App from '../../../App';
interface CartItemProps {
    imageURL: string;
    title: string;
    price: number;
    quantity: number;
    onPress: () => void;
}
const CartItem = ({ imageURL, title, price, quantity, onPress }: CartItemProps) => {
  return (
    <View style={styles.container}>
      {/* image cotnainer */}
      <View style={styles.imageContainer}>
          <Image source={{uri: imageURL}} style={{width:'100%',height:'100%',borderRadius:10}}/>
      </View>
        {/* details container */}
        <View style={styles.detailsContainer}>
         <AppText>{title}</AppText>
          <AppText>${price}</AppText>
          <View style={styles.quantityContainer}>
            <Pressable onPress={onPress}style={styles.quantityButton}><Feather name="plus" size={s(20)} color={AppColors.primary} /></Pressable>
            <AppText> {quantity}</AppText>
            <Pressable onPress={onPress} style={styles.quantityButton}><Feather name="minus" size={s(20)} color={AppColors.primary} /></Pressable>
          </View>
        </View>
        {/* delete icon */}
        <View style={styles.deleteIcon}>
            <MaterialIcons name="delete" size={24} color={AppColors.red} />
          <AppText>Delete</AppText>
        </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        padding:s(10),
        margin:s(10),
        borderRadius:s(10),
        height:vs(100),
        borderBottomColor:AppColors.blueGray,
        borderBottomWidth:s(1)
    },
    imageContainer: {
        flex:1.5,
        width:'100%',
        height:vs(90),
        borderRadius:s(10)
    },
    detailsContainer: {
        flex:3.5,
        paddingHorizontal:s(10),
        paddingTop:s(10),
    },
    deleteIcon:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
        
    },
    quantityContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:s(10),
        width:s(95),
        height:s(35),
        paddingHorizontal:s(5),
        borderRadius:s(40),
        borderColor:AppColors.blueGray,
        borderWidth:s(1),
        // backgroundColor:AppColors.lightGray,
        justifyContent:'center'
    },
    quantityButton:{
        width:s(25),
        height:s(25),
        borderRadius:s(25),
        backgroundColor:AppColors.lightGray,
        justifyContent:'center',
        alignItems:'center'

    }
})