import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import { createStackNavigator } from '@react-navigation/stack'
import MainAppBottomTabs from './MainAppBottomTabs'
import CheckoutScreen from '../screens/checkout/CheckoutScreen'
import MyOrders from '../components/orders/MyOrders'
import FlashMessage from 'react-native-flash-message'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setUser } from '../store/reducers/userSlice'
const Stack = createStackNavigator()
const MainAppStack = () => {
  const userData = useSelector((state:any) => state.userSlice.userData)
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()

  const getDataFromAsyncStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('USER_DATA')
      console.log('Retrieved user data from AsyncStorage:', jsonValue)
      dispatch(setUser(jsonValue ? JSON.parse(jsonValue) : null))
    } catch (error) {
      console.log('Error retrieving user data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getDataFromAsyncStorage()
  }, [])

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={userData ? 'Main' : 'Auth'}
    >
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Main" component={MainAppBottomTabs} />
      <Stack.Screen
        name="Checkout"
        options={{ headerShown: true }}
        component={CheckoutScreen}
      />
      <Stack.Screen
        name="MyOrders"
        options={{ headerShown: true, title: 'My Orders' }}
        component={MyOrders}
      />
    </Stack.Navigator>
  )
}

export default MainAppStack

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})