import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

// Menstrual Cycle Card Component
const MenstrualCycleCard = () => {
  const cycleStatus = 'regular'; // Can be 'regular', 'irregular', 'ovulation'
  
  const getCycleData = (status: string) => {
    switch (status) {
      case 'regular':
        return {
          text: 'Regular',
          color: '#EC4899',
          bgColor: '#FDF2F8',
          icon: 'calendar-outline',
          message: 'Cycle is on track',
          value: '28 days'
        };
      case 'irregular':
        return {
          text: 'Irregular',
          color: '#F59E0B',
          bgColor: '#FFFBEB',
          icon: 'alert-circle-outline',
          message: 'Cycle needs attention',
          value: '35 days'
        };
      case 'ovulation':
        return {
          text: 'Ovulation',
          color: '#10B981',
          bgColor: '#F0FDF4',
          icon: 'flower-outline',
          message: 'Fertile window',
          value: '14 days'
        };
      default:
        return {
          text: 'Regular',
          color: '#EC4899',
          bgColor: '#FDF2F8',
          icon: 'calendar-outline',
          message: 'Cycle is on track',
          value: '28 days'
        };
    }
  };

  const cycleData = getCycleData(cycleStatus);

  return (
    <View style={[styles.cycleCard, { backgroundColor: cycleData.bgColor }]}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderLeft}>
          <Text style={styles.cardTitle}>Menstrual Cycle</Text>
          <Ionicons name={cycleData.icon as any} size={18} color={cycleData.color} />
        </View>
        <View style={[styles.cycleBadge, { backgroundColor: cycleData.color }]}>
          <Text style={styles.cycleBadgeText}>{cycleData.text}</Text>
        </View>
      </View>
      
      <View style={styles.cardBody}>
        <View style={styles.cycleContent}>
          {/* Main Value */}
          <View style={styles.cycleMain}>
            <Text style={[styles.cycleValue, { color: cycleData.color }]}>
              {cycleData.value}
            </Text>
          </View>
          
          {/* Status Message */}
          <View style={styles.statusMessage}>
            <Text style={[styles.statusText, { color: cycleData.color }]}>
              {cycleData.message}
            </Text>
          </View>
          
          {/* Cycle Progress */}
          <View style={styles.cycleProgress}>
            <View style={styles.progressBar}>
              <View 
                style={[
                  styles.progressFill, 
                  { 
                    width: cycleStatus === 'regular' ? '75%' : cycleStatus === 'ovulation' ? '50%' : '25%',
                    backgroundColor: cycleData.color 
                  }
                ]} 
              />
            </View>
            <Text style={styles.progressLabel}>Cycle Progress</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cycleCard: {
    height: '100%',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  
  // Card Header
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
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
  cycleBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  cycleBadgeText: {
    fontSize: 10,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.1,
  },
  
  // Card Body
  cardBody: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cycleContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  
  // Main Cycle Display
  cycleMain: {
    alignItems: 'center',
    marginBottom: 16,
  },
  cycleValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  
  // Status Message
  statusMessage: {
    alignItems: 'center',
    marginBottom: 16,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  
  // Cycle Progress
  cycleProgress: {
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: '#6B7280',
  },
});

export default MenstrualCycleCard; 