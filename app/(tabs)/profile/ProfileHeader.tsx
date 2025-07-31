import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const AVATAR = require('../../../assets/images/doctor.png'); // Use a placeholder or update path as needed

const ProfileHeader = () => (
  <View style={styles.container}>
    <Image source={AVATAR} style={styles.avatar} />
    <Text style={styles.name}>Bagja Alfatih</Text>
    <Text style={styles.email}>bagjaalfatih17@gmail.com</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginBottom: 2,
    fontFamily: 'Roboto-Regular',
  },
  email: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'Roboto-Regular',
  },
});

export default ProfileHeader; 