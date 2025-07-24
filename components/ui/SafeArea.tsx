import React from 'react';
import type { ViewProps } from 'react-native';
import { Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SafeAreaProps extends ViewProps {
  backgroundColor?: string;
  children: React.ReactNode;
}

export default function SafeArea({ backgroundColor = '#ffffff', children, style, ...props }: SafeAreaProps) {
  if (Platform.OS === 'ios') {
    return (
      <SafeAreaView
        style={[{ flex: 1, backgroundColor }, style]}
        {...props}
      >
        {children}
      </SafeAreaView>
    );
  }

  return (
    <View
      style={[{ flex: 1, backgroundColor }, style]}
      {...props}
    >
      {children}
    </View>
  );
}