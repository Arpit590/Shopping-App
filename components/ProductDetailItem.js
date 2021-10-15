import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {Entypo} from "react-native-vector-icons";


const ProductDetailItem = ({title, imgSrc, price, desc, rating}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: imgSrc}}
            style={{height:350, width: 350, resizeMode:"contain"}}
            />
            <View style={styles.text}>
                <Text style={{fontSize:18, fontWeight:"bold", textAlign:"center", marginBottom:5}}>{title}</Text>
                <Text style={{fontWeight:"900", fontSize:16, color:"gray", textAlign:"center", marginBottom:5}}>{desc}</Text>
                <Text style={{fontSize:16, fontWeight:"bold", marginBottom:5}}>Price: ${price}</Text>
                <Text style={{color:"blue"}}>MyShop Assured</Text>
            </View>
            <View style={styles.rating}>
                <Text style={{color:"white", marginRight:5}}>{rating?.rate}</Text>
                <Entypo
                name="star"
                size={20}
                color="white"
                />
            </View>
        </View>
    )
}

export default ProductDetailItem

const styles = StyleSheet.create({
    container:{
        marginVertical:20,
        padding:20,
        alignItems:"center"
    },
    text:{
        marginVertical:20,
        alignItems:"center"
    },
    rating:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"green",
        paddingVertical:5, 
        paddingHorizontal:10,
        borderRadius:20,
        marginBottom:30
    }
})
