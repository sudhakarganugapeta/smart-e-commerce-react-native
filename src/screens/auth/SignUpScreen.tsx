import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppSaveView from '../../components/views/AppSaveView'
import { IMAGES } from '../../constants/images-paths'
import { s, vs } from 'react-native-size-matters'
import AppTextInput from '../../components/inputs/AppTextInput'
import { sharedPaddingHorizontal } from '../../styles/sharedStyles'
import AppText from '../../components/texts/AppText'
import AppButton from '../../components/buttons/AppButton'
import { AppColors } from '../../styles/color'
import { useNavigation } from '@react-navigation/native'
const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName,setUserName] = useState('')
    const navigation = useNavigation()
    return (
        <AppSaveView style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.appLogo} />
             <AppTextInput placeholder='User Name' value={userName} onChangeText={setUserName} />
            <AppTextInput placeholder='Email' value={email} onChangeText={setEmail} />
            <AppTextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry={true} />
            <AppText variant='bold' style={{marginBottom:s(5)}}>Smart E-Commerce</AppText>
            <AppButton title='Create New Account' backgroundColor={AppColors.primary} TextColor={AppColors.white} />
            <AppButton 
            title='Go to Sign in' style={styles.signInButton} backgroundColor={AppColors.white} TextColor={AppColors.primary}
            onPress={()=>navigation.navigate('SignInScreen')}
            />
        </AppSaveView>

    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        textAlign: 'center',
        paddingHorizontal: sharedPaddingHorizontal
    },
    appLogo: {
        width: s(150),
        height: vs(150),
        marginBottom: vs(30)
    },
    signInButton: {
        borderWidth: s(1),
        marginTop: vs(8)
    }
})