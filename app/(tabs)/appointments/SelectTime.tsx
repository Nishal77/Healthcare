import React, { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MORNING_SLOTS = [
  { id: 1, time: '9:00 AM', period: 'Morning' },
  { id: 2, time: '9:15 AM', period: 'Morning' },
  { id: 3, time: '9:30 AM', period: 'Morning' },
  { id: 4, time: '9:45 AM', period: 'Morning' },
  { id: 5, time: '10:00 AM', period: 'Morning' },
  { id: 6, time: '10:15 AM', period: 'Morning' },
  { id: 7, time: '10:30 AM', period: 'Morning' },
  { id: 8, time: '10:45 AM', period: 'Morning' },
  { id: 9, time: '11:00 AM', period: 'Morning' },
  { id: 10, time: '11:15 AM', period: 'Morning' },
  { id: 11, time: '11:30 AM', period: 'Morning' },
  { id: 12, time: '11:45 AM', period: 'Morning' },
  { id: 13, time: '12:00 PM', period: 'Morning' },
];

const EVENING_SLOTS = [
  { id: 14, time: '3:00 PM', period: 'Evening' },
  { id: 15, time: '3:15 PM', period: 'Evening' },
  { id: 16, time: '3:30 PM', period: 'Evening' },
  { id: 17, time: '3:45 PM', period: 'Evening' },
  { id: 18, time: '4:00 PM', period: 'Evening' },
  { id: 19, time: '4:15 PM', period: 'Evening' },
  { id: 20, time: '4:30 PM', period: 'Evening' },
  { id: 21, time: '4:45 PM', period: 'Evening' },
  { id: 22, time: '5:00 PM', period: 'Evening' },
  { id: 23, time: '5:15 PM', period: 'Evening' },
  { id: 24, time: '5:30 PM', period: 'Evening' },
  { id: 25, time: '5:45 PM', period: 'Evening' },
  { id: 26, time: '6:00 PM', period: 'Evening' },
  { id: 27, time: '6:15 PM', period: 'Evening' },
  { id: 28, time: '6:30 PM', period: 'Evening' },
  { id: 29, time: '6:45 PM', period: 'Evening' },
  { id: 30, time: '7:00 PM', period: 'Evening' },
  { id: 31, time: '7:15 PM', period: 'Evening' },
  { id: 32, time: '7:30 PM', period: 'Evening' },
];

interface SelectTimeProps {
  selectedTime: string;
  onSelectTime: (time: string) => void;
}

const SelectTime: React.FC<SelectTimeProps> = ({ selectedTime, onSelectTime }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<'Morning' | 'Evening'>('Morning');
  const slots = useMemo(() => (selectedPeriod === 'Morning' ? MORNING_SLOTS : EVENING_SLOTS), [selectedPeriod]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Time</Text>
      
      {/* Period Selection */}
      <View style={styles.periodContainer}>
        <TouchableOpacity 
          style={[
            styles.periodButton, 
            selectedPeriod === 'Morning' && styles.activePeriodButton
          ]}
          onPress={() => setSelectedPeriod('Morning')}
        >
          <Text style={[
            styles.periodText, 
            selectedPeriod === 'Morning' && styles.activePeriodText
          ]}>Morning</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.periodButton, 
            selectedPeriod === 'Evening' && styles.activePeriodButton
          ]}
          onPress={() => setSelectedPeriod('Evening')}
        >
          <Text style={[
            styles.periodText, 
            selectedPeriod === 'Evening' && styles.activePeriodText
          ]}>Evening</Text>
        </TouchableOpacity>
      </View>
      
      {/* Time Slots - Horizontal */}
      <ScrollView
        horizontal
        style={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalContent}
      >
        {slots.map((slot) => {
          const isSelected = selectedTime === slot.time;
          return (
            <TouchableOpacity
              key={slot.id}
              style={[styles.slotPill, isSelected && styles.slotPillSelected]}
              onPress={() => onSelectTime(slot.time)}
              activeOpacity={0.85}
            >
              <Text style={[styles.pillText, isSelected && styles.pillTextSelected]}>{slot.time}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 16,
    marginTop: 18,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: '#1F1F1F',
    fontFamily: 'Roboto-Regular',
  },
  periodContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 10,
  },
  periodButton: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  periodText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    fontFamily: 'Roboto-Regular',
  },
  activePeriodButton: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  activePeriodText: {
    color: '#fff',
  },
  scrollContainer: {
    maxHeight: 64,
  },
  horizontalContent: {
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  slotPill: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: '#F3F4F6',
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  slotPillSelected: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  pillText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
    fontFamily: 'Roboto-Regular',
  },
  pillTextSelected: {
    color: '#FFFFFF',
  },
});

export default SelectTime; 