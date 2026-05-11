import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import AppText from './src/components/texts/AppText';
import AppSaveView from './src/components/views/AppSaveView';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import AppButton from './src/components/buttons/AppButton';
import { AppColors } from './src/styles/color';
import AppTextInput from './src/components/inputs/AppTextInput';
import SignInScreen from './src/screens/auth/SignInScreen';
import AuthStack from './src/navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import MainAppStack from './src/navigation/MainAppStack';


export default function App() {
  return (
<>
 <NavigationContainer>
   <MainAppStack/>

  </NavigationContainer>
</>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
