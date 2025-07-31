import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MENU_ITEMS = [
  { label: 'My Profile', icon: <Ionicons name="person-outline" size={22} color="#222" /> },
  { label: 'Settings', icon: <Ionicons name="settings-outline" size={22} color="#222" /> },
  { label: 'Notifications', icon: <Ionicons name="notifications-outline" size={22} color="#222" /> },
  { label: 'Transaction History', icon: <MaterialIcons name="receipt-long" size={22} color="#222" /> },
  { label: 'FAQ', icon: <Feather name="help-circle" size={22} color="#222" /> },
  { label: 'About App', icon: <Ionicons name="information-circle-outline" size={22} color="#222" /> },
];

const ProfileMenu = () => (
  <View style={styles.menuContainer}>
    {MENU_ITEMS.map((item, idx) => (
      <TouchableOpacity key={item.label} style={styles.menuItem} activeOpacity={0.7}>
        <View style={styles.icon}>{item.icon}</View>
        <Text style={styles.label}>{item.label}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  menuContainer: {
    marginHorizontal: 24,
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  icon: {
    width: 32,
    alignItems: 'center',
    marginRight: 12,
  },
  label: {
    fontSize: 16,
    color: '#222',
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
  },
});

export default ProfileMenu; 