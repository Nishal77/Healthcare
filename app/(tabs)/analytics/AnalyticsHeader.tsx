import React, { useMemo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface AnalyticsHeaderProps {
  name?: string;
}

function getPastFourDaysPlusToday(): { date: Date; isToday: boolean }[] {
  const today = new Date();
  const result: { date: Date; isToday: boolean }[] = [];
  for (let i = 4; i >= 0; i -= 1) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    result.push({ date: d, isToday: i === 0 });
  }
  return result;
}

const AnalyticsHeader: React.FC<AnalyticsHeaderProps> = ({ name = 'Katrin Schmidt' }) => {
  const days = useMemo(() => getPastFourDaysPlusToday(), []);

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.avatar}>
          <Image
            source={require('../../../assets/images/react-logo.png')}
            style={{ width: 36, height: 36, borderRadius: 18 }}
          />
        </View>
        <Text style={styles.greeting}>Hello, {name}!</Text>
      </View>

      <View style={styles.daysRow}>
        {days.map(({ date, isToday }, idx) => (
          <View key={`${date.toDateString()}-${idx}`} style={[styles.dayItem, isToday && styles.dayItemActive]}>
            <Text style={[styles.dayNumber, isToday && styles.dayNumberActive]}>{date.getDate()}</Text>
            <Text style={[styles.dayLabel, isToday && styles.dayLabelActive]}>
              {date.toLocaleDateString('en-US', { weekday: 'short' })}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    fontFamily: 'Roboto-Regular',
  },
  daysRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dayItem: {
    width: 60,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayItemActive: {
    backgroundColor: '#EEF2FF',
    borderWidth: 1,
    borderColor: '#3B82F6',
  },
  dayNumber: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
    fontFamily: 'Roboto-Regular',
  },
  dayNumberActive: {
    color: '#3B82F6',
  },
  dayLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontFamily: 'Roboto-Regular',
  },
  dayLabelActive: {
    color: '#3B82F6',
  },
});

export default AnalyticsHeader;


