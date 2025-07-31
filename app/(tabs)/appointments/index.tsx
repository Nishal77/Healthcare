import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DoctorHero from './DoctorHero';
import ScheduledAppointment from './ScheduledAppointment';
import SelectDate from './SelectDate';
import SelectTime from './SelectTime';

export const screenOptions = {
  tabBarStyle: { display: 'none' },
};

export default function AppointmentsScreen() {
  const [isAppointmentScheduled, setIsAppointmentScheduled] = useState(false);
  const [selectedDate, setSelectedDate] = useState('December 15, 2024');
  const [selectedTime, setSelectedTime] = useState('9:00 AM');

  const handleBookAppointment = () => {
    setIsAppointmentScheduled(true);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F8FA' }}>
      <Stack.Screen options={{ headerShown: false }} />
      <DoctorHero />
      <ScrollView 
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={{ marginTop: 8 }}>
          <SelectDate />
          <ScheduledAppointment 
            date={selectedDate}
            time={selectedTime}
            isVisible={isAppointmentScheduled}
          />
          <SelectTime />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.callButton} activeOpacity={0.85}>
            <Ionicons name="call" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.bookButton} 
            activeOpacity={0.85}
            onPress={handleBookAppointment}
          >
            <Text style={styles.bookButtonText}>Book an Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 120, // Space for footer buttons
  },
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
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    width: '90%',
  },
  callButton: {
    width: 56,
    height: 56,
    backgroundColor: '#10B981',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  bookButton: {
    flex: 1,
    backgroundColor: '#283618',
    borderRadius: 28,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.2,
    fontFamily: 'Roboto-Regular',
  },
});
