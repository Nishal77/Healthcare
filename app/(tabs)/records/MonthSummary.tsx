import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MonthSummary = () => (
  <View style={styles.card}>
    <Text style={styles.title}>1 Month Summary</Text>
    <Text style={styles.summary}>Great job! You maintained consistent activity and made progress in key health areas. Keep up the momentum for next month.</Text>
    <View style={styles.statsRow}>
      <View style={styles.statItem}>
        <Ionicons name="star-outline" size={18} color="#FBBF24" style={{ marginRight: 6 }} />
        <Text style={styles.statText}>Best Day: July 12</Text>
      </View>
      <View style={styles.statItem}>
        <Ionicons name="trending-up-outline" size={18} color="#3B6EF6" style={{ marginRight: 6 }} />
        <Text style={styles.statText}>Most Improved: Steps</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E9EDC9',
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
    marginBottom: 10,
    fontFamily: 'Roboto-Regular',
  },
  summary: {
    fontSize: 15,
    color: '#222',
    marginBottom: 14,
    fontFamily: 'Roboto-Regular',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 14,
    color: '#516D28',
    fontFamily: 'Roboto-Regular',
  },
});

export default MonthSummary; 