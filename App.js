import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SignUpScreen from './src/screens/AuthScreens/SignUpScreen';
import {colors} from './src/utils/constants';
import ProfileScreen from './src/screens/HomeScreens/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './src/navigation/AuthNavigation';
import RootNavigation from './src/navigation/RootNavigation';
import { DataProvider } from './src/context/DataContext';

const App = () => {


  return (
<DataProvider>
<SafeAreaView style={{flex: 1, backgroundColor: colors.primaryColor}}>
      <StatusBar backgroundColor={colors.primaryColor} />
<RootNavigation/>
    </SafeAreaView>
</DataProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
