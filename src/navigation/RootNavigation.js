import { StyleSheet, Text, View } from 'react-native'
import React,{useContext, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthNavigation from './AuthNavigation'
import ProfileScreen from '../screens/HomeScreens/ProfileScreen'
import { Data } from '../context/DataContext'
const RootNavigation = () => {
    const Stack = createNativeStackNavigator();
 const{user}=useContext(Data)
  return (
   
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user ? (
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      ) : (
        <Stack.Screen name="AuthScreens" component={AuthNavigation} />
      )}
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})