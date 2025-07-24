import { Stack } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AppointmentsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl font-semibold">Appointments</Text>
      </View>
    </SafeAreaView>
  );
}
