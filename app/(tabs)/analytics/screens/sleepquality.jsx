import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Defs, G, LinearGradient, Stop, Text as SvgText } from "react-native-svg";

export default function SleepQualityRing() {
  const screenWidth = Dimensions.get("window").width;
  const size = screenWidth * 0.45; // Much smaller chart for ultra-compact design
  const strokeWidth = 16; // Thinner stroke for elegance
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const goalHours = 8;
  const hoursSlept = 7.5; // Current sleep
  const averageSleep = 7.2; // Weekly average
  const maxSleep = 8.5; // Best sleep this week
  const progress = hoursSlept / goalHours;
  const progressOffset = circumference - progress * circumference;

  // Calculate sleep quality score (0-100)
  const sleepScore = Math.round((hoursSlept / goalHours) * 100);

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
      <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "left", marginTop: 12}}>
      Sleep Quality
      </Text>
        <Text style={styles.subText}>Weekly Sleep Analytics</Text>
      </View>

      <View style={styles.chartSection}>
        <Svg width={size} height={size}>
          <G rotation="-90" originX={size / 2} originY={size / 2}>
            {/* Background ring */}
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#f1f5f9"
              strokeWidth={strokeWidth}
              fill="transparent"
            />

            {/* Progress ring */}
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="url(#gradient)"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={progressOffset}
              strokeLinecap="round"
              fill="transparent"
            />
          </G>

          {/* Gradient Definition */}
          <Defs>
            <LinearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0%" stopColor="#10b981" />
              <Stop offset="50%" stopColor="#059669" />
              <Stop offset="100%" stopColor="#047857" />
            </LinearGradient>
          </Defs>

          {/* Center Content - Perfectly Centered */}
          <SvgText
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="26"
            fontWeight="bold"
            fill="#047857"
          >
            {sleepScore}%
          </SvgText>
          <SvgText
            x="50%"
            y="65%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="12"
            fill="#64748b"
          >
            Score
          </SvgText>
        </Svg>
      </View>

      {/* Metrics Section */}
      <View style={styles.metricsContainer}>
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{hoursSlept}h</Text>
          <Text style={styles.metricLabel}>Now</Text>
        </View>
        
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{averageSleep}h</Text>
          <Text style={styles.metricLabel}>Avg</Text>
        </View>
        
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{maxSleep}h</Text>
          <Text style={styles.metricLabel}>Best</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 11,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 4,
  },
  headerSection: {
    width: '100%',
    marginBottom: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: "900",
    textAlign: "left",
    marginBottom: 6,
    color: "#111827",
    fontFamily: 'Roboto-Regular',
    letterSpacing: -0.5,
  },
  subText: {
    textAlign: "left",
    fontSize: 12,
    color: "#6b7280",
    fontFamily: 'Roboto-Regular',
    fontWeight: '500',
  },
  chartSection: {
    marginBottom: 16,
    alignItems: 'center',
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  metricCard: {
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    padding: 12,
    borderRadius: 12,
    minWidth: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },
  metricValue: {
    fontSize: 16,
    fontWeight: '800',
    color: '#047857',
    marginBottom: 2,
    fontFamily: 'Roboto-Regular',
  },
  metricLabel: {
    fontSize: 10,
    color: '#64748b',
    fontWeight: '600',
    fontFamily: 'Roboto-Regular',
  },
});
