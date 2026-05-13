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
import { auth } from '../../config/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth/web-extension'
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { showMessage } from 'react-native-flash-message'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/reducers/userSlice'

const schema = yup
    .object({
        email: yup
            .string()
            .email("Please enter a valid email")
            .required("Email is required"),
        password: yup
            .string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
    })
    .required();

// 3- Define the type
type FormData = yup.InferType<typeof schema>;

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigation = useNavigation()
    const { control, handleSubmit } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onLoginPress = async (data: FormData) => {
          try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      dispatch(setUser({ uid: userCredential.user.uid }))
      navigation.navigate("Main")
      
    } catch (error:any) {
        console.log(error.code)
      let errorMessage = "An error occurred during login. Please try again.";
        if (error.code === "auth/user-not-found") {
            errorMessage = "No user found with this email.";
        } else if (error.code === "auth/wrong-password") {
            errorMessage = "Incorrect password. Please try again.";
        }else if (error.code === "auth/invalid-email") {
            errorMessage = "Invalid email address. Please check and try again.";
        }else if (error.code === "auth/network-request-failed") {
            errorMessage = "Network error. Please check your connection and try again.";
        }else if (error.code ==='auth/invalid-credential') {
            errorMessage = "Invalid credential. Please try again.";
         }else if (error.code === 'auth/too-many-requests') {
            errorMessage = "Too many failed login attempts. Please try again later.";
        } 
         else{
            errorMessage = "Error occurred. Please try again.";
        }
        showMessage({
            type: "danger",
            message: errorMessage,
        })
    }
    }
    return (
        <AppSaveView style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.appLogo} />
            {/* replace AppTextInput with  AppTextInputController*/}
            <AppTextInputController<FormData>
                control={control}
                name="email"
                placeholder="Email"
                keyboardType="email-address"
            />
            <AppTextInputController<FormData>
                control={control}
                name="password"
                placeholder="Password"
                secureTextEntry
            />
            <AppText style={styles.appName}>Smart E-Commerce</AppText>

            {/* add  handleSubmit function*/}
            <AppButton title="Login" onPress={handleSubmit(onLoginPress)} backgroundColor={AppColors.primary} TextColor={AppColors.white}/>
            <AppButton
                title="Sign Up"
                style={styles.registerButton}
                textColor={AppColors.primary}
                onPress={() => navigation.navigate("SignUpScreen")}
            />
        </AppSaveView>

    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        textAlign: 'center',
        paddingHorizontal: sharedPaddingHorizontal
    },
      appName: {
    fontSize: s(16),
    marginBottom: vs(15),
  },
    appLogo: {
        width: s(150),
        height: vs(150),
        marginBottom: vs(30)
    },
    registerButton: {
        borderWidth: s(1),
        marginTop: vs(8)
    }
})