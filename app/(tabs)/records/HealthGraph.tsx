import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Placeholder for a chart. In a real app, use a chart library like react-native-svg-charts or victory-native.

const HealthGraph = () => (
  <View style={styles.card}>
    <Text style={styles.title}>Health Progress</Text>
    <View style={styles.graphPlaceholder}>
      <Text style={styles.graphText}>[Graph Placeholder]</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F7F8FA',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 18,
    marginBottom: 10,
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
  graphPlaceholder: {
    height: 120,
    backgroundColor: '#E9EDC9',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  graphText: {
    color: '#AAB49A',
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default HealthGraph; 