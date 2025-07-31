import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

// Energy Card Component with Modern Emoji Design
const EnergyCard = () => {
  const energyLevel = 'high'; // Can be 'high', 'medium', 'low'
  
  const getMoodData = (level: string) => {
    switch (level) {
      case 'high':
        return {
          emoji: '😄',
          color: '#22C55E',
          value: '85%'
        };
      case 'medium':
        return {
          emoji: '😊',
          color: '#F59E0B',
          value: '65%'
        };
      case 'low':
        return {
          emoji: '😴',
          color: '#EF4444',
          value: '35%'
        };
      default:
        return {
          emoji: '😄',
          color: '#22C55E',
          value: '85%'
        };
    }
  };

  const moodData = getMoodData(energyLevel);

  return (
    <View style={styles.energyCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Energy</Text>
        <View style={[styles.energyBadge, { backgroundColor: moodData.color }]}>
          <Text style={styles.energyBadgeText}>Daily</Text>
        </View>
      </View>
      
      <View style={styles.cardBody}>
        <View style={styles.energyContent}>
          {/* Main Emoji */}
          <View style={styles.energyMain}>
            <Text style={styles.energyEmoji}>{moodData.emoji}</Text>
          </View>
          
          {/* Energy Bar */}
          <View style={styles.energyBarContainer}>
            <View style={styles.energyBar}>
              <View 
                style={[
                  styles.energyBarFill, 
                  { 
                    width: moodData.value,
                    backgroundColor: moodData.color 
                  }
                ]} 
              />
            </View>
            <Text style={styles.energyBarLabel}>Energy Level</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  energyCard: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  
  // Card Header
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
  },
  energyBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  energyBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.2,
  },
  
  // Card Body
  cardBody: {
    flex: 1,
    justifyContent: 'center',
  },
  energyContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Main Energy Display
  energyMain: {
    alignItems: 'center',
    marginBottom: 20,
  },
  energyEmoji: {
    fontSize: 56,
  },
  
  // Energy Bar
  energyBarContainer: {
    alignItems: 'center',
    width: '100%',
  },
  energyBar: {
    width: '100%',
    height: 10,
    backgroundColor: '#F3F4F6',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 8,
  },
  energyBarFill: {
    height: '100%',
    borderRadius: 5,
  },
  energyBarLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
  },
});

export default EnergyCard; 