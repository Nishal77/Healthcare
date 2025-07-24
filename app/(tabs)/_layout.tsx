import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { BottomTabBar } from '../../components/navigation/BottomTabBar';

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
        tabBar={props => <BottomTabBar {...props} />}
        initialRouteName="index"
      >
        <Tabs.Screen
          name="index"
          options={{
            href: '/',
          }}
        />
        <Tabs.Screen
          name="appointments/index"
          options={{
            href: '/appointments',
            tabBarStyle: { display: 'none' },
          }}
        />
        <Tabs.Screen
          name="routine/index"
          options={{
            href: '/routine',
          }}
        />
        <Tabs.Screen
          name="records/index"
          options={{
            href: '/records',
          }}
        />
        <Tabs.Screen
          name="profile/index"
          options={{
            href: '/profile',
          }}
        />
      </Tabs>
    </View>
  );
}