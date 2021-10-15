import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {Entypo} from "react-native-vector-icons";


const CartItem = ({title, desc, price, imgSrc, rating}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.text}>
                    <Text style={{fontWeight:"bold", fontSize:16, maxWidth:250}} numberOfLines={2}>{title}</Text>
                    <Text style={{fontSize:15, maxWidth:200, marginVertical:10}} numberOfLines={1}>{desc}</Text>
                    <Text style={{fontSize:15, fontWeight:"bold"}}>Price: ${price}</Text>
                    <View style={{flexDirection:"row", alignItems:"center", marginTop:10}}>
                        <View style={styles.rating}>
                            <Text style={{color:"white", marginRight:5}}>{rating?.rate}</Text>
                            <Entypo
                            name="star"
                            size={20}
                            color="white"
                            />
                        </View>
                        <Text style={{color:"blue", marginLeft:5}}>MyShop Assured</Text>
                    </View>
                </View>
                <Image
                source={{uri:imgSrc}}
                style={{height:100, width:100, resizeMode:"contain"}}
                />
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
        padding:20,
        marginVertical:20,
        marginHorizontal:10,
        backgroundColor:"#fff",
        borderWidth:1, 
        borderColor:"black",
        borderRadius:10
    },
    content:{
        flexDirection:"row",
        alignItems:"center"
    },
    rating:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"green",
        paddingVertical:5, 
        paddingHorizontal:10,
        borderRadius:20
    }
})
