import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

export function WaterIntakeCard() {
  // Weekly hydration values in liters (example data)
  const weeklyHydration = [1.5, 2.0, 2.2, 1.8, 2.6, 2.1, 2.4];
  const lineData = weeklyHydration.map((v) => ({ value: v }));

  const xLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const yLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <LinearGradient colors={["#FFFFFF", "#F3F4F6"]} style={styles.card} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <Text style={styles.title}>Water Intake</Text>
      <Text style={styles.subtitle}>Weekly hydration (liters)</Text>

      <View style={styles.chartRow}>
        {/* Y-axis custom labels (1 - 10) */}
        <View style={styles.yAxis}>
          {[...yLabels].reverse().map((t) => (
            <Text key={`y-${t}`} style={styles.yAxisText}>{t}</Text>
          ))}
        </View>

        <View style={{ flex: 1 }}>
          <LineChart
            data={lineData}
            curved
            thickness={3}
            color="#0EA5E9"
            startFillColor="#93C5FD"
            endFillColor="#ffffff00"
            startOpacity={0.25}
            endOpacity={0}
            areaChart
            hideRules
            hideYAxisText
            yAxisThickness={0}
            xAxisThickness={0}
            xAxisLabelTexts={xLabels}
            xAxisLabelTextStyle={styles.xAxisText}
            hideDataPoints
            height={170}
            initialSpacing={8}
            endSpacing={8}
            xAxisLabelsHeight={20}
            maxValue={10}
            yAxisOffset={1}
          />
        </View>
      </View>
    </LinearGradient>
  );
}

export default function WaterIntakeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F8FA' }}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <WaterIntakeCard />
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
    fontFamily: 'Roboto-Regular',
  },
  subtitle: {
    marginTop: 4,
    marginBottom: 12,
    fontSize: 12,
    color: '#6B7280',
    fontFamily: 'Roboto-Regular',
  },
  chartRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  chartOnly: {
    flex: 1,
  },
  yAxis: {
    width: 24,
    marginRight: 8,
    justifyContent: 'space-between',
    height: 180,
  },
  yAxisText: {
    fontSize: 10,
    color: '#6B7280',
    textAlign: 'right',
    fontFamily: 'Roboto-Regular',
  },
  xAxisText: {
    fontSize: 12,
    color: '#111827',
    fontFamily: 'Roboto-Regular',
    marginTop: 8,
  },
});


