import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/headers/HomeHeader'
import AppSaveView from '../../components/views/AppSaveView'
import { appFonts } from '../../styles/fonts'
import ProductCard from '../../components/cards/ProductCard'
import { products } from '../../data/products'
import EmptyCart from '../../components/EmptyCart'

const HomeScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
  
      {products.length === 0 ? (
        <EmptyCart />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id}
          data={products}
          renderItem={({ item }) => (
            <ProductCard imageUrl={item.imageURL} title={item.title} price={item.price} onCartPress={() => { }} />
          )}
          numColumns={2}
        />)
      }
    </AppSaveView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})