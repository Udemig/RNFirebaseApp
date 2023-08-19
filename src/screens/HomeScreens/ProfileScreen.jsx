import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/constants';
import SpeacialButton from '../../components/SpeacialButton';
import SpecialIcon from '../../components/SpecialIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import InfoCard from '../../components/InfoCard';
import Avatar from '../../components/Avatar';
const ProfileScreen = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.topBox}>
        {/*Sol taraftaki resim ve yazıları barından yapı*/}

        <View style={styles.topBoxLeft}>
          <Avatar
            type={'small'}
            imageSource={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s'
            }
          />
        </View>
        <View style={styles.topBoxMiddle}>
          {/*Resmi Kapsayan kutu*/}
          <Avatar
            type={'large'}
            imageSource={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s'
            }
          />

          <Text style={styles.userName}>Kullanıcı Adı</Text>
          <SpeacialButton
            buttonTitle={'Çıkış Yap'}
            style={{backgroundColor: colors.redColor}}
          />
        </View>

        {/*Sağ taraftaki icon için alan*/}

        <View style={styles.topBoxRight}>
          <Icon name="clipboard" size={40} color={colors.primaryColor} />
        </View>
      </View>

      <View style={styles.bottomBox}>
        <View style={styles.bottomInfoBox}>
          <InfoCard
            cardContent={'hasan@gmail.com'}
            cardIcon={'mail'}
            cardTitle={'E-Mail'}
          />

          <InfoCard
            cardContent={'React Native '}
            cardIcon={'code-working'}
            cardTitle={'Çalıştığı Bölüm'}
          />
          <InfoCard
            cardContent={'5'}
            cardIcon={'layers'}
            cardTitle={'Tecrübe Yılı'}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  topBox: {
    backgroundColor: colors.whiteColor,
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    
  },
  topBoxLeft: {
    marginTop: 15,
    marginRight: 20,
  },
  topBoxMiddle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    gap: 15,
    marginRight: 40,
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
  },
  topBoxRight: {
    marginTop: 15,
    marginRight: 30,
  },

  bottomBox: {
    flex: 6,
  },

  bottomInfoBox: {
    marginTop: 25,
    marginHorizontal: 20,
    gap: 15,
  },
});
