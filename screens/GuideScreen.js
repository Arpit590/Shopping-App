import React from 'react'
import { Image, Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import {AntDesign} from "react-native-vector-icons";


const GuideScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <View style={{flexDirection:"row", alignItems:"center", marginLeft:20}}>
                        <AntDesign
                        name="rocket1"
                        size={24}
                        color="white"
                        />
                        <Text numberOfLines={1} style={{fontSize:20, fontWeight:"bold", color:"white", marginLeft:10}}>
                            Guide
                        </Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={styles.content}>
                    <Image
                    source={require("../assets/guidance.png")}
                    style={{height:300, width:400, resizeMode:"contain", marginVertical:20}}
                    />
                    <Text style={{fontWeight:"bold", fontSize:20, marginVertical:20}}>Benefits of Online Shopping</Text>
                    <Text style={{fontSize:15, textAlign:"center"}}>Although there are some risks with shopping online and many buyers have concerns over the safety of their information, there are significant tangible benefits to online shopping:</Text>
                    <View style={{marginVertical:20, paddingHorizontal:20}}>
                        <Text style={{fontSize:14, marginVertical:10}}>1. You’ll save time and gas by not having to drive to the store.</Text>
                        <Text style={{fontSize:14, marginVertical:10}}>2. You can buy products outside of normal business hours.</Text>
                        <Text style={{fontSize:14, marginVertical:10}}>3. It’s easy to compare prices between multiple websites.</Text>
                        <Text style={{fontSize:14, marginVertical:10}}>4. Read user reviews of people who also purchased the product.</Text>
                        <Text style={{fontSize:14, marginVertical:10}}>5. You can research online coupons and sales without having to clip physical coupons.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default GuideScreen

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
        alignItems:"center",
        justifyContent:"center",
        marginVertical:20
    }
})
