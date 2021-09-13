import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import FetchData from '../src/FetchData';


const AppCamera = (step: any) => {

  const takePicture = () => {
    step.setStep(1);
  }

  return (
    <RNCamera
      style={{ flex: 1 }}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
    >
      {({ status }) => {
        if (status !== 'READY') return null;
        return (
          <>
            <View style={styles.top}>
              <Text style={styles.mainTXT}> QRED </Text>
              <FetchData />
            </View>
            <View style={styles.bottom}>
              <TouchableOpacity onPress={() => takePicture()} style={styles.capture}>
                <Text style={styles.btnTXT}> Scan </Text>
              </TouchableOpacity>
            </View>
          </>
        );
      }}
    </RNCamera>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  bottom: {
    width: '100%',
    height: 150,
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 0
  },
  top: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#81f542',
    paddingTop: 34,
    top: 0
  },
  capture: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75 / 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  btnTXT: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  mainTXT: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white'
  }
});



export default AppCamera;
