import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import App from '../../../App'
import AppText from '../texts/AppText'
import { s, vs } from 'react-native-size-matters'

const TotalsView = ({shippingFee,taxes,itemsPrice}) => {
    return (
        <View>
            <View style={styles.row}>
                <AppText>Items Price:</AppText>
                <AppText>$ {itemsPrice}</AppText>
            </View>
            <View style={styles.row}>
                <AppText>Taxes:</AppText>
                <AppText>$ {taxes}</AppText>
            </View>
            <View style={styles.row}>
                <AppText>Shipping Fee:</AppText>
                <AppText>$ {shippingFee}</AppText>
            </View>
            <View style={styles.row}>
                <AppText>Order Total:</AppText>
                <AppText>$ {itemsPrice+shippingFee+taxes}</AppText>
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