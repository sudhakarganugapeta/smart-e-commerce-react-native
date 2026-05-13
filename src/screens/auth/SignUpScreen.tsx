import { Alert, Image, StyleSheet, Text, View } from 'react-native'
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
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { create } from 'react-native/types_generated/Libraries/ReactNative/ReactFabricPublicInstance/ReactNativeAttributePayload'
import { auth } from '../../config/firebaseConfig'
import FlashMessage, { showMessage } from 'react-native-flash-message'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../../store/reducers/userSlice'
import { useDispatch } from 'react-redux'

const schema = yup
    .object({
        userName: yup
            .string()
            .required("User name is required")
            .min(5, "User name must be more than 5 characters"),
        email: yup.string().email("Email is wrong").required("Email is required"),
        password: yup
            .string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
    })
    .required();

type FormData = yup.InferType<typeof schema>;
const SignUpScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('')
    const navigation = useNavigation()
    const { control, handleSubmit } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch()
    const onSignUpPress = async (formData: any) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
            Alert.alert("Successfully registered! & Redirected to Home Page.");
            navigation.navigate("Main");
            dispatch(setUser({ uid: userCredential.user.uid }))
            
        } catch (error) {
            let errorMessage = "An error occurred during registration. Please try again.";
            if (error.code === "auth/email-already-in-use") {
                errorMessage = "This email is already in use. Please use a different email.";
            } else if (error.code === "auth/invalid-email") {
                errorMessage = "The email address is invalid. Please enter a valid email.";
            } else if (error.code === "auth/operation-not-allowed") {
                errorMessage = "Email/password accounts are not enabled. Please contact support.";
            } else if (error.code === "auth/weak-password") {
                errorMessage = "The password is too weak. Please choose a stronger password.";
            } else {
                errorMessage = "An unexpected error occurred. Please try again.";
            }
            showMessage({
                type: "danger",
                message: errorMessage,
            })
        }

    };
    return (
        <AppSaveView style={styles.container}>
            <FlashMessage position="top" />
            <Image source={IMAGES.appLogo} style={styles.appLogo} />
            <AppTextInputController<FormData>
                control={control}
                name="userName"
                placeholder="User Name"
            />
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
            <AppButton
                backgroundColor={AppColors.primary}
                TextColor={AppColors.white}
                title="Create New Account"
                onPress={handleSubmit(onSignUpPress)}
            />
            <AppButton
                title="Go To Sign In"
                style={styles.signInButton}
                textColor={AppColors.primary}
                onPress={() => navigation.navigate("SignInScreen")}
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