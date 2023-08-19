import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import { colors } from '../utils/constants'
import { ButtonStyle } from './styles/SpecialButtonStyle'
const SpeacialButton = ({buttonTitle,style}) => {
  return (
    <TouchableOpacity style={[ButtonStyle.button,style]}>
    <Text style={ButtonStyle.buttonTitle}>{buttonTitle}</Text>
  </TouchableOpacity>
  )
}

export default SpeacialButton

