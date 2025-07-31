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

  const segmentsArr = Array.isArray(segments) ? segments : [];
  if (
    segmentsArr.length === 2 && segmentsArr[1] === 'appointments'
      || (segmentsArr.length === 3 && segmentsArr[1] === 'appointments' && segmentsArr[2] === 'index')
  ) {
    return null;
  }

  const tabs = [
    { name: 'index', label: 'Home', icon: 'home-outline', activeIcon: 'home' },
    { name: 'appointments/index', label: 'Visit', icon: 'calendar-number-outline', activeIcon: 'calendar' },
    { name: 'routine/index', label: 'Routine', icon: 'repeat-outline', activeIcon: 'time' },
    { name: 'records/index', label: 'Records', icon: 'folder-open-outline', activeIcon: 'document-text' },
    { name: 'profile/index', label: 'Profile', icon: 'person-outline', activeIcon: 'person' },
  ];

  return (
    <View style={styles.outerWrapper}>
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
                color={isFocused ? '#FFFFFF' : '#AAB49A'}
              />
              <Text style={[
                styles.label,
                { color: isFocused ? '#FFFFFF' : '#AAB49A' }
              ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerWrapper: {
    position: 'absolute',
    left: 24, // mx-6 (24px)
    right: 24,
    bottom: Platform.OS === 'ios' ? 24 : 16,
    zIndex: 100,
    // For shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 8,
  },
  container: {
    backgroundColor: '#283618',
    borderRadius: 40,
    height: Platform.OS === 'ios' ? 68 : 56,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0,
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    height: '100%',
    paddingHorizontal: 8,
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