import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

export default function RecordsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl font-semibold">Records</Text>
      </View>
    </SafeAreaView>
  );
} 