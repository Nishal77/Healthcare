import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MORNING_SLOTS = [
  '9:00-10:00AM', '10:00-11:00AM', '11:00-12:00PM',
  '12:00-1:00PM',
];
const EVENING_SLOTS = [
  '4:00-5:00PM', '5:00-6:00PM', '6:00-7:30PM', '7:30-9:30PM',
];

const SelectTime = () => {
  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Time</Text>
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Morning</Text>
        <View style={styles.grid}>
          {MORNING_SLOTS.map((slot) => (
            <TouchableOpacity
              key={slot}
              style={[styles.slot, selected === slot && styles.selectedSlot]}
              onPress={() => setSelected(slot)}
              activeOpacity={0.8}
            >
              <Text style={[styles.slotText, selected === slot && styles.selectedSlotText]}>{slot}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Evening</Text>
        <View style={styles.grid}>
          {EVENING_SLOTS.map((slot) => (
            <TouchableOpacity
              key={slot}
              style={[styles.slot, selected === slot && styles.selectedSlot]}
              onPress={() => setSelected(slot)}
              activeOpacity={0.8}
            >
              <Text style={[styles.slotText, selected === slot && styles.selectedSlotText]}>{slot}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: 18,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: '#222',
    fontFamily: 'Roboto-Regular',
  },
  section: {
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#516D28',
    marginBottom: 10,
    marginLeft: 4,
    fontFamily: 'Roboto-Regular',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
  },
  slot: {
    width: '46%',
    aspectRatio: 3.8,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
  selectedSlot: {
    backgroundColor: '#516D28',
    borderColor: '#516D28',
  },
  slotText: {
    fontSize: 15,
    color: '#222',
    fontWeight: '600',
    fontFamily: 'Roboto-Regular',
  },
  selectedSlotText: {
    color: '#fff',
  },
});

export default SelectTime; 