import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Entypo} from "react-native-vector-icons";



const Product = ({price, title, id, desc, rating, imgSrc}) => {

    const navigation = useNavigation();


    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container}
        onPress={()=>navigation.navigate("ProductDetail",
        {id:id, price:price, title:title, rating:rating, desc:desc, imgSrc:imgSrc})}
        >
            <Image
            source={{uri: imgSrc}}
            style={{height:200,resizeMode:"contain", maxWidth:300, minWidth:300}}
            />
            <View style={styles.textContent}>
                <Text numberOfLines={1} style={{fontSize:17, fontWeight:"bold", maxWidth:300}}>{title}</Text>
                <Text numberOfLines={1} style={{fontWeight:"800", fontSize:15, color:"gray", maxWidth:300}}>{desc}</Text>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
                <View style={styles.rating}>
                    <Text style={{color:"white", marginRight:5}}>{rating}</Text>
                    <Entypo
                    name="star"
                    size={20}
                    color="white"
                    />
                </View>
                <Text style={{color:"blue"}}>MyShop Assured</Text>
            </View>
            <Text style={{marginVertical:10, fontSize:16, fontWeight:"bold", alignSelf:"center"}}>Price: $ {price}</Text>
        </TouchableOpacity>
    )
}

export default Product

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:"lightgray",
        borderRadius:10,
        padding:8,
        marginVertical:20
    },
    textContent:{
        alignItems:"center",
        marginVertical:10
    },
    rating:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"green",
        borderRadius:10, 
        padding:5,
        width:"30%",
        justifyContent:"center"
    }
})
