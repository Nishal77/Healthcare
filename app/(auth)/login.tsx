import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl">Login Screen</Text>
      </View>
    </SafeAreaView>
  );
} 