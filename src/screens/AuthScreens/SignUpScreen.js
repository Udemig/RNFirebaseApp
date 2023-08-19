import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../utils/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import SpecialInput from '../../components/SpecialInput';
import SpeacialButton from '../../components/SpeacialButton';
import LicanceAgree from '../../components/LicanceAgree';

//En dışta bir kapsayıcı
//içerde 2 bölünmüş 2 adet view
//alt vide içinde inpıtların ve butonun tuutlduğu ikcini bir view

const SignUpScreen = () => {
  const [newUserInfo, setNewUserInfo] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    userJob: '',
    userExperience: '',
    userPhoto: '',
  });

  const onChangeNewUserState = (key, value) => {
    setNewUserInfo({...newUserInfo, [key]: value});
  };

 

  return (
    //En dış kapsayıcı
    <View style={styles.mainContainer}>
      {/*ikiye bölünmüş yapıpnın üstü ksımı*/}

      <View style={styles.topContainer}>
        <Text style={styles.topContainerTitle}>
          Hala Hesabın , Yok mu ? Yeni Bir
        </Text>
        <SpeacialButton buttonTitle={'Hesab Oluştur'} style={{marginTop: 10}} />
      </View>

      {/*ikiye bölünmüş yapıpnın alt kısmı ksımı*/}

      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
          <SpecialInput
            placeholder={'Benzersiz Kullanıcı adın'}
            onChangeText={text => onChangeNewUserState('userName', text)}
            value={newUserInfo.userName}
          />
          <SpecialInput
            placeholder={'E-Mail Adresini Gir'}
            onChangeText={text => onChangeNewUserState('userEmail', text)}
            value={newUserInfo.userEmail}
          />

          <SpecialInput
            placeholder={'Çalıştığı Alan'}
            onChangeText={text => onChangeNewUserState('userJob', text)}
            value={newUserInfo.userJob}
          />

          <SpecialInput
            placeholder={'Tecrübe Yılı'}
            onChangeText={text => onChangeNewUserState('userExperience', text)}
            value={newUserInfo.userExperience}
          />

          <SpecialInput
            placeholder={'Profil Fotoğrafı'}
            onChangeText={text => onChangeNewUserState('userPhoto', text)}
            value={newUserInfo.userPhoto}
          />

          <SpecialInput
            placeholder={'Bir Şifre Belirle'}
            onChangeText={text => onChangeNewUserState('userPassword', text)}
            value={newUserInfo.userPassword}
          />
        </View>

        <View style={styles.bottomContainerBox}>
          <LicanceAgree />
          <SpeacialButton buttonTitle={'Kayıt Ol'} />
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'orange',
  },
  topContainer: {
    backgroundColor: colors.whiteColor,
    flex: 3,

    alignItems: 'center',
    justifyContent: 'center',
  },

  topContainerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomContainer: {
    backgroundColor: colors.primaryColor,
    flex: 10,
  },

  inputContainer: {
    marginTop: 15,
    gap: 15,
    marginHorizontal: 40,
  },

  bottomContainerBox: {
    marginTop: 15,
    alignItems: 'center',
    gap: 15,
  },
});
