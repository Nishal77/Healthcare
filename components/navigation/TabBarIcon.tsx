import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Platform } from 'react-native';

type TabBarIconProps = {
  name: keyof typeof Ionicons.glyphMap;
  color: string;
  focused: boolean;
};

export default function TabBarIcon({ name, color, focused }: TabBarIconProps) {
  return (
    <Ionicons
      name={name}
      size={Platform.OS === 'ios' ? (focused ? 24 : 22) : 24}
      color={color}
      style={{ 
        marginBottom: -3,
      }}
    />
  );
} 