import { Stack } from 'expo-router';
import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DoctorHero from './DoctorHero';
import SelectDate from './SelectDate';
import SelectTime from './SelectTime';

export const screenOptions = {
  tabBarStyle: { display: 'none' },
};

export default function AppointmentsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F8FA' }}>
      <Stack.Screen options={{ headerShown: false }} />
      <DoctorHero />
      <View style={{ marginTop: 8, flex: 1 }}>
        <SelectDate />
        <SelectTime />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.bookButton} activeOpacity={0.85}>
          <Text style={styles.bookButtonText}>Book an Appointment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 28 : 16,
    paddingTop: 8,
  },
  bookButton: {
    width: '90%',
    backgroundColor: '#3B6EF6',
    borderRadius: 28,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#3B6EF6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 3,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.2,
    fontFamily: 'Roboto-Regular',
  },
});
