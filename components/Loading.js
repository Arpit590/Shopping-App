import React from 'react'
import { ActivityIndicator, Platform, StatusBar, StyleSheet, Text, View } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Text style={{fontSize:20, fontWeight:"bold", textAlign:"center"}}>Loading! Please Wait.....</Text>
                <ActivityIndicator animating={true} color="black" size="small" style={{marginTop:10}}/>
            </View>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"white",
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    container:{
        alignItems:"center",
        justifyContent:"center",

    }
})
