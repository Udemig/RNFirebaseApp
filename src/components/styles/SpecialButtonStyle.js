
import { StyleSheet } from "react-native"
import { colors } from "../../utils/constants"
export const ButtonStyle =StyleSheet.create({
    button: {
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 50,
      
      },
    
      buttonTitle: {
        color: colors.textColor,
        fontSize: 20,
        fontWeight: 'bold',
      },
})