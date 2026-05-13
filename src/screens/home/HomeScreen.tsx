import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import HomeHeader from '../../components/headers/HomeHeader'
import AppSaveView from '../../components/views/AppSaveView'
import { appFonts } from '../../styles/fonts'
import ProductCard from '../../components/cards/ProductCard'
// import { products } from '../../data/products'
import EmptyCart from '../../components/EmptyCart'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/reducers/cartSlice'
import { useNavigation } from '@react-navigation/native'
import { getProductsData } from '../../data/dataServices'
const HomeScreen = () => {
  const dispatch =useDispatch()
  const navigation = useNavigation()
  const [products,setProducts] = React.useState([])

  const fetchDaata = async()=>{
    try {
      const data = await getProductsData()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
  useEffect(() => {
    fetchDaata()
  },[])
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
            <ProductCard imageUrl={item.imageURL} title={item.title} price={item.price} onCartPress={() => {
              dispatch(addItemToCart(item))
              navigation.navigate('Cart');
              // Alert.alert("Selected item added to the cart Navigate to Cart")
            }} />
          )}
          numColumns={2}
        />)
      }
    </AppSaveView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})