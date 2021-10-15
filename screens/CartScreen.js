import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Ionicons} from "react-native-vector-icons";
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import CartTotal from '../components/CartTotal';

const CartScreen = () => {

    const navigation = useNavigation();
    const cart = useSelector((state)=>state.cart.cart);


    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                    <Ionicons
                    name="arrow-back"
                    color="white"
                    size={24}
                    />
                </TouchableOpacity>
                <View>
                <Text numberOfLines={1} style={{fontSize:20, fontWeight:"bold", color:"white", marginLeft:20}}>
                    Your Cart
                </Text>
                </View>
                </View>
            </View>
            <ScrollView style={{marginBottom:70}}>
                {!cart.length ? <View style={styles.content}>
                    <Image
                    source={require("../assets/cart.png")}
                    style={{height:400, width:400, resizeMode:"contain"}}
                    />
                    <TouchableOpacity activeOpacity={0.8} style={styles.button}
                    onPress={()=>navigation.navigate("Custom")}>
                        <Text style={{fontSize:17, color:"white", fontWeight:"bold", textAlign:"center"}}>Go To Shop</Text>
                    </TouchableOpacity>
                </View>
                 : <>{cart.map((item)=>(
                    <CartItem
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    desc={item.description}
                    imgSrc={item.image}
                    rating={item.rating}
                    />
                ))}
                </>}
            </ScrollView>
            {cart.length ? <View style={{position:"absolute", bottom:0, left:0}}>
                <CartTotal/>
                </View>: <Text style={{fontWeight:"bold", fontSize:18, alignItems:"center", textAlign:"center", margin:10}}>Please Shop and add items in your cart for payment!</Text>}
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"white",
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    header:{
        backgroundColor:"#047BD5",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        height:70
    },
    textContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    content:{
        alignItems:"center"
    },
    button:{
        backgroundColor:'blue',
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:10,
        width:"60%"
    }
})
