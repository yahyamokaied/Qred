import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AppCamera from './src/AppCamera';
import Pay from './src/Pay';

const App = () => {

  const [step, setStep] = useState<number>(0);

  return (
    <View style={styles.Container}>
      {step == 0 ? <AppCamera step={step} setStep={setStep} /> : <Pay step={step} setStep={setStep} />}
    </View>
  );

};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
  }
});

export default App;
