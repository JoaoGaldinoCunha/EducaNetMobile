import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet,Image, View, Text, ActivityIndicator } from 'react-native';
import logoImage from '../../../img/imagemTela1.png'



export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImage}/>
      <Text style={styles.title}>EDUCA NET ESTÁ INICIANDO...</Text>
      <View style={styles.progressBar}>
        <View style={styles.progressBarFill} />
        <StatusBar style="auto" />
      </View>
      <ActivityIndicator size="large" color="#007bff" style={styles.loader} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 200,
    marginBottom:20,
    borderRadius:  100
  },
  container: {
    flex: 1,
    backgroundColor: '#001f3f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
  progressBar: {
    width: '80%',
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 20,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#007bff',
    borderRadius: 10,
  },
  loader: {
    marginBottom: 20,
  },
});
