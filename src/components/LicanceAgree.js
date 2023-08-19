import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../utils/constants'
const LicanceAgree = () => {
  return (
    <View style={styles.textArea}>
    <Icon
      name="checkmark-circle-outline"
      size={25}
      color={colors.secondary}
    />
    <View style={styles.textAreaRight}>
      <Text style={styles.agree}>Agree With</Text>
      <Text style={styles.licance}> Terms & Conditions</Text>
    </View>
  </View>
  )
}

export default LicanceAgree

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

})