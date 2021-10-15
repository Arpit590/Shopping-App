import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Ionicons, Entypo} from "react-native-vector-icons";


const Notification = () => {
    const navigation = useNavigation();

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
                    <View style={{flexDirection:"row", alignItems:"center", marginLeft:20}}>
                        <Ionicons
                        name="notifications"
                        size={24}
                        color="white"
                        />
                        <Text numberOfLines={1} style={{fontSize:20, fontWeight:"bold", color:"white", marginLeft:10}}>
                            Notifications
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.content}>
                <Image
                source={require("../assets/notification.png")}
                style={{height:400, width:400, resizeMode:"contain", alignSelf:"center"}}
                />
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontSize:20, fontWeight:"bold", marginRight:10}}>No new notifications!</Text>
                    <Entypo
                    name="emoji-sad"
                    color="black"
                    size={24}
                    />
                </View>
            </View>
        </View>
    )
}

export default Notification

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
        justifyContent:"center"
    }
})
