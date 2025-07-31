import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');

const DigestionGraph = () => {
  // Convert the ApexChart data to react-native-chart-kit format
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [85, 78, 92, 88, 95, 82, 89], // Digestion scores for the week
        color: (opacity = 1) => `rgba(168, 85, 247, ${opacity})`, // Purple color for digestion
        strokeWidth: 4,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(168, 85, 247, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(107, 114, 128, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '0', // Hide dots
      strokeWidth: '0',
      stroke: 'transparent',
      fill: 'transparent',
    },
    propsForBackgroundLines: {
      strokeDasharray: '', // Solid lines
      stroke: 'transparent', // Transparent to hide horizontal lines
      strokeWidth: 0,
    },
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={chartData}
        width={width * 0.35}
        height={80}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
        withDots={false}
        withShadow={false}
        withInnerLines={false}
        withOuterLines={false}
        withVerticalLines={false}
        withHorizontalLines={false}
        withVerticalLabels={false}
        withHorizontalLabels={false}
        fromZero={false}
        yAxisSuffix=""
        yAxisInterval={1}
        segments={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    borderRadius: 8,
    paddingRight: 0,
    paddingLeft: 0,
  },
});

export default DigestionGraph; 