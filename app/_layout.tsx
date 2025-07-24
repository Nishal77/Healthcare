import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    const hideSplash = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    hideSplash();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          {Platform.OS === 'ios' && (
            <View style={{ height: 47, backgroundColor: 'white' }} />
          )}
          <Stack
            screenOptions={{
              headerShown: false,
              animation: Platform.OS === 'ios' ? 'default' : 'fade',
              animationDuration: 200,
              gestureEnabled: Platform.OS === 'ios',
              gestureDirection: 'horizontal',
              contentStyle: { backgroundColor: 'white' },
            }}
          >
            <Stack.Screen 
              name="(tabs)" 
              options={{ 
                headerShown: false,
                gestureEnabled: false,
              }} 
            />
            <Stack.Screen 
              name="(auth)/login" 
              options={{ 
                headerShown: false,
                presentation: 'modal',
                gestureEnabled: true,
              }} 
            />
            <Stack.Screen 
              name="modals/settings" 
              options={{ 
                headerShown: false,
                presentation: 'modal',
                gestureEnabled: true,
              }} 
            />
            <Stack.Screen 
              name="onboarding" 
              options={{ 
                headerShown: false,
                gestureEnabled: false,
              }} 
            />
          </Stack>
          <StatusBar style="dark" />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}