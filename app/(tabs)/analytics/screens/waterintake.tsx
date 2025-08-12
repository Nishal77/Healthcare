import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

export function WaterIntakeCard() {
  // Weekly hydration values in liters (example data)
  const weeklyHydration = [1.5, 2.0, 2.2, 1.8, 2.6, 2.1, 2.4];
  // Scale liters to a 0–10 visual range for clearer bars
  const barData = weeklyHydration.map((v, i) => ({ value: v * 3, label: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i] }));
  const total = weeklyHydration.reduce((s, v) => s + v, 0);
  const avg = total / weeklyHydration.length;

  const xLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const yLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <LinearGradient colors={["#FFFFFF", "#FFFFFF"]} style={styles.card} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <View style={styles.headerRow}>
      <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "left", marginTop: 12}}>
       Water Intake
      </Text>
        <View style={styles.metricsPill}>
          <Text style={styles.metricsText}>{avg.toFixed(1)}L avg</Text>
        </View>
      </View>
      <Text style={styles.subtitle}>Weekly hydration (liters)</Text>

      <View style={styles.chartRow}>
            <View style={{ flex: 1 }}>
              <BarChart
                data={barData}
                barWidth={24}
                spacing={18}
                barBorderRadius={6}
                frontColor="#3B82F6"
                gradientColor="#60A5FA"
                showGradient
                yAxisThickness={0}
                xAxisThickness={0}
                xAxisLabelTextStyle={styles.xAxisText}
                xAxisLabelsHeight={28}
                hideRules
                noOfSections={5}
                maxValue={10}
                yAxisLabelTexts={["0","2","4","6","8","10"]}
                yAxisTextStyle={styles.yAxisTextLeft}
                yAxisLabelWidth={30}
                yAxisOffset={1}
                height={150}
                initialSpacing={18}
                endSpacing={18}
                isAnimated
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
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
    fontFamily: 'Roboto-Regular',
  },
  metricsPill: {
    backgroundColor: 'rgba(14,165,233,0.12)',
    borderColor: 'rgba(14,165,233,0.35)',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  metricsText: {
    color: '#0EA5E9',
    fontWeight: '800',
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
  },
  subtitle: {
    marginTop: 2,
    marginBottom: 6,
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
    display: 'none',
  },
  yAxisText: {
    display: 'none',
  },
  xAxisText: {
    fontSize: 13,
    color: '#111827',
    fontFamily: 'Roboto-Regular',
    marginTop: 8,
  },
  yAxisTextLeft: {
    fontSize: 12,
    color: '#6B7280',
    fontFamily: 'Roboto-Regular',
  },
});


