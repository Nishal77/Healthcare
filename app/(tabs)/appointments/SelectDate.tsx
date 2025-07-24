import React, { useState } from 'react';
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

const SelectDate = () => {
  const dates = getDateArray();
  const [selected, setSelected] = useState(dates[0].toDateString());

  return (
    <View className=' rounded '>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {dates.map((date, idx) => {
          const isToday = idx === 0;
          const isTomorrow = idx === 1;
          const isEnabled = isToday || isTomorrow;
          const isSelected = selected === date.toDateString();
          return (
            <TouchableOpacity
              key={date.toDateString()}
              style={[
                styles.dateBox,
                isEnabled && isSelected && styles.activeBox,
                !isEnabled && styles.disabledBox
              ]}
              onPress={() => isEnabled && setSelected(date.toDateString())}
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
    width: 54,
    height: 74,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    backgroundColor: 'transparent',
  },
  activeBox: {
    backgroundColor: ACTIVE_BG,
  },
  disabledBox: {
    opacity: 0.45,
  },
  day: {
    fontSize: 13,
    color: '#888',
    fontWeight: '600',
    marginBottom: 1,
  },
  date: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginBottom: 1,
  },
  month: {
    fontSize: 11,
    color: '#bbb',
    fontWeight: '500',
    marginTop: 1,
  },
  activeText: {
    color: '#fff',
  },
  disabledText: {
    color: '#bbb',
  },
});

export default SelectDate; 