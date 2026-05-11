import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters'
import { AppColors } from '../../styles/color'
import Ionicons from '@expo/vector-icons/Ionicons';
import { commonStyles } from '../../styles/sharedStyles';
interface ProductCardProps {
    imageUrl:string;
    title:string;
    price:number;
    onCartPress: () => void;
}
const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, price,onCartPress }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.cartContainer} onPress={onCartPress}>
            <Ionicons name="cart" size={s(16)} color={AppColors.white} />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
    <Image style={styles.image} source={{uri:imageUrl}}/>
     </View>
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
        width:s(160),
        height:s(200),
        backgroundColor:AppColors.white,
        margin:10,
        ...commonStyles.shadow
    },
    imageContainer:{
        width:"100%",
        height:s(130),
        borderTopLeftRadius:s(10),
    borderTopRightRadius:s(10),
    },
    image:{
        width:'100%',
        height:'100%',
        borderTopLeftRadius:s(10),
        borderTopRightRadius:s(10),
        resizeMode:'contain'
    },
    infoContainer:{
        padding:s(10),
    },
    title:{
        fontSize:s(14),
        fontWeight:'bold',
    },
    price:{
        fontSize:s(14),
        color:AppColors.primary,
        marginTop:s(5),
    },
    cartContainer:{
        position:'absolute',
        top:s(10),
        left:s(8),
        backgroundColor:AppColors.primary,
        width:s(28),
        height:s(28),
        borderRadius:s(15),
        justifyContent:'center',
        alignItems:'center',
        zIndex:1
    }
})