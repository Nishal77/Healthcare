import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import DigestionGraph from './DigestionGraph';

const { width } = Dimensions.get('window');

// Digestion Card Component
const DigestionCard = () => {

  return (
    <View style={styles.mediumCard}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderLeft}>
          <Text style={styles.cardTitle}>Digestion</Text>
          <Ionicons name="restaurant-outline" size={18} color="#10B981" />
        </View>
        <View style={styles.digestionStatusBadge}>
          <Text style={styles.digestionStatusText}>Balanced</Text>
        </View>
      </View>
      
      <View style={styles.cardBody}>
        <View style={styles.digestionContent}>
          {/* Chart Section */}
          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Weekly Trend</Text>
            <DigestionGraph />
          </View>
          
          {/* Last Logged Info */}
          <View style={styles.digestionDetails}>
            <Text style={styles.lastLoggedLabel}>Last Logged: 2:30 PM</Text>
            <Text style={styles.lastLoggedMeal}>Lunch – Rice & Lentils</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mediumCard: {
    height: 210,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  
  // Card Content Styles
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  cardBody: {
    flex: 1,
    justifyContent: 'space-between',
  },
  
  // Digestion Specific Styles
  digestionContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  digestionStatusSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  statusLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  digestionMessage: {
    marginBottom: 16,
  },
  digestionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  chartContainer: {
    marginBottom: 8,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  digestionDetails: {
    marginBottom: 68,
  },
  lastLoggedLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 4,
  },
  lastLoggedMeal: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  digestionMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  metricItem: {
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
    marginTop: 4,
  },
  metricLabel: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 2,
  },
  digestionStatusBadge: {
    backgroundColor: '#10B981',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  digestionStatusText: {
    fontSize: 10,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.1,
  },
  balancedStatusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#10B981',
  },
});

export default DigestionCard; 