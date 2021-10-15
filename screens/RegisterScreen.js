import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Alert, Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Ionicons} from "react-native-vector-icons";
import { useDispatch } from 'react-redux';
import {auth, provider} from "./firebase"
import { login } from '../redux/actions/userAction';

const RegisterScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(()=>{
        auth.onAuthStateChanged((authUser)=>{
          if(authUser){
            dispatch(login({
              username: authUser.displayName,
              profileUrl: authUser.photoURL,
              id: authUser.uid
            }))
            navigation.navigate("Custom")
          }
          else{
            return;
          }
        })
      },[dispatch])


    const signUpHandler=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            dispatch(login({
                username: result.user.displayName,
                profileUrl: result.user.photoURL,
                id: result.user.uid
            }))
            navigation.navigate("Custom")
        }
        ).catch(err=>Alert.alert(err))
    }

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
                            Register
                        </Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={{alignItems:"center", marginVertical:20}}>
                <Image
                source={require("../assets/onboarding-img1.png")}
                style={{height:300, width:300, resizeMode:"contain"}}
                />
                <TouchableOpacity style={styles.button}
                onPress={signUpHandler}
                >
                    <Text style={{fontSize:18}}>Sign Up With Google</Text>
                    <Image
                    source={require("../assets/google.png")}
                    style={{height:40, width:40, resizeMode:"contain"}}
                    />
                </TouchableOpacity>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontSize:18, marginRight:5}}>Already have an account?</Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate("Login")}>
                        <Text style={{color:"blue", fontSize:18}}>Login</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
        </View>

    )
}

export default RegisterScreen

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
