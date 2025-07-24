import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useRouter, useSegments } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TabBarProps {
  state: any;
  navigation: any;
}

export function BottomTabBar({ state, navigation }: TabBarProps) {
  const router = useRouter();
  const segments = useSegments();

  // Fix: Only access segments[1] and segments[2] if length is sufficient
  if (
    Array.isArray(segments) &&
    (
      (segments.length === 2 && segments[1] === 'appointments') ||
      (segments.length === 3 && segments[1] === 'appointments' && segments[2] === 'index')
    )
  ) {
    return null;
  }

  const tabs = [
    { name: 'index', label: 'Home', icon: 'home-outline', activeIcon: 'home' },
    { name: 'appointments/index', label: 'Appointments', icon: 'calendar-outline', activeIcon: 'calendar' },
    { name: 'routine/index', label: 'Routine', icon: 'time-outline', activeIcon: 'time' },
    { name: 'records/index', label: 'Records', icon: 'document-text-outline', activeIcon: 'document-text' },
    { name: 'profile/index', label: 'Profile', icon: 'person-outline', activeIcon: 'person' },
  ];

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && (
        <BlurView
          tint="light"
          intensity={80}
          style={StyleSheet.absoluteFill}
        />
      )}
      <View style={styles.content}>
        {tabs.map((tab, index) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: tab.name,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              if (tab.name === 'index') {
                router.replace('/');
              } else {
                router.push(`/${tab.name.split('/')[0]}`);
              }
            }
          };

          return (
            <TouchableOpacity
              key={tab.name}
              onPress={onPress}
              style={styles.tab}
              activeOpacity={0.7}
            >
              <Ionicons
                name={(isFocused ? tab.activeIcon : tab.icon) as any}
                size={24}
                color={isFocused ? '#6C63FF' : '#9CA3AF'}
              />
              <Text style={[
                styles.label,
                { color: isFocused ? '#6C63FF' : '#9CA3AF' }
              ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Platform.select({
      ios: 'transparent',
      android: '#fff',
    }),
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: Platform.OS === 'ios' ? 84 : 60,
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: 'Roboto-Regular',
  },
}); 