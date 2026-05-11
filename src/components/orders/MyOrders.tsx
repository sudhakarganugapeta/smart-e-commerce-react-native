import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderDetails from './OrderDetails'

const MyOrders = () => {
  return (
      <>
      <OrderDetails/>
        <OrderDetails/>
          <OrderDetails/></>
  )
}

export default MyOrders

const styles = StyleSheet.create({})