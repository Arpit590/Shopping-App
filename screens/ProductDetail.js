import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {  Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {FontAwesome, Ionicons} from "react-native-vector-icons";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import ProductDetailItem from '../components/ProductDetailItem';
import { addToCart } from '../redux/actions/cartAction';
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productAction';

const ProductDetail = () => {
    const product = useSelector((state)=>state.product.product);
    const cart = useSelector((state)=>state.cart.cart)
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const [loading, setLoading] =useState(false);

    useEffect(()=>{
        setLoading(true);
        axios.get(`https://fakestoreapi.com/products/${route.params.id}`)
        .then(res=>(
            dispatch(selectedProduct(res.data)),
            setLoading(false)
        )).catch(err=>{alert(err)
            setLoading(false)
        }
        )

        return()=>{
            dispatch(removeSelectedProduct())
        }
    }, [dispatch])

    const addToCartHandler=()=>{
        dispatch(addToCart(product));
    }


    return (
        <>
        {loading? <Loading/> :
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
                <Text numberOfLines={1} style={{fontSize:20, fontWeight:"bold", color:"white", marginLeft:20}}
                >Product Details</Text>
                </View>
                <View style={styles.icons}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.icon}>
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
                <ProductDetailItem
                title={product?.title}
                desc={product?.description}
                price={product?.price}
                rating={product?.rating}
                imgSrc={product?.image}
                />
            </ScrollView>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button1} activeOpacity={0.8}
                onPress={addToCartHandler}
                >
                    <Text style={{color:"black", fontWeight:"bold", fontSize:16}}>ADD TO CART</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} activeOpacity={0.8}
                onPress={()=>navigation.navigate("Order")}>
                    <Text style={{color:"#fff", fontWeight:"bold", fontSize:16}}>BUY NOW</Text>
                </TouchableOpacity>
            </View>
        </View>}
        </>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#fff",
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    header:{
        backgroundColor:"#047BD5",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        height:70
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
    },
    buttons:{
        flexDirection:"row",
        alignItems:"center",
        position:"absolute",
        bottom:0,
        justifyContent:"space-between",
    },
    button1:{
        backgroundColor:"#fff",
        borderWidth:1, 
        borderColor:"black",
        paddingHorizontal:15,
        paddingVertical:10,
        flex:1,
        alignItems:"center"
    },
    button2:{
        backgroundColor:"#FC6A03",
        borderWidth:1, 
        borderColor:"black",
        paddingHorizontal:15,
        paddingVertical:10,
        flex:1,
        alignItems:"center"
    },
})
