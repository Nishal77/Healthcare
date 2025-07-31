import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DoctorHero = () => {
  const router = useRouter();
  return (
    <View className='bg-[#EEF6EA]'>
    <View className='mt-2 mx-6'>
      {/* Top Row: Back and Title */}
      <View style={styles.topRow} className='mt-2'>
        <TouchableOpacity style={styles.iconCircle} onPress={() => router.replace('/') }>
          <Ionicons name="arrow-back-circle" size={22} color="#000" />
        </TouchableOpacity>
        <Text
          style={styles.title}
          numberOfLines={1}
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
          style={{ width: 140, height: 160 }}
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
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '#18181B',
    marginLeft: 8,
    marginRight: 8,
    fontFamily: 'Roboto-Regular',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 8,
  },
});

export default DoctorHero; 