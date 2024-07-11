import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const HomeUserScreen = () => {
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Educa-Net</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.user}>
          <Text style={styles.userText}>Usuário</Text>
        </View>
        <View style={styles.menu}>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>HOME</Text>
          </View>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>PROFILE</Text>
          </View>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>PRACTICING</Text>
          </View>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>COURSES</Text>
          </View>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>VIDEO</Text>
          </View>
        </View>
        <View style={styles.images}>
          <View style={styles.image}>
            </View>
          <View style={styles.image}>
            </View>
          <View style={styles.image}>
            </View>
          <View style={styles.image}>
            </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f3f',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001f3f',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  user: {
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  userText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menu: {
    flexDirection: 'column',
  },
  menuItem: {
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
  },
  images: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: '48%',
    height: 150,
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default HomeUserScreen;