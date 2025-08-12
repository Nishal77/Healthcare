import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function WeeklyDigestionAnalytics() {
  const screenWidth = Dimensions.get("window").width;

  // Map scores to categories
  const digestionLevels = {
    2: "Weak",
    4: "Low",
    6: "Normal",
    8: "Fine",
    10: "Peak",
  };

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        // Use the scaled numeric categories so the line aligns with labels
        data: [6, 8, 8, 10, 4, 8, 10],
        strokeWidth: 3,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(21, 128, 61, ${opacity})`, // deep green
    labelColor: (opacity = 1) => `rgba(85, 85, 85, ${opacity})`,
    style: { borderRadius: 16 },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#fff",
    },
    propsForBackgroundLines: {
      stroke: "#E5E7EB",
      strokeDasharray: "4,4",
    },
  };

  return (
    <View style={{ padding: 0, backgroundColor: "#fff", flex: 1 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "left", paddingHorizontal: 16, marginTop: 12, marginBottom: 10 }}>
        Weekly Digestion Analysis
      </Text>

      <View style={styles.legendRow}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#16A34A' }]} />
          <Text style={styles.legendText}>Above normal</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#DC2626' }]} />
          <Text style={styles.legendText}>Below normal</Text>
        </View>
      </View>

      <LineChart
        data={data}
        width={screenWidth - 0}
        height={260}
        yAxisSuffix=""
        fromZero
        segments={5}
        formatYLabel={(value) => digestionLevels[Number(value)] || ""}
        chartConfig={chartConfig}
        bezier
        verticalLabelRotation={0}
        style={{
          marginVertical: 10,
          borderRadius: 16,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 16,
    marginBottom: 4,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendText: {
    color: '#6B7280',
    fontSize: 12,
  },
});


