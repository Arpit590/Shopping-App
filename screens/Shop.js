import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Platform, ScrollView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {FontAwesome, Ionicons} from "react-native-vector-icons";
import { useSelector } from 'react-redux';
import ImageSlider from '../components/ImageSlider';
import Products from '../components/Products';


const Shop = () => {

    const navigation= useNavigation();
    const cart = useSelector((state)=>state.cart.cart)

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                <Image source={require("../assets/logo.png")}
                style={{height:100, width:100, resizeMode:"contain"}}
                />
                <Text style={{fontSize:20, fontWeight:"bold", color:"white"}}>MyShop</Text>
                </View>
                <View style={styles.icons}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.icon}
                    onPress={()=>navigation.navigate("Notification")}
                    >
                        <Ionicons
                        name="notifications"
                        size={25}
                        color="white"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon} activeOpacity={0.8} onPress={()=>navigation.navigate("Cart")}>
                        <FontAwesome
                        name="shopping-cart"
                        size={25}
                        color="white"
                        />
                        <View style={styles.cartText}>
                            <Text style={{color:"white"}}>{cart.length}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <ImageSlider/>
                <Products/>
            </ScrollView>
        </View>
    )
}

export default Shop

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#eee",
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    header:{
        backgroundColor:"#047BD5",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    icons:{
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:20
    },
    icon:{
        flexDirection:"row",
        marginLeft:20
    },
    textContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    cartText:{
        backgroundColor:"red",
        borderColor:"white",
        borderRadius:10,
        height:20,
        borderWidth:1,
        width:20,
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        left:18,
        bottom:16
    }
})
