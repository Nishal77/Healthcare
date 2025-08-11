import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DoctorHero = () => {
  const router = useRouter();
  return (
    <View style={{ marginHorizontal: 16, marginTop: 8 }}>
      {/* Top Row: Back and Title */}
      <View style={[styles.topRow, { marginTop: 8 }]}>
        <TouchableOpacity style={styles.iconCircle} onPress={() => router.replace('/') }>
          <Ionicons name="chevron-back" size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.title}>Check Availability</Text>
        <View style={{ width: 44 }} />
      </View>

      {/* Hero Card */}
      <LinearGradient colors={["#111111", "#1F2937"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.heroCard}>
        <View style={{ flex: 1 }}>
          <Text style={styles.hospital}>Gandhi Hospital</Text>
          <Text style={styles.doctorName}>Dr. Vivek Acharya</Text>
          <Text style={styles.specialties}>Ayurveda • Panchakarma • Yoga Therapy</Text>

          <View style={styles.metaRow}>
            <View style={styles.metaPill}>
              <Ionicons name="star" size={14} color="#FBBF24" />
              <Text style={styles.metaText}>4.9 (1.2k)</Text>
            </View>
            <View style={styles.metaPill}>
              <Ionicons name="location-outline" size={14} color="#93C5FD" />
              <Text style={styles.metaText}>2.1 km</Text>
            </View>
            <View style={styles.metaPill}>
              <Ionicons name="shield-checkmark-outline" size={14} color="#34D399" />
              <Text style={styles.metaText}>Verified</Text>
            </View>
          </View>
        </View>
        <Image
          source={require('../../../assets/images/doctor.png')}
          style={styles.heroImage}
          resizeMode="cover"
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    color: '#111827',
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'Roboto-Regular',
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  heroCard: {
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  heroImage: {
    width: 140,
    height: 179,
    marginLeft: 12,
  },
  hospital: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
    marginBottom: 2,
    fontFamily: 'Roboto-Regular',
  },
  doctorName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 6,
    fontFamily: 'Roboto-Regular',
  },
  specialties: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 12,
    fontFamily: 'Roboto-Regular',
  },
  metaRow: {
    flexDirection: 'row',
    gap: 8,
  },
  metaPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  metaText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Roboto-Regular',
  },
});

export default DoctorHero; 