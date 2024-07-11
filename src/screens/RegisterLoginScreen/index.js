import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const RegisterLoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Make the CHANGE</Text>
        <Text style={styles.title}>and change the way you learn</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Diam maecenas mi non sed ut odio. Non, justo, sed facilisi
          et. Eget viverra urna, vestibulum egestas faucibus
          egestas. Sagittis nam velit volutpat eu nunc.
        </Text>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00296b',
  },
  header: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    color: 'white',
    fontSize: 18,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    width: '45%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default RegisterLoginScreen;