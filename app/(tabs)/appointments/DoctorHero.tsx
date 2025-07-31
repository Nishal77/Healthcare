import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DoctorHero = () => {
  const router = useRouter();
  return (
    <View>
    <View className='mt-2 mx-6'>
      {/* Top Row: Back and Title */}
      <View style={styles.topRow} className='mt-2'>
        <TouchableOpacity style={styles.iconCircle} onPress={() => router.replace('/') }>
          <Ionicons name="chevron-back" size={24} color="#1F2937" />
        </TouchableOpacity>
        <Text
          numberOfLines={1}
          className='text-black text-3xl font-bold Roboto-Regular'
        >
          Check Availability
        </Text>
        {/* Empty view to balance the row, so text is centered between icons */}
        <View style={{ width: 40 }} />
      </View>

      {/* Info and Image */}
      <View style={styles.infoRow}>
        <View style={{ flex: 1 }}>
          <Text className='text-sm Roboto-Regular'>Gandhi Hospital</Text>
          <Text className='text-black text-3xl font-semibold Roboto-Regular'>Dr. Vivek Acharya</Text>
          <Text className='text-black/50 text-sm Roboto-Regular'>
            Specialist in Ayurveda,{"\n"}Panchakarma, Yoga Therapy
          </Text>
        </View>
        <Image
          source={require('../../../assets/images/doctor.png')}
          style={{ width: 140, height: 179 }}
          resizeMode="cover"
        />
      </View>
    </View>
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
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
 
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 8,
  },
});

export default DoctorHero; 