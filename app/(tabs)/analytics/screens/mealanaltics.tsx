import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

export default function MealTimingConsistency() {
  const chartWidth = Dimensions.get("window").width - 3; // Full width minus card padding

  const data = [
    { value: 9, label: 'Mon' },
    { value: 7, label: 'Tue' },
    { value: 8, label: 'Wed' },
    { value: 6, label: 'Thu' },
    { value: 9, label: 'Fri' },
    { value: 8, label: 'Sat' },
    { value: 7, label: 'Sun' },
  ];

  return (
    <View style={styles.card}>
      <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "left", marginTop: 12}}>
      Meal Timing Consistency
      </Text>
      <Text>
        Weekly Consistency Score: {(
          data.reduce((sum, d) => sum + d.value, 0) / data.length
        ).toFixed(1)}
      </Text>

      <View style={styles.chartContainer}>
        <LineChart
          data={data}
          width={chartWidth}
          height={200}
          spacing={52}
          color="#F59E0B"
          thickness={3}
          startFillColor="rgba(245, 158, 11, 0.3)"
          endFillColor="rgba(245, 158, 11, 0.1)"
          areaChart
          curved
          hideDataPoints
          yAxisThickness={0}
          xAxisThickness={0}
          xAxisLabelTextStyle={styles.axisText}
          yAxisTextStyle={styles.axisText}
          hideRules
          noOfSections={4}
          maxValue={10}
          yAxisLabelTexts={["0", "2.5", "5", "7.5", "10"]}
          yAxisLabelWidth={32}
          initialSpacing={1}
          endSpacing={8}
        />
      </View>

      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#F59E0B' }]} />
          <Text style={styles.legendText}>Consistency Score</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 10,
    marginTop: 0,
    marginHorizontal: 0,
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
    marginBottom: 4,
    fontFamily: 'Roboto-Regular',
  },
  subtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 16,
    fontFamily: 'Roboto-Regular',
  },
  chartContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 12,
    color: '#6B7280',
    fontFamily: 'Roboto-Regular',
  },
  axisText: {
    fontSize: 10,
    color: '#6B7280',
    fontFamily: 'Roboto-Regular',
  },
});
