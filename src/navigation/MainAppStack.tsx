import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import { createStackNavigator } from '@react-navigation/stack'
import MainAppBottomTabs from './MainAppBottomTabs'
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
    </Stack.Navigator>
  )
}

export default MainAppStack

const styles = StyleSheet.create({})