import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import { Redirect } from 'expo-router';

const index = () => {
  return (
    // <View style={styles.container}>
    //   <Text>Open up index.js to start working on your app!</Text>
    //   <StatusBar style='auto' />
    // </View>
    <Redirect href="/(authenticate)/login" />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default index;
