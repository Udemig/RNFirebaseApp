import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUpScreen from './src/screens/AuthScreens/SignUpScreen'
import { colors } from './src/utils/constants'
import ProfileScreen from './src/screens/HomeScreens/ProfileScreen'

const App = () => {
  return (
   <SafeAreaView style={{flex:1,backgroundColor:colors.primaryColor}}>
    <StatusBar backgroundColor={colors.primaryColor}/>
  <ProfileScreen/>
   </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})