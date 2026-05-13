import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { use, useEffect } from 'react'
import OrderDetails from './OrderDetails'
import { fetchUserOrders } from '../../data/dataServices'
import {getDateFromFireStoreTimeStampObject} from '../../helpers/dateTimeHelper'
import { sharedPaddingHorizontal } from '../../styles/sharedStyles'
const MyOrders = () => {
  const [orders, setOrders] = React.useState([])
  const getOrders = async () => {
    const data = await fetchUserOrders()
    setOrders(data)
    console.log(data);
  }
  useEffect(() => {
    // Fetch orders data from API or database here
    getOrders()

  }, [])
  return (
      <FlatList
        contentContainerStyle={{ paddingHorizontal: sharedPaddingHorizontal }}
        data={orders}
        keyExtractor={(item, index) => item?.id.toString()}
        renderItem={({ item }) => { 
          return (
          <OrderDetails
            date={getDateFromFireStoreTimeStampObject(item.createdAt)}
            totalAmount={item.totalProductsPriceSum}
            totalPrice={item.totalPrice}
            style={{ marginBottom: 10 }}
          />
        )}}
      />
  )
} 


export default MyOrders

const styles = StyleSheet.create({})