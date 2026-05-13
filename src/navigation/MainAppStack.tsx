import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import { createStackNavigator } from '@react-navigation/stack'
import MainAppBottomTabs from './MainAppBottomTabs'
import CheckoutScreen from '../screens/checkout/CheckoutScreen'
import MyOrders from '../components/orders/MyOrders'
import FlashMessage from 'react-native-flash-message'
const Stack = createStackNavigator()
const MainAppStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
       
        <Stack.Screen name="Auth" component={AuthStack}></Stack.Screen>
        <Stack.Screen name="Main" component={MainAppBottomTabs}/>
        <Stack.Screen name="Checkout" 
        options={{headerShown:true}}
        component={CheckoutScreen}/>
         <Stack.Screen name="MyOrders" 
        options={{headerShown:true,title:'My Orders'}}
        component={MyOrders}/>
    </Stack.Navigator>
  )
}

export default MainAppStack

const styles = StyleSheet.create({})