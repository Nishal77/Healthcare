import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { CircularProgress } from 'react-native-circular-progress';

const { width } = Dimensions.get('window');

// Dosha Card Component (Large Orange Card)
const DoshaCard = () => {
  return (
    <View style={styles.largeCard}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderLeft}>
          <Ionicons name="leaf-outline" size={20} color="white" />
          <Text style={styles.cardTitle}>Current Dosha</Text>
        </View>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>Balanced</Text>
        </View>
      </View>
      
      <View style={styles.cardBody}>
        <View style={styles.doshaMain}>
          <Text style={styles.doshaValue}>Vata</Text>
          <Text style={styles.doshaPercentage}>45%</Text>
        </View>
        
        <View style={styles.doshaBars}>
          <View style={styles.doshaBarItem}>
            <View style={styles.doshaBarHeader}>
              <Text style={styles.doshaBarLabel}>Vata</Text>
              <Text style={styles.doshaBarValue}>45%</Text>
            </View>
            <View style={styles.doshaBar}>
              <View style={[styles.doshaBarFill, { width: '45%', backgroundColor: '#FCD34D' }]} />
            </View>
          </View>
          
          <View style={styles.doshaBarItem}>
            <View style={styles.doshaBarHeader}>
              <Text style={styles.doshaBarLabel}>Pitta</Text>
              <Text style={styles.doshaBarValue}>30%</Text>
            </View>
            <View style={styles.doshaBar}>
              <View style={[styles.doshaBarFill, { width: '30%', backgroundColor: '#EF4444' }]} />
            </View>
          </View>
          
          <View style={styles.doshaBarItem}>
            <View style={styles.doshaBarHeader}>
              <Text style={styles.doshaBarLabel}>Kapha</Text>
              <Text style={styles.doshaBarValue}>25%</Text>
            </View>
            <View style={styles.doshaBar}>
              <View style={[styles.doshaBarFill, { width: '25%', backgroundColor: '#10B981' }]} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

// Water Intake Card Component
const WaterIntakeCard = () => {
  const glassesDrunk = 7;
  const totalGlasses = 8;
  const progress = (glassesDrunk / totalGlasses) * 100;

  return (
    <View style={styles.smallCard}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderLeft}>
          <Text style={styles.waterTitle}>Water Intake</Text>
          <Ionicons name="water-outline" size={20} color="#3B82F6" />
        </View>
      </View>
      
      <View style={styles.cardBody}>
        <View style={styles.waterProgressContainer}>
          <CircularProgress
            size={100}
            width={8}
            fill={progress}
            tintColor="#3B82F6"
            backgroundColor="#E5E7EB"
            rotation={0}
            lineCap="round"
            children={() => (
              <View style={styles.waterProgressContent}>
                <Text style={styles.waterProgressValue}>{glassesDrunk}/{totalGlasses}</Text>
                <Text style={styles.waterProgressUnit}>glass</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

// Sleep Tracker Card Component
const SleepTrackerCard = () => {
  return (
    <View style={styles.smallCard}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderLeft}>
          <Text style={styles.sleepTitle}>Sleep</Text>
          <Ionicons name="moon-outline" size={20} color="#F97316" />
        </View>
        <View style={styles.sleepStatusBadge}>
          <Text style={styles.sleepStatusText}>Balanced</Text>
        </View>
      </View>
      
      <View style={styles.cardBody}>
        <View style={styles.sleepDisplay}>
          <Text style={styles.sleepValue}>7hr 40min</Text>
        </View>
      </View>
    </View>
  );
};

// Digestion Card Component
const DigestionCard = () => {
  const digestionStatus = 'proper'; // Can be 'proper', 'poor', 'moderate'
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'proper': return '#10B981';
      case 'poor': return '#F59E0B';
      case 'moderate': return '#F97316';
      default: return '#10B981';
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case 'proper': return 'Proper';
      case 'poor': return 'Poor';
      case 'moderate': return 'Moderate';
      default: return 'Proper';
    }
  };
  
  const getStatusMessage = (status: string) => {
    switch (status) {
      case 'proper': return 'Your digestive system is working well';
      case 'poor': return 'Consider dietary adjustments';
      case 'moderate': return 'Your digestion needs attention';
      default: return 'Your digestive system is working well';
    }
  };

  return (
    <View style={styles.mediumCard}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderLeft}>
          <Text style={styles.cardTitle}>Digestion</Text>
          <Ionicons name="restaurant-outline" size={18} color={getStatusColor(digestionStatus)} />
        </View>
        <View style={[styles.digestionStatusBadge, { backgroundColor: getStatusColor(digestionStatus) }]}>
          <Text style={styles.digestionStatusText}>{getStatusText(digestionStatus)}</Text>
        </View>
      </View>
      
      <View style={styles.cardBody}>
        <View style={styles.digestionContent}>
          <View style={styles.digestionStatusSection}>
            <Text style={styles.statusLabel}>Status:</Text>
            <Text style={[styles.digestionStatusText, { color: getStatusColor(digestionStatus) }]}>
              {getStatusText(digestionStatus)}
            </Text>
          </View>
          
          <View style={styles.digestionMessage}>
            <Text style={[styles.digestionSubtitle, { color: getStatusColor(digestionStatus) }]}>
              {getStatusMessage(digestionStatus)}
            </Text>
          </View>
          
          <View style={styles.digestionDetails}>
            <Text style={styles.lastLoggedLabel}>Last Logged: 2:30 PM</Text>
            <Text style={styles.lastLoggedMeal}>Lunch – Rice & Lentils</Text>
          </View>
          
          <View style={styles.digestionMetrics}>
            <View style={styles.metricItem}>
              <Ionicons name="time-outline" size={16} color="#6B7280" />
              <Text style={styles.metricValue}>3</Text>
              <Text style={styles.metricLabel}>Meals</Text>
            </View>
            <View style={styles.metricItem}>
              <Ionicons name="water-outline" size={16} color="#6B7280" />
              <Text style={styles.metricValue}>2.5L</Text>
              <Text style={styles.metricLabel}>Water</Text>
            </View>
            <View style={styles.metricItem}>
              <Ionicons name="trending-up-outline" size={16} color="#6B7280" />
              <Text style={styles.metricValue}>85%</Text>
              <Text style={styles.metricLabel}>Score</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

// Heart Rate Card Component
const HeartRateCard = () => {
  return (
    <View style={styles.smallCard}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderLeft}>
          <Ionicons name="heart-outline" size={18} color="#EF4444" />
          <Text style={styles.cardTitle}>GAiNT H</Text>
        </View>
      </View>
      
      <View style={styles.cardBody}>
        <Text style={styles.heartValue}>3</Text>
        <Text style={styles.heartUnit}>bpm</Text>
      </View>
      <View style={styles.cardBody}>
      <Text style={styles.heartValue}>3</Text>
      <Text style={styles.heartUnit}>GAINT IS A GANDU</Text>
        

      </View>

      
    </View>
    
  );
};

// Calories Card Component
const CaloriesCard = () => {
  return (
    <View style={styles.smallCard}>
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderLeft}>
          <Ionicons name="flame-outline" size={18} color="#22C55E" />
          <Text style={styles.cardTitle}>Calories</Text>
        </View>
      </View>
      
      <View style={styles.cardBody}>
        <Text style={styles.caloriesValue}>245</Text>
        <Text style={styles.caloriesUnit}>Kcal</Text>
      </View>
    </View>
  );
};

// Main Activity Component
export default function Activity() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Activity</Text>
      </View>
      
      <View style={styles.metricsContainer}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          <View style={styles.largeCardContainer}>
            <DoshaCard />
          </View>
          <View style={styles.mediumCardContainer}>
            <DigestionCard />
          </View>
          <View style={styles.smallCardContainer}>
            <HeartRateCard />
          </View>
        </View>
        
        {/* Right Column */}
        <View style={styles.rightColumn}>
          <View style={styles.smallCardContainer}>
            <SleepTrackerCard />
          </View>
          <View style={styles.mediumCardContainer}>
            <WaterIntakeCard />
          </View>
          <View style={styles.largeCardContainer}>
            <CaloriesCard />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8fafc',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  metricsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  leftColumn: {
    flex: 1,
    gap: 16,
  },
  rightColumn: {
    flex: 1,
    gap: 16,
  },
  largeCardContainer: {
    height: 256,
  },
  mediumCardContainer: {
    height: 192,
  },
  smallCardContainer: {
    height: 128,
  },
  
  // Card Base Styles
  largeCard: {
    height: '100%',
    backgroundColor: '#f6bd60',
    borderRadius: 24,
    padding: 16,
    shadowColor: '#f6bd60',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  smallCard: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  mediumCard: {
    height: 220,
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
  statusBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '600',
    color: 'white',
  },
  qualityBadge: {
    backgroundColor: '#F3E8FF',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  qualityText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#8B5CF6',
  },
  cardBody: {
    flex: 1,
    justifyContent: 'space-between',
  },
  
  // Dosha Specific Styles
  doshaMain: {
    alignItems: 'center',
    marginBottom: 16,
  },
  doshaValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  doshaPercentage: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  doshaBars: {
    gap: 8,
  },
  doshaBarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  doshaBarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  doshaBarLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
    width: 40,
  },
  doshaBarValue: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
  doshaBar: {
    flex: 1,
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  doshaBarFill: {
    height: '100%',
    borderRadius: 3,
  },
  
  // Water Specific Styles
  waterCount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3B82F6',
  },
  waterProgress: {
    alignItems: 'center',
    marginBottom: 12,
  },
  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6B7280',
  },
  waterGlasses: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  waterGlass: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  waterGlassFilled: {
    backgroundColor: '#DBEAFE',
  },
  
  // Sleep Specific Styles
  sleepDisplay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sleepValue: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#F97316',
    textAlign: 'center',
  },
  sleepUnit: {
    fontSize: 14,
    color: '#6B7280',
  },
  sleepTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
    marginRight: 6,
  },
  sleepStatusBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  sleepStatusText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#F59E0B',
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
  digestionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#10B981',
    marginBottom: 6,
  },
  digestionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  digestionDetails: {
    marginBottom: 20,
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
  digestionStatus: {
    fontSize: 14,
    fontWeight: '600',
    color: '#10B981',
    marginBottom: 4,
  },
  digestionFeeling: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 8,
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
  
  // Simple Value Styles
  exerciseValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#14B8A6',
    textAlign: 'center',
  },
  exerciseUnit: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  heartValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EF4444',
    textAlign: 'center',
  },
  heartUnit: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  caloriesValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#22C55E',
    textAlign: 'center',
  },
  caloriesUnit: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  waterTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
    marginRight: 6,
  },
  waterProgressContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  waterProgressCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderWidth: 8,
    borderColor: '#E5E7EB',
  },
  waterProgressBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 50,
    borderWidth: 8,
    borderColor: '#E5E7EB',
  },
  waterProgressArc: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 50,
    borderWidth: 8,
    borderColor: '#22C55E',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ rotate: '-90deg' }],
  },
  waterProgressArcFill: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 50,
    borderWidth: 8,
    borderColor: '#22C55E',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ rotate: '-90deg' }],
  },
  waterProgressContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  waterProgressValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B82F6',
  },
  waterProgressUnit: {
    fontSize: 12,
    color: '#6B7280',
  },
}); 