import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ActionSheet from "react-native-actions-sheet";
import AppText from '../texts/AppText';
import AppButton from '../buttons/AppButton';
const LanguageBottomSheet = () => {
  return (
   <ActionSheet id="LANG_SHEET">
    <AppText>Change Language</AppText>
    <AppButton title={"Confirm"} onPress={()=>{}}></AppButton>
   </ActionSheet>
  )
}

export default LanguageBottomSheet

const styles = StyleSheet.create({})