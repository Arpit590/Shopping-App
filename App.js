import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Shop from './screens/Shop';
import {Provider} from "react-redux";
import {Entypo, Ionicons,AntDesign} from "react-native-vector-icons";
import { store } from './redux/store';
import ProductDetail from './screens/ProductDetail';
import CartScreen from './screens/CartScreen';
import PlaceOrder from './screens/PlaceOrder';
import Notification from './screens/Notification';
import GuideScreen from './screens/GuideScreen';
import Profile from './screens/Profile';
import Wallet from "./screens/Wallet";
import MyWallet from "./screens/MyWallet"
// import RegisterScreen from './screens/RegisterScreen';
// import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Provider store={store}>
          <Stack.Navigator
          initialRouteName="Custom"
          screenOptions={{
            headerShown:false
          }}
          >
            <Stack.Screen name="Custom" component={CustomTabNavigator}/>
            <Stack.Screen name="ProductDetail" component={ProductDetail}/>
            <Stack.Screen name="Cart" component={CartScreen}/>
            <Stack.Screen name="Order" component={PlaceOrder}/>
            <Stack.Screen name="Notification" component={Notification}/>
            <Stack.Screen name="MyWallet" component={MyWallet}/>
          </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

function CustomTabNavigator(){
  return(
    <Tab.Navigator
    screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:"#047BD5",
      tabBarInactiveTintColor:"gray",
      tabBarLabelStyle:{
        paddingBottom:5,
        fontSize:11
      },
      tabBarStyle:{
        height:60
      }
    }}
    >
    <Tab.Screen name="Shop" component={Shop}
    options={{
      tabBarIcon:({focused})=>(
        <Entypo
        name="shop"
        size={27}
        color={focused ? "#047BD5" : "gray"}
        />
      )
    }}
    />
    <Tab.Screen name="Wallet" component={Wallet}
    options={{
      tabBarIcon:({focused})=>(
        <Entypo
        name="wallet"
        color={focused ? "#047BD5" : "gray"}
        size={24}
        />
      )
    }}
    />
    <Tab.Screen name="Guide" component={GuideScreen}
    options={{
      tabBarIcon:({focused})=>(
        <AntDesign
        name="rocket1"
        size={27}
        color={focused ? "#047BD5" : "gray"}
        />
      )
    }}
    />
    <Tab.Screen name="Profile" component={Profile}
    options={{
      tabBarIcon:({focused})=>(
        <Ionicons
        name="person-circle-outline"
        size={30}
        color={focused ? "#047BD5" : "gray"}
        />
      )
    }}
    />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
