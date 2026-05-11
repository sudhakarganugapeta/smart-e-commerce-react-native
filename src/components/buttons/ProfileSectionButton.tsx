import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppColors } from '../../styles/color';
import { Entypo } from '@expo/vector-icons';
import { s, vs } from 'react-native-size-matters';
interface ProfileSectionButtonProps {
    title: string;
    onPress: () => void;
}
const ProfileSectionButton: React.FC<ProfileSectionButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style = {styles.profileSectionButton} onPress={onPress}>
        <Text  style = {styles.sectionButton}>{title}</Text>
        <Entypo name="chevron-thin-right" size={24} color="black" />
    </TouchableOpacity>
    
  )
}

export default ProfileSectionButton

const styles = StyleSheet.create({

     profileSectionButton: {
        marginTop:vs(10),
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
      width:'100%',
      padding:s(15),
      backgroundColor:AppColors.white,
      borderBottomColor:AppColors.blueGray,
      borderBottomWidth:s(1),
    
        },
        sectionButton:{
            fontSize:s(16),
            fontWeight:'500'
        }
})