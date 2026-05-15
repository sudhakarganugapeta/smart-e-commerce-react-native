import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSaveView from '../../components/views/AppSaveView'
import HomeHeader from '../../components/headers/HomeHeader'
import ProfileSectionButton from '../../components/buttons/ProfileSectionButton'
import { s } from 'react-native-size-matters'
import { AppColors } from '../../styles/color'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/reducers/userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
const ProfileScreen = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch()
  return (
  <AppSaveView>
    <HomeHeader></HomeHeader>
    <ProfileSectionButton 
    title='My Orders'
    onPress={() => navigate.navigate('MyOrders')}/>
      <ProfileSectionButton 
    title='Language'
    onPress={() => console.log('Language pressed')}/>
      <ProfileSectionButton 
    title='Logout'
    onPress={() => {
      AsyncStorage.removeItem('USER_DATA')
      dispatch(setUser({}));
      navigate.navigate('Auth');
    }}/>
  </AppSaveView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
   
})