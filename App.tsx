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
import {useFonts} from 'expo-font'
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito-Bold': require('./src/assets/fonts/Nunito-Bold.ttf'),
    'Nunito-Medium': require('./src/assets/fonts/Nunito-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null; // or a loading indicator
  }
  return (
<>
<Provider store={store}>
 <AppSaveView>
  <NavigationContainer>
  <FlashMessage position={"top"}/>
   <MainAppStack/>
  </NavigationContainer>
 </AppSaveView>

</Provider>
</>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
