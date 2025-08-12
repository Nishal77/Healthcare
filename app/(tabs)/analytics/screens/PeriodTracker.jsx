import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function getMonthMatrix(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // Make week start on Mon (Mon=0 ... Sun=6)
  const jsDayToMonStart = (d) => (d + 6) % 7;
  const leadingEmpty = jsDayToMonStart(firstDay.getDay());
  const daysInMonth = lastDay.getDate();

  const matrix = [];
  for (let i = 0; i < leadingEmpty; i += 1) {
    matrix.push(null);
  }
  for (let d = 1; d <= daysInMonth; d += 1) {
    matrix.push(new Date(year, month, d));
  }
  // Fill the last row to complete 7 columns
  while (matrix.length % 7 !== 0) {
    matrix.push(null);
  }
  return matrix;
}

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function PeriodTracker() {
  const [current, setCurrent] = useState(new Date());
  const matrix = useMemo(() => getMonthMatrix(current), [current]);
  const monthName = current.toLocaleDateString('en-US', { month: 'long' });
  const year = current.getFullYear();
  const today = new Date();
  const isSameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

  const prevMonth = () => setCurrent(new Date(current.getFullYear(), current.getMonth() - 1, 1));
  const nextMonth = () => setCurrent(new Date(current.getFullYear(), current.getMonth() + 1, 1));

  // Real-time simple period window: next 7 days from today
  const periodStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const periodEnd = new Date(periodStart);
  periodEnd.setDate(periodStart.getDate() + 6);
  const isWithinPeriod = (d) => d && d >= periodStart && d <= periodEnd;

  const periodRangeText = `${periodStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${periodEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;

  return (
    <LinearGradient colors={["#FFFFFF", "#F3F4F6"]} style={styles.card} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <Text style={styles.heading}>Period Analysis</Text>
      <Text style={styles.subtext}>Predicted period window: {periodRangeText}</Text>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={prevMonth} style={styles.navBtn} activeOpacity={0.8}>
          <Ionicons name="chevron-back" size={18} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.title}>{monthName} {year}</Text>
        <TouchableOpacity onPress={nextMonth} style={styles.navBtn} activeOpacity={0.8}>
          <Ionicons name="chevron-forward" size={18} color="#111827" />
        </TouchableOpacity>
      </View>

      <View style={styles.weekRow}>
        {WEEKDAYS.map((d) => (
          <Text key={d} style={styles.weekLabel}>{d}</Text>
        ))}
      </View>

      <View style={styles.grid}>
        {matrix.map((d, idx) => {
          const isToday = d && isSameDay(d, today);
          const isPeriod = isWithinPeriod(d);
          return (
            <View key={idx} style={styles.cell}>
              {d ? (
                <View style={[styles.dayPill, isPeriod && styles.periodPill, isToday && styles.todayPill]}>
                  <Text style={[styles.dayText, isPeriod && styles.periodText, isToday && styles.todayText]}>{d.getDate()}</Text>
                </View>
              ) : (
                <View style={styles.empty} />
              )}
            </View>
          );
        })}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginTop: 0,
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
    marginBottom: 8,
  },
  navBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
    fontFamily: 'Roboto-Regular',
  },
  heading: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 2,
    paddingHorizontal: 4,
  },
  subtext: {
    color: '#6B7280',
    fontSize: 12,
    marginBottom: 8,
    paddingHorizontal: 4,
    fontFamily: 'Roboto-Regular',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
    paddingHorizontal: 6,
  },
  weekLabel: {
    width: `${100 / 7}%`,
    textAlign: 'center',
    color: '#6B7280',
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: `${100 / 7}%`,
    alignItems: 'center',
    paddingVertical: 6,
  },
  dayPill: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  periodPill: {
    backgroundColor: 'rgba(239,68,68,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(239,68,68,0.45)',
  },
  todayPill: {
    backgroundColor: '#111827',
  },
  dayText: {
    fontSize: 14,
    color: '#111827',
    fontFamily: 'Roboto-Regular',
  },
  periodText: {
    color: '#B91C1C',
    fontWeight: '700',
  },
  todayText: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
  empty: {
    width: 36,
    height: 36,
  },
});


