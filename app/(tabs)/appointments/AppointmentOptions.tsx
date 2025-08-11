import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type AppointmentType = 'In-Person' | 'Online';

interface AppointmentOptionsProps {
  appointmentType: AppointmentType;
  onChangeAppointmentType: (value: AppointmentType) => void;
  reason: string;
  onChangeReason: (value: string) => void;
  notes: string;
  onChangeNotes: (value: string) => void;
}

const REASONS = ['Consultation', 'Follow-up', 'Therapy', 'Reports Review', 'Prescription'];

const AppointmentOptions: React.FC<AppointmentOptionsProps> = ({
  appointmentType,
  onChangeAppointmentType,
  reason,
  onChangeReason,
  notes,
  onChangeNotes,
}) => {
  return (
    <View style={styles.card}>
      {/* Appointment Type */}
      <Text style={styles.sectionLabel}>Appointment Type</Text>
      <View style={styles.segmentRow}>
        {(['In-Person', 'Online'] as AppointmentType[]).map((type) => {
          const isActive = appointmentType === type;
          return (
            <TouchableOpacity
              key={type}
              style={[styles.segmentButton, isActive && styles.segmentButtonActive]}
              onPress={() => onChangeAppointmentType(type)}
              activeOpacity={0.85}
            >
              <Text style={[styles.segmentText, isActive && styles.segmentTextActive]}>{type}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.divider} />

      {/* Reason */}
      <Text style={[styles.sectionLabel, { marginTop: 18 }]}>Reason</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.reasonsRow}
      >
        {REASONS.map((r) => {
          const isActive = reason === r;
          return (
            <TouchableOpacity
              key={r}
              onPress={() => onChangeReason(r)}
              style={[styles.reasonChip, isActive && styles.reasonChipActive]}
              activeOpacity={0.85}
            >
              <Text style={[styles.reasonText, isActive && styles.reasonTextActive]}>{r}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.divider} />

      {/* Notes */}
      <Text style={[styles.sectionLabel, { marginTop: 18 }]}>Notes</Text>
      <TextInput
        style={styles.notesInput}
        value={notes}
        onChangeText={onChangeNotes}
        placeholder="Add any notes for the doctor..."
        placeholderTextColor="#9CA3AF"
        multiline
        numberOfLines={4}
        textAlignVertical="top"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginHorizontal: 16,
    marginTop: 18,
    marginBottom: 0,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
    fontFamily: 'Roboto-Regular',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginTop: 12,
    marginBottom: 8,
    borderRadius: 1,
  },
  segmentRow: {
    flexDirection: 'row',
    gap: 10,
  },
  segmentButton: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  segmentButtonActive: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  segmentText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
    fontFamily: 'Roboto-Regular',
  },
  segmentTextActive: {
    color: '#FFFFFF',
  },
  reasonsRow: {
    paddingVertical: 2,
    paddingRight: 4,
  },
  reasonChip: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: '#F3F4F6',
    borderRadius: 999,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  reasonChipActive: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  reasonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#111827',
    fontFamily: 'Roboto-Regular',
  },
  reasonTextActive: {
    color: '#FFFFFF',
  },
  notesInput: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 12,
    fontSize: 14,
    color: '#111827',
    fontFamily: 'Roboto-Regular',
    minHeight: 96,
  },
});

export default AppointmentOptions;


