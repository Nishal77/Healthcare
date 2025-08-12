import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import AnalyticsHeader from './AnalyticsHeader';
import WeeklyDigestionAnalytics from './screens/digestionreport.jsx';
import EmojiMoodTracker from './screens/Enerytracker.jsx';
import MealTimingConsistency from './screens/mealanaltics.tsx';
import PeriodTracker from './screens/PeriodTracker.jsx';
import SleepQualityRing from './screens/sleepquality.jsx';
import { WaterIntakeCard } from './screens/waterintake.tsx';

export default function AnalyticsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AnalyticsHeader />

        <EmojiMoodTracker />

        <SleepQualityRing />

        <WaterIntakeCard />
        <MealTimingConsistency />
        <WeeklyDigestionAnalytics />
        <PeriodTracker />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 3,
    paddingBottom: 120,
  },
  
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginTop: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 12,
    fontFamily: 'Roboto-Regular',
  },
  axisText: {
    fontSize: 10,
    color: '#6B7280',
    fontFamily: 'Roboto-Regular',
  },
});


