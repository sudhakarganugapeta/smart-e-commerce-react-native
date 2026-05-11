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
const CartScreen = () => {
  const navigate = useNavigation()
  return (
    <AppSaveView>
      <HomeHeader/>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <CartItem {...item} onPress={() => {}} />
        )}
        keyExtractor={(item) => item.id}
      />
      <TotalsView/>
      <AppButton onPress={()=>{navigate.navigate('Checkout')}} title="Continue" backgroundColor={AppColors.primary} TextColor={AppColors.white}/>
           {/* <EmptyCart /> */}
    </AppSaveView>
  )
}

export default CartScreen

const styles = StyleSheet.create({})