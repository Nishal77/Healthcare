import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LogoutButton = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <Feather name="log-out" size={20} color="#F34B5E" style={{ marginRight: 8 }} />
      <Text style={styles.label}>Logout</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF0F2',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  label: {
    color: '#F34B5E',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
  },
});

export default LogoutButton; 