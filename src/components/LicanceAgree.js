import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/constants';
import SpecialIcon from './SpecialIcon';
const LicanceAgree = ({onPress, check}) => {
  return (
    <View style={styles.textArea}>
      <SpecialIcon
        pressable={true}
        onPress={onPress}
        name={check ? 'checkmark-circle' : 'checkmark-circle-outline'}
      />

      <View style={styles.textAreaRight}>
        <Text style={styles.agree}>Agree With</Text>
        <Text style={styles.licance}> Terms & Conditions</Text>
      </View>
    </View>
  );
};

export default LicanceAgree;

const styles = StyleSheet.create({
  textArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },

  textAreaRight: {
    flexDirection: 'row',
  },
  agree: {
    color: colors.whiteColor,
  },
  licance: {
    color: colors.secondary,
  },
});
