import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {colors} from '../utils/constants';
const SpecialInput = ({value, placeholder, onChangeText}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={'gray'}
      onChangeText={onChangeText}
      value={value}
      style={styles.input}
    />
  );
};

export default SpecialInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.whiteColor,
    borderBottomWidth: 2,
    borderBottomColor: colors.secondary,
    paddingBottom: 2,
    padding: 8,
    fontSize: 20,
  },
});
