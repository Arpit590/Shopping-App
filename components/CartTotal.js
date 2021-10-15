import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'

const CartTotal = () => {

    const navigation = useNavigation();


    const cart = useSelector((state)=>state.cart.cart);
    let totalAmount=0;

        {cart.map((item)=>(
            totalAmount+= item.price
        ))}

    return (
        <View style={styles.container}>
                <Text style={{fontWeight:"bold", fontSize:18}}>Total Amount: ${totalAmount.toFixed(2)}</Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}
            onPress={()=>navigation.navigate("Order")}
            >
                <Text style={{fontSize:16, fontWeight:"bold", color:"white"}}>Place Order</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartTotal

const styles = StyleSheet.create({
    container:{
        padding:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"
    },
    button:{
        marginLeft:60,
        backgroundColor:"#FC6A03",
        paddingHorizontal:20, paddingVertical:10,
        borderRadius:10
    }
})
