import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const stats = [
  { icon: 'trending-up-outline', value: '82%', label: 'Recovery Rate', color: '#3B6EF6' },
  { icon: 'heart-outline', value: '76%', label: 'Heart Health', color: '#F34B5E' },
  { icon: 'walk-outline', value: '10,200', label: 'Steps Avg', color: '#516D28' },
];

const StatsSummary = () => (
  <View style={styles.row}>
    {stats.map((stat) => (
      <View key={stat.label} style={styles.statBox}>
        <Ionicons name={stat.icon as any} size={22} color={stat.color} style={{ marginBottom: 6 }} />
        <Text style={[styles.value, { color: stat.color }]}>{stat.value}</Text>
        <Text style={styles.label}>{stat.label}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 18,
    marginTop: 2,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 18,
    marginHorizontal: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  value: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 2,
    fontFamily: 'Roboto-Regular',
  },
  label: {
    fontSize: 13,
    color: '#888',
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
  },
});

export default StatsSummary; 