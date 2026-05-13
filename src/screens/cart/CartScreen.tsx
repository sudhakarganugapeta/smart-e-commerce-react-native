import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { use } from 'react'
import AppSaveView from '../../components/views/AppSaveView'
import HomeHeader from '../../components/headers/HomeHeader'
import EmptyCart from '../../components/EmptyCart'
import CartItem from '../../components/cart/CartItem'
import TotalsView from '../../components/cart/TotalsView'
import { products } from '../../data/products'
import AppButton from '../../components/buttons/AppButton'
import { AppColors } from '../../styles/color'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { addItemToCart, removeItemFromCart, removeProductFromCart } from '../../store/reducers/cartSlice'
const CartScreen = () => {

  const navigate = useNavigation()
  const items =useSelector((state:RootState)=>state.cartSlice.items)
  const itemsPrice = items.reduce((acc,item)=>acc+item.sum,0)

const dispatch = useDispatch()
  return (
    <AppSaveView>
      <HomeHeader/>
      {items.length>0?(<><FlatList
        data={items}
        renderItem={({ item }) => (
          <CartItem 
          {...item} 
          onReducePress = {()=>{dispatch(removeItemFromCart(item))}}
          onIncreasePress={()=>{dispatch(addItemToCart(item))}}
          onDeletePress={()=>dispatch(removeProductFromCart(item))}
          onPress={() => {}} />
        )}
        keyExtractor={(item) => item.id}
      />
      <TotalsView itemsPrice={itemsPrice} taxes={10} shippingFee={10}/>
      <AppButton onPress={()=>{navigate.navigate('Checkout')}} title="Continue" backgroundColor={AppColors.primary} TextColor={AppColors.white}/></>):<EmptyCart />
      }
    </AppSaveView>
  )
}

export default CartScreen

const styles = StyleSheet.create({})