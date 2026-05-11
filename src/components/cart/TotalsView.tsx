import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import App from '../../../App'
import AppText from '../texts/AppText'
import { s, vs } from 'react-native-size-matters'

const TotalsView = () => {
    return (
        <View>
            <View style={styles.row}>
                <AppText>Items Price:</AppText>
                <AppText>$ 999.99</AppText>
            </View>
            <View style={styles.row}>
                <AppText>Taxes:</AppText>
                <AppText>$ 10</AppText>
            </View>
            <View style={styles.row}>
                <AppText>Shipping Fee:</AppText>
                <AppText>$ 10</AppText>
            </View>
            <View style={styles.row}>
                <AppText>Order Total:</AppText>
                <AppText>$ 10</AppText>
            </View>
        </View>
    )
}

export default TotalsView

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:s(10),
        paddingVertical:vs(5),
    }
})