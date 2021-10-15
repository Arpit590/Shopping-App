import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Alert, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import {Ionicons} from "react-native-vector-icons";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartAction';


const PlaceOrder = () => {
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [address, setAddress] = useState("");
    const [nameError, setNameError]= useState("");
    const [addressError, setAddressError]= useState("");
    const [emailError, setEmailError]= useState("");
    const cart = useSelector((state)=>state.cart.cart);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    
    let totalAmount=0;

        {cart.map((item)=>(
            totalAmount+= item.price
        ))}

        const nameValidator=()=>{
            if(name==""){
                setNameError("This field needs to be filled")
            }else{
                setNameError("");
            }
        }
        const addressValidator=()=>{
            if(address==""){
                setAddressError("This field needs to be filled")
            }else{
                setAddressError("");
            }
        }
        const emailValidator=()=>{
            if(email==""){
                setEmailError("This field needs to be filled")
            }else{
                setEmailError("");
            }
        }

        const submitHandler=()=>{
            if(nameError|| emailError || addressError || name=="" ||  email=="" || address==""){
                Alert.alert("Please Fill the Details to Proceed Further");
            }else{
            dispatch(removeFromCart())
            Alert.alert(`Hello! ${name}, Thanks for shopping from MyShop:)`)
            navigation.navigate("Custom")
            }
        }


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
                    <View>
                        <Text numberOfLines={1} style={{fontSize:20, fontWeight:"bold", color:"white", marginLeft:20}}>
                            Place An Order
                        </Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={styles.form}>
                    <Text style={{fontSize:18, fontWeight:"bold", alignSelf:"flex-start"}}>Name</Text>
                    <TextInput
                    placeholder="Enter Your Name"
                    value={name}
                    onChangeText={(text)=>setName(text)}
                    keyboardType="default"
                    onBlur={()=>nameValidator()}
                    style={styles.formInput}
                    />
                    <Text style={{color:"red", fontSize:12, marginVertical:5, alignSelf:"flex-start"}}>{nameError}</Text>
                    <Text style={{fontSize:18, fontWeight:"bold", alignSelf:"flex-start"}}>Address</Text>
                    <TextInput
                    placeholder="Enter Your Address"
                    value={address}
                    onChangeText={(text)=>setAddress(text)}
                    keyboardType="default"
                    onBlur={()=>addressValidator()}
                    style={styles.formInput}
                    />
                    <Text style={{color:"red", fontSize:12, marginVertical:5, alignSelf:"flex-start"}}>{addressError}</Text>
                    <Text style={{fontSize:18, fontWeight:"bold", alignSelf:"flex-start"}}>Email</Text>
                    <TextInput
                    placeholder="Enter Your Email"
                    value={email}
                    onChangeText={(text)=>setEmail(text)}
                    keyboardType="email-address"
                    onBlur={()=>emailValidator()}
                    style={styles.formInput}
                    />
                    <Text style={{color:"red", fontSize:12, marginVertical:5, alignSelf:"flex-start"}}>{emailError}</Text>
                </View>
                <View style={{padding:20}}>
                    <Text style={{fontSize:18, fontWeight:"bold", alignSelf:"flex-start", marginBottom:10}}>Your Products</Text>
                    {cart.map((item)=>(
                        <Text style={{fontWeight:"bold", fontSize:13, marginVertical:5}}>{item.title}</Text>
                    ))}
                    <Text style={{fontSize:15, fontWeight:"bold"}}>Your Total Amount: ${totalAmount}</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8} 
                onPress={submitHandler}
                style={{alignItems:"center", alignSelf:"center", backgroundColor:"#FC6A03", width:"50%", paddingVertical:10, borderRadius:20}}>
                    <Text style={{fontWeight:"bold", fontSize:18, textAlign:"center", color:"#fff"}}>Place Order</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default PlaceOrder

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
    form:{
        padding:20,
        alignItems:"center",
        justifyContent:"center"
    },
    formInput:{
        paddingVertical:20, 
        width:"100%",
        backgroundColor:"#eee",
        borderRadius:20,
        paddingHorizontal:10, 
        marginVertical:20
    }
})
