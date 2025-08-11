import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BarChart, LineChart, PieChart } from 'react-native-gifted-charts';
import AnalyticsHeader from './AnalyticsHeader';

export default function AnalyticsScreen() {
  const lineData = [
    { value: 20 }, { value: 35 }, { value: 25 }, { value: 50 }, { value: 40 }, { value: 60 }, { value: 55 },
    { value: 70 }, { value: 65 }, { value: 80 }, { value: 60 }, { value: 75 },
  ];

  const barData = [
    { value: 40, label: 'Mon' },
    { value: 20, label: 'Tue' },
    { value: 50, label: 'Wed' },
    { value: 35, label: 'Thu' },
    { value: 70, label: 'Fri' },
    { value: 55, label: 'Sat' },
    { value: 30, label: 'Sun' },
  ];

  const pieData = [
    { value: 45, color: '#3B82F6', text: '45%' },
    { value: 25, color: '#10B981', text: '25%' },
    { value: 15, color: '#F59E0B', text: '15%' },
    { value: 15, color: '#EF4444', text: '15%' },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F8FA' }}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AnalyticsHeader />

        <LinearGradient colors={["#FFFFFF", "#F3F4F6"]} style={styles.card} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <Text style={styles.cardTitle}>Fitness Trend</Text>
          <LineChart
            data={lineData}
            curved
            hideDataPoints
            thickness={3}
            color="#EF4444"
            startFillColor="#FCA5A5"
            endFillColor="#ffffff00"
            startOpacity={0.25}
            endOpacity={0}
            initialSpacing={0}
            xAxisThickness={0}
            yAxisThickness={0}
            areaChart
            hideRules
          />
        </LinearGradient>

        <LinearGradient colors={["#FFFFFF", "#F3F4F6"]} style={styles.card} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <Text style={styles.cardTitle}>Weekly Activity</Text>
          <BarChart
            data={barData}
            barWidth={22}
            noOfSections={4}
            spacing={18}
            frontColor="#3B82F6"
            yAxisThickness={0}
            xAxisThickness={0}
            xAxisLabelTextStyle={styles.axisText}
            hideRules
            barBorderRadius={6}
          />
        </LinearGradient>

        <LinearGradient colors={["#FFFFFF", "#F3F4F6"]} style={styles.card} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <Text style={styles.cardTitle}>Breakdown</Text>
          <PieChart
            data={pieData}
            donut
            innerRadius={60}
            radius={90}
            showText
            textColor="#111827"
            textSize={12}
            focusOnPress
            sectionAutoFocus
            centerLabelComponent={() => (
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: '800', color: '#111827', fontFamily: 'Roboto-Regular' }}>100%</Text>
                <Text style={{ fontSize: 12, color: '#6B7280', fontFamily: 'Roboto-Regular' }}>Total</Text>
              </View>
            )}
          />
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
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


