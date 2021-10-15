import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Ionicons} from "react-native-vector-icons";


const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <View style={{flexDirection:"row", alignItems:"center", marginLeft:20}}>
                        <Ionicons
                        name="person-circle-outline"
                        size={30}
                        color="white"
                        />
                        <Text numberOfLines={1} style={{fontSize:20, fontWeight:"bold", color:"white", marginLeft:10}}>
                            Login
                        </Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={{alignItems:"center", marginVertical:20}}>
                <Image
                source={require("../assets/onboarding-img2.png")}
                style={{height:300, width:300, resizeMode:"contain"}}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize:18}}>Sign In With Google</Text>
                    <Image
                    source={require("../assets/google.png")}
                    style={{height:40, width:40, resizeMode:"contain"}}
                    />
                </TouchableOpacity>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontSize:18, marginRight:5}}>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=>navigation.goBack()} activeOpacity={0.8}>
                        <Text style={{color:"blue", fontSize:18}}>Register</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default LoginScreen

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
    button:{
        marginVertical:20,
        flexDirection:"row",
        alignItems:"center",
        borderWidth:1,
        borderColor:"lightgray",
        borderRadius:10,
        paddingHorizontal:20,
        paddingVertical:10

    }
})
