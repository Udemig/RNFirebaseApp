import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../screens/AuthScreens/SignInScreen'
import SignUpScreen from '../screens/AuthScreens/SignUpScreen'
const AuthNavigation = () => {

    const Stack=createNativeStackNavigator()

  return (
 <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
    <Stack.Screen name='SignInScreen' component={SignInScreen}/>
 </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})