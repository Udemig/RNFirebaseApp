import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Avatar = ({type,imageSource}) => {
  return (
    <View
      style={
        type == 'small'
          ? styles.imageBoxMini
          : type == 'large'
          ? styles.imageBox
          : styles.imageBoxMini
      }>
      <Image
        style={styles.image}
        source={{
          uri: imageSource,
        }}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  imageBoxMini: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderRadius: 25,
    borderColor: 'gray',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    objectFit:'fill',
    resizeMode:'center',
  
    
  },
  imageBox: {
    width: 200,
    height: 200,
    borderWidth: 6,
    borderColor: 'gray',
    borderRadius: 100,
  },
});
