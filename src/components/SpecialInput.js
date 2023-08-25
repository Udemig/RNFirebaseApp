import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils/constants';
import SpecialIcon from './SpecialIcon';
const SpecialInput = ({
  value,
  placeholder,
  onChangeText,
  secureTextEntry = false,
  iconName,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={secureTextEntry ? true : false}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
      />
      {iconName ? (
        <SpecialIcon
          onPress={onPress}
          style={styles.icon}
          pressable={secureTextEntry && true}
          name={iconName}
        />
      ) : null}
    </View>
  );
};

export default SpecialInput;

const styles = StyleSheet.create({
  container: {},
  input: {
    backgroundColor: colors.whiteColor,
    borderBottomWidth: 2,
    borderBottomColor: colors.secondary,
    paddingBottom: 2,
    padding: 8,
    fontSize: 20,
  },

  icon: {
    position: 'absolute',
    right: 5,
    top: 5,
  },
});
