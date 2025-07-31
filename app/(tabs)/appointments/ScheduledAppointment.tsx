import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ScheduledAppointmentProps {
  date: string;
  time: string;
  isVisible: boolean;
}

const ScheduledAppointment: React.FC<ScheduledAppointmentProps> = ({ 
  date, 
  time, 
  isVisible 
}) => {
  if (!isVisible) return null;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Ionicons name="checkmark-circle" size={24} color="#10B981" />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Appointment Scheduled</Text>
            <Text style={styles.subtitle}>Your appointment has been confirmed</Text>
          </View>
        </View>
        
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <View style={styles.detailIcon}>
              <Ionicons name="calendar-outline" size={16} color="#6B7280" />
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Date & Time</Text>
              <Text style={styles.detailValue}>{date} • {time}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.08)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 2,
    fontFamily: 'Roboto-Regular',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
    fontFamily: 'Roboto-Regular',
  },
  detailsContainer: {
    marginBottom: 0,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  detailIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  detailContent: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 2,
    fontFamily: 'Roboto-Regular',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    fontFamily: 'Roboto-Regular',
  },

});

export default ScheduledAppointment; 