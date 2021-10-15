import React from 'react'
import { Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Ionicons, Fontisto,Entypo, AntDesign, FontAwesome} from "react-native-vector-icons";
import {useNavigation} from "@react-navigation/native";

const Profile = () => {
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
                            Profile
                        </Text>
                    </View>
                </View>
            </View>
            <ScrollView >
                <View style={styles.profile}>
                    <Image
                    source={{uri:"https://pbs.twimg.com/profile_images/1308525962859098114/SFa770Jq_400x400.jpg"}}
                    style={{height:70, width:70, resizeMode:"contain", borderRadius:100}}
                    />
                    <View style={styles.content}>
                        <Text style={{fontSize:15, fontWeight:"bold",marginRight:5}}>Hello! Arpit Saxena</Text>
                        <Fontisto
                        name="smiley"
                        color="black"
                        size={24}
                        />
                    </View>
                </View>
                <View style={styles.options}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.option}>
                        <Entypo
                        name="shop"
                        color="gray"
                        size={24}
                        />
                        <Text style={{marginLeft:20, fontSize:16}}>About MyShop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.option}>
                        <Entypo
                        name="share"
                        color="gray"
                        size={24}
                        />
                        <Text style={{marginLeft:20, fontSize:16}}>Share MyShop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.option}>
                        <AntDesign
                        name="tag"
                        color="gray"
                        size={24}
                        />
                        <Text style={{marginLeft:20, fontSize:16}}>Refer & Earn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.option}
                    onPress={()=>navigation.navigate("MyWallet")}
                    >
                        <Entypo
                        name="wallet"
                        color="gray"
                        size={24}
                        />
                        <Text style={{marginLeft:20, fontSize:16}}>My Wallet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.option}>
                        <FontAwesome
                        name="gift"
                        color="gray"
                        size={24}
                        />
                        <Text style={{marginLeft:20, fontSize:16}}>My Gift Cards</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.option}>
                        <Entypo
                        name="star"
                        color="gray"
                        size={24}
                        />
                        <Text style={{marginLeft:20, fontSize:16}}>Rate MyShop</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.option}>
                        <Ionicons
                        name="settings"
                        color="gray"
                        size={24}
                        />
                        <Text style={{marginLeft:20, fontSize:16}}>Settings</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:"center"}}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text style={{color:"red",fontSize:20, fontWeight:"bold", marginVertical:20, alignSelf:"center"}}>Logout</Text>
                    </TouchableOpacity>
                    <View style={styles.end}>
                        <Text style={{color:"gray"}}>7.4.14 R141</Text>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default Profile

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
    profile:{
        paddingHorizontal:20,
        flexDirection:"row",
        marginVertical:10,
        justifyContent:"space-between",
        borderBottomColor:"lightgray",
        borderBottomWidth:1,
        paddingBottom:20
    },
    content:{
        flexDirection:"row",
        alignItems:"center"
    },
    option:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1,
        borderBottomColor:"lightgray",
        padding:20
    },
    end:{
        marginVertical:20,
        padding:10, 
        borderRadius:10,
        backgroundColor:"#eee",
        alignItems:"center",
        width:"30%",
        justifyContent:"center"
    }
})
