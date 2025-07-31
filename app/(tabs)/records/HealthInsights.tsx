import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const insights = [
  { icon: 'activity', text: 'Keep your daily steps above 8,000 for optimal health.' },
  { icon: 'sun', text: 'Get at least 20 minutes of sunlight every day.' },
  { icon: 'droplet', text: 'Stay hydrated: aim for 2L of water daily.' },
];

const HealthInsights = () => (
  <View style={styles.card}>
    <Text style={styles.title}>Health Insights</Text>
    {insights.map((insight, idx) => (
      <View key={idx} style={styles.row}>
        <Feather name={insight.icon as any} size={18} color="#516D28" style={{ marginRight: 10 }} />
        <Text style={styles.text}>{insight.text}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F7F8FA',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#283618',
    marginBottom: 12,
    fontFamily: 'Roboto-Regular',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    color: '#222',
    fontFamily: 'Roboto-Regular',
  },
});

export default HealthInsights; 