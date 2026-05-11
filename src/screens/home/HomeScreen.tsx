import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/headers/HomeHeader'
import AppSaveView from '../../components/views/AppSaveView'

const HomeScreen = () => {
  return (
    <AppSaveView>
        <HomeHeader/>
      <Text>HomeScreen</Text>
    </AppSaveView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})