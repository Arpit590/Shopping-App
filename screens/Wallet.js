import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Platform, StatusBar, StyleSheet, Text, View , ScrollView} from 'react-native'
import { Entypo} from "react-native-vector-icons";


const Wallet = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <View style={{flexDirection:"row", alignItems:"center", marginLeft:20}}>
                        <Entypo
                        name="wallet"
                        color="white"
                        size={24}
                        />
                        <Text numberOfLines={1} style={{fontSize:20, fontWeight:"bold", color:"white", marginLeft:10}}>
                            My Wallet
                        </Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <Image
                source={require("../assets/shopping.png")}
                style={{height:300, width:400, resizeMode:"contain"}}
                />
                <View style={{paddingHorizontal: 20, marginBottom:20}}>
                    <Text style={{fontSize:18, fontWeight:"bold", textAlign:"center", marginVertical:10}}>Account Balance & History</Text>
                    <View style={styles.account}>
                        <Text style={{fontWeight:"bold", fontSize:17}}>Balance</Text>
                        <Text style={{fontSize:17, fontWeight:"bold"}}>$300</Text>
                    </View>
                    <View style={styles.transaction}>
                        <Text style={{fontWeight:"bold", fontSize:18, textAlign:"center"}}>Payment History</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingHorizontal:10, marginVertical:20}}>
                            <View>
                                <Text style={{fontSize:17, fontWeight:"bold", marginBottom:5}}>Ordered Leather Jacket</Text>
                                <Text style={{fontSize:15, color:"gray"}}>07 Oct, 12:20PM</Text>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Text style={{fontSize:17, marginRight:5}}>$30</Text>
                                <Entypo
                                name="wallet"
                                size={24}
                                color="black"
                                />
                            </View>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingHorizontal:10, marginVertical:20}}>
                            <View>
                                <Text style={{fontSize:17, fontWeight:"bold", marginBottom:5}}>Ordered Puma Shoes</Text>
                                <Text style={{fontSize:15, color:"gray"}}> 05 Oct, 3:30PM</Text>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Text style={{fontSize:17, marginRight:5}}>$200</Text>
                                <Entypo
                                name="wallet"
                                size={24}
                                color="black"
                                />
                            </View>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingHorizontal:10, marginVertical:20}}>
                            <View>
                                <Text style={{fontSize:17, fontWeight:"bold", marginBottom:5}}>Ordered Samsung M30 Cover</Text>
                                <Text style={{fontSize:15, color:"gray"}}> 01 Oct, 10:05AM</Text>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Text style={{fontSize:17, marginRight:5}}>$120</Text>
                                <Entypo
                                name="wallet"
                                size={24}
                                color="black"
                                />
                            </View>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingHorizontal:10, marginVertical:20}}>
                            <View>
                                <Text style={{fontSize:17, fontWeight:"bold", marginBottom:5}}>Ordered White TurtleNeck</Text>
                                <Text style={{fontSize:15, color:"gray"}}> 29 Sept, 6:10PM</Text>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Text style={{fontSize:17, marginRight:5}}>$50</Text>
                                <Entypo
                                name="wallet"
                                size={24}
                                color="black"
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Wallet

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
    account:{
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",
        marginVertical:10,
        paddingHorizontal:10
    },
    transaction:{
        flexDirection:"column"
    }
})
