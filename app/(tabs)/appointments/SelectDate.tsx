import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ACTIVE_BG = '#516D28';

function getDateArray() {
  const arr = [];
  const today = new Date();
  for (let i = 0; i < 6; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    arr.push(date);
  }
  return arr;
}

interface SelectDateProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

const SelectDate: React.FC<SelectDateProps> = ({ selectedDate, onSelectDate }) => {
  const dates = getDateArray();

  return (
    <View className=' rounded '>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {dates.map((date, idx) => {
          const isToday = idx === 0;
          const isTomorrow = idx === 1;
          const isEnabled = isToday || isTomorrow;
          const isSelected = selectedDate.toDateString() === date.toDateString();
          return (
            <TouchableOpacity
              key={date.toDateString()}
              style={[
                styles.dateBox,
                isEnabled && isSelected && styles.activeBox,
                !isEnabled && styles.disabledBox
              ]}
              onPress={() => isEnabled && onSelectDate(date)}
              activeOpacity={isEnabled ? 0.8 : 1}
              disabled={!isEnabled}
            >
              <Text style={[
                styles.day,
                isEnabled && isSelected && styles.activeText,
                !isEnabled && styles.disabledText
              ]}>{date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}</Text>
              <Text style={[
                styles.date,
                isEnabled && isSelected && styles.activeText,
                !isEnabled && styles.disabledText
              ]}>{date.getDate()}</Text>
              <Text style={[
                styles.month,
                isEnabled && isSelected && styles.activeText,
                !isEnabled && styles.disabledText
              ]}>{date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  dateBox: {
    width: 64,
    height: 84,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    backgroundColor: '#F3F4F6',
  },
  activeBox: {
    backgroundColor: '#000000',
  },
  disabledBox: {
    opacity: 0.45,
  },
  day: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '600',
    marginBottom: 1,
  },
  date: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 1,
  },
  month: {
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '600',
    marginTop: 1,
  },
  activeText: {
    color: '#fff',
  },
  disabledText: {
    color: '#D1D5DB',
  },
});

export default SelectDate; 