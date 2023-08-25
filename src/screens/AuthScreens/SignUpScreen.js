import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../utils/constants';
import SpecialInput from '../../components/SpecialInput';
import SpeacialButton from '../../components/SpeacialButton';
import LicanceAgree from '../../components/LicanceAgree';
import { useNavigation } from '@react-navigation/native';

//En dışta bir kapsayıcı
//içerde 2 bölünmüş 2 adet view
//alt vide içinde inpıtların ve butonun tuutlduğu ikcini bir view

const SignUpScreen = () => {
  const [check, setCheck] = useState(false);
  const [security,setSecurity]=useState(true)
const navigaiton=useNavigation()

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

 const validate=()=>{
  if(check){
    navigaiton.navigate('ProfileScreen')
  }else{
    Alert.alert('Lütfen Sözleşmeyi Kabul Ediniz')
  }
 }

  return (
    //En dış kapsayıcı
    <View style={styles.mainContainer}>
      {/*ikiye bölünmüş yapıpnın üstü ksımı*/}

      <View style={styles.topContainer}>
        <Text style={styles.topContainerTitle}>
          Hala Hesabın , Yok mu ? Yeni Bir Hesap Oluştur 
                                                 
        </Text>
        <Text style={styles.topContainerTitle}> ya da</Text>
        <SpeacialButton buttonTitle={'Giriş Yap'} 
        style={{marginTop: 10}} 
        onPress={()=>navigaiton.navigate('SignInScreen')}/>
      </View>

      {/*ikiye bölünmüş yapıpnın alt kısmı ksımı*/}

      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
          <SpecialInput
          iconName={'person'}
            placeholder={'Benzersiz Kullanıcı adın'}
            onChangeText={text => onChangeNewUserState('userName', text)}
            value={newUserInfo.userName}
          />
          <SpecialInput
          iconName={'mail'}
            placeholder={'E-Mail Adresini Gir'}
            onChangeText={text => onChangeNewUserState('userEmail', text)}
            value={newUserInfo.userEmail}
          />

          <SpecialInput
          iconName={'code-working'}
            placeholder={'Çalıştığı Alan'}
            onChangeText={text => onChangeNewUserState('userJob', text)}
            value={newUserInfo.userJob}
          />

          <SpecialInput
          iconName={'layers'}
            placeholder={'Tecrübe Yılı'}
            onChangeText={text => onChangeNewUserState('userExperience', text)}
            value={newUserInfo.userExperience}
          />

          <SpecialInput
          iconName={'image'}
            placeholder={'Profil Fotoğrafı'}
            onChangeText={text => onChangeNewUserState('userPhoto', text)}
            value={newUserInfo.userPhoto}
          />

          <SpecialInput
          iconName={security?'eye':'eye-off'}
          secureTextEntry={security}
            placeholder={'Bir Şifre Belirle'}
            onChangeText={text => onChangeNewUserState('userPassword', text)}
            value={newUserInfo.userPassword}
            onPress={()=>setSecurity(!security)}
          />
        </View>

        <View style={styles.bottomContainerBox}>
          <LicanceAgree onPress={()=>setCheck(!check) } check={check}/>
        {
          check?  <SpeacialButton buttonTitle={'Kayıt Ol'} onPress={()=>validate()} />:null
        }
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
