import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/constants'
import Icon from 'react-native-vector-icons/Ionicons'
const InfoCard = ({cardTitle,cardContent,cardIcon}) => {
  return (
    <View style={styles.infoBox}>
    <Icon name={cardIcon}size={30} color={colors.primaryColor} />

    <View style={styles.infoTextBox}>
      <Text style={styles.cardTitle}>{cardTitle}</Text>
      <Text>{cardContent}</Text>
    </View>
  </View>
  )
}

export default InfoCard

const styles = StyleSheet.create({
    infoBox: {
        backgroundColor: colors.whiteColor,
        flexDirection: 'row',
    
        alignItems: 'center',
        gap: 25,
        paddingHorizontal: 10,
        paddingVertical: 15,
      },
      infoTextBox: {
        borderBottomWidth: 2,
        borderColor: colors.primaryColor,
        paddingBottom: 5,
        width: '50%',
      },

      cardTitle:{
        color:colors.primaryColor,
        fontSize:15,
        fontWeight:'700',
        marginBottom:3
      }
})