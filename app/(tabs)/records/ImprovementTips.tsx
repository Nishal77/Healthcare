import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const tips = [
  { icon: 'trending-up', text: 'Increase your daily step count by 10% next month.' },
  { icon: 'moon', text: 'Aim for at least 7 hours of sleep each night.' },
  { icon: 'activity', text: 'Incorporate 3 cardio sessions per week.' },
  { icon: 'smile', text: 'Practice mindfulness or meditation 10 min daily.' },
];

const ImprovementTips = () => (
  <View style={styles.card}>
    <Text style={styles.title}>Improvement Tips</Text>
    {tips.map((tip, idx) => (
      <View key={idx} style={styles.row}>
        <Feather name={tip.icon as any} size={18} color="#3B6EF6" style={{ marginRight: 10 }} />
        <Text style={styles.text}>{tip.text}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
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

export default ImprovementTips; 