import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/constants';
const SpecialIcon = ({name, pressable,onPress,style}) => {
  return (
    <>
      {pressable ? (
        <TouchableOpacity style={style} onPress={onPress}>
          <Icon name={name} size={25} color={colors.secondary} />
        </TouchableOpacity>
      ) : (
        <View style={style}>
          <Icon name={name} size={25} color={colors.secondary}  />
        </View>
      )}
    </>
  );
};

export default SpecialIcon;

const styles = StyleSheet.create({});
