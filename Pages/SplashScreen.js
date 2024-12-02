import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('LoginPage')}>
      <Text style={styles.title}>YAYSTOCK</Text>
      <Text style={styles.text}>Stock Aman, Kerja Nyaman!</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F5EA',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#E75A7C',
    marginBottom: 20,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SplashScreen;
