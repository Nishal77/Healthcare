import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useMemo } from 'react';
import { Image, Platform, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DashboardScreen() {
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  }, []);

  const handleSearchBarPress = () => {
    console.log('Search bar pressed');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingBottom: Platform.OS === 'ios' ? 100 : 80,
        }}
        scrollEventThrottle={16}
        bounces={true}
        alwaysBounceVertical={true}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={{ paddingHorizontal: 22, paddingTop: 20, backgroundColor: 'white' }}>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Image
                source={{ uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=2080&auto=format&fit=crop" }}
                className="w-12 h-12 rounded-full"
              />
              <View className="ml-3">
                <Text className="font-sans text-gray-500 text-base">{greeting}</Text>
                <Text className="font-sans text-black text-xl font-semibold">K Vivek Acharya</Text>
              </View>
            </View>
            <View className="flex-row items-center gap-x-2">
              <TouchableOpacity
                className="relative p-2"
                activeOpacity={0.7}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Ionicons name="notifications-outline" size={28} color="#4B5563" />
                <View className="absolute top-2 right-2 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-gray-50" />
              </TouchableOpacity>
              <TouchableOpacity
                className="p-2"
                activeOpacity={0.7}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Ionicons name="globe-outline" size={26} color="#4B5563" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Main Greeting Text */}
          <Text className="text-5xl font-bold mt-6 mb-4 font-sans">
                How are you feeling today?
              </Text>

          {/* Search Bar */}
          <TouchableOpacity
            className="flex-row items-center bg-gray-100 rounded-xl px-3 py-2 border border-gray-300 mb-6"
            style={{ borderColor: 'rgba(0,0,0,0.15)', borderWidth: 1 }}
            onPress={handleSearchBarPress}
            activeOpacity={0.8}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="search-outline" size={22} color="#9CA3AF" />
            <View style={{ flex: 1, marginLeft: 12, flexDirection: 'row', alignItems: 'center' }} pointerEvents="none">
              <Text className="text-base text-gray-400 font-sans">How can I help? Search doctor...</Text>
            </View>
            <TouchableOpacity
              className="ml-2 bg-gray-200 p-2 rounded-xl"
              activeOpacity={0.7}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name="qr-code-outline" size={22} color="#4B5563" />
            </TouchableOpacity>
            <TouchableOpacity
              className="ml-2 bg-gray-200 p-2 rounded-xl"
              activeOpacity={0.7}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name="mic-outline" size={22} color="#4B5563" />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        {/* Upcoming Schedule Section */}
        <View className="mx-6 mb-4">
          <Text className="text-xl font-semibold text-gray-900 Roboto">
            Upcoming Schedule
          </Text>
        </View>

        {/* Doctor Card */}
        <View 
          className="mx-6 rounded-2xl p-5 mb-6"
                style={{
            backgroundColor: '#ADC178',
            shadowColor: '0px 4px 12px rgba(140, 107, 31, 0.2)',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.38,
            shadowRadius: 12,
            elevation: 6,
            borderWidth: 1.2,
            borderColor: 'white',
          }}
        >
          {/* Top Section: Doctor Info */}
          <View className="flex-row items-center justify-between mb-5">
            <View className="flex-row items-center gap-4">
              <View className="w-14 h-14 rounded-full bg-white border-2 items-center justify-center overflow-hidden shadow-sm"
                style={{ borderColor: '#B2D8B2', shadowColor: '#B2D8B2', shadowOpacity: 0.15, shadowRadius: 6 }}
              >
                <Image
                  source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
                  className="w-full h-full rounded-full"
                  resizeMode="cover"
                  />
                </View>
              <View>
                <Text style={{ fontSize: 17, fontWeight: '700', color: 'black', fontFamily: 'Roboto-Regular', }}>
                  Dr. Shylesh B C
                </Text>
                <Text style={{ fontSize: 12, color: 'black', fontFamily: 'Roboto-Regular', marginTop: 2 }}>
                  Mental Consultation
                </Text>
              </View>
            </View>
            <Pressable
              style={({ pressed }) => ({
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 2.5,
                borderColor: '#111',
                borderRadius: 999,
                paddingVertical: 8,
                paddingHorizontal: 22,
                backgroundColor: pressed ? '#F5F5F5' : 'transparent',
                marginLeft: 8,
              })}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1.5,
                  borderColor: '#8C6B1F',
                  borderRadius: 12,
                  paddingVertical: 6,
                  paddingHorizontal: 16,
                  backgroundColor: '#FFF8E1',
                  shadowColor: '#8C6B1F',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.12,
                  shadowRadius: 4,
                  marginRight: 8,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: '600', color: '#111', fontFamily: 'Roboto-Regular', marginRight: 6 }}>Call</Text>
                <Ionicons name="call-outline" size={20} color="#111" />
              </View>
            </Pressable>
        </View>

          {/* Bottom Section: Date and Time */}
          <View className="flex-row items-center justify-center gap-6 px-4 py-3 rounded-xl"
            style={{ backgroundColor: '#D7CDA2' }}
          >
            {/* Date Info */}
            <View className="flex-row items-center gap-2">
              <Ionicons name="calendar-outline" size={19} color="#D89C00" />
              <Text style={{ fontSize: 13, fontWeight: '600', color: '#5E4A1E', fontFamily: 'Roboto-Regular' }}>
                Monday, 26 July
                    </Text>
                  </View>
            {/* Vertical Separator */}
            <View className="h-6 w-1 mx-1 rounded-full" 
              style={{ backgroundColor: '#D7CDA2', opacity: 0.5 }} 
            />
            {/* Time Info */}
            <View className="flex-row items-center gap-2">
              <Ionicons name="time-outline" size={19} color="#D89C00" />
              <Text style={{ fontSize: 13, fontWeight: '600', color: '#5E4A1E', fontFamily: 'Roboto-Regular' }}>
                09:00 - 10:00
                  </Text>
                </View>
          </View>
        </View>

        {/* Last Week's Health Overview Section */}
        <View className="mx-6 mb-4 flex-row justify-between items-center">
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#000000', fontFamily: 'Roboto-Regular', marginBottom: 8 }}>
            Daily Overview
          </Text>
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#8C6B1F', fontFamily: 'Roboto-Regular', marginBottom: 8 }}>
            Last Week
          </Text>
        </View>
        <View className="mx-6 mb-8 flex-row flex-wrap justify-between">
          {/* Health Condition Boxes with values and new color palette */}
          {[
            {
              label: 'Digestion',
              icon: 'restaurant-outline',
              gradient: ['#DCF5E3', '#EAF6E9'] as [string, string],
              iconColor: '#4E944F',
              labelColor: '#215732',
              value: 'Good',
              valueColor: '#215732',
            },
            {
              label: 'Energy',
              icon: 'flash-outline',
              gradient: ['#FFE3B3', '#FFF1DB'] as [string, string],
              iconColor: '#F59E0B',
              labelColor: '#92400E',
              value: 'High',
              valueColor: '#92400E',
            },
            {
              label: 'Sleep',
              icon: 'moon-outline',
              gradient: ['#D8DCFF', '#ECEEFF'] as [string, string],
              iconColor: '#5A4EBB',
              labelColor: '#333366',
              value: '7.5h avg',
              valueColor: '#5A4EBB',
            },
            {
              label: 'Mood',
              icon: 'happy-outline',
              gradient: ['#FBD3E9', '#FFF0F3'] as [string, string],
              iconColor: '#C2185B',
              labelColor: '#880E4F',
              value: 'Positive',
              valueColor: '#C2185B',
            },
            {
              label: 'Bowel Movement',
              icon: 'water-outline',
              gradient: ['#F5E8DA', '#F2EFEA'] as [string, string],
              iconColor: '#795548',
              labelColor: '#4E342E',
              value: 'Regular',
              valueColor: '#4E342E',
            },
            {
              label: 'Menstrual Cycle',
              icon: 'female-outline',
              gradient: ['#FCE1EC', '#FBEFF5'] as [string, string],
              iconColor: '#D81B60',
              labelColor: '#880E4F',
              value: 'Normal',
              valueColor: '#D81B60',
            },
          ].map((item, idx) => (
            <LinearGradient
              key={item.label}
              colors={item.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                width: '47%',
                borderRadius: 16,
                paddingVertical: 8,
                paddingHorizontal: 10,
                marginBottom: 12,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                minHeight: 48,
                shadowColor: item.iconColor,
                shadowOpacity: 0.06,
                shadowRadius: 10,
                elevation: 1,
                borderWidth: 1,
                borderColor: 'rgba(30,30,30,0.13)',
              }}
            >
              <View style={{
                width: 28,
                height: 28,
                borderRadius: 14,
                backgroundColor: item.iconColor + '22',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}>
                <Ionicons name={item.icon as any} size={16} color={item.iconColor} />
              </View>
              <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={{ fontSize: 12, fontWeight: '600', color: item.labelColor, fontFamily: 'Roboto-Regular', marginBottom: 1 }}>
                  {item.label}
                </Text>
                <Text style={{ fontSize: 13, fontWeight: '500', color: item.valueColor, fontFamily: 'Roboto-Regular' }}>
                  {item.value}
                </Text>
              </View>
            </LinearGradient>
          ))}
        </View>

        {/* Daily Reminder Section */}
        <View className="mx-5 mb-0">
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#1F1F1F', fontFamily: 'Roboto-Regular', marginBottom: 8 }}>
            Daily Reminder
          </Text>
          {/* Water Reminder */}
          <View
            style={{
              backgroundColor: '#FFF4E2',
              borderRadius: 16,
              borderWidth: 1,
              borderColor: 'rgba(30,30,30,0.13)',
              paddingVertical: 10,
              paddingHorizontal: 14,
              flexDirection: 'row',
              alignItems: 'center',
              shadowColor: '#D97706',
              shadowOpacity: 0.06,
              shadowRadius: 10,
              elevation: 2,
              marginBottom: 10,
            }}
          >
            <View style={{
              width: 28,
              height: 28,
              borderRadius: 14,
              backgroundColor: '#F5D395',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
              shadowColor: '#fff',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.12,
              shadowRadius: 2,
            }}>
              <Ionicons name="water-outline" size={16} color="#D97706" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 13, fontWeight: '600', color: '#1F1F1F', fontFamily: 'Roboto-Regular', marginBottom: 1 }}>
                Drink Water
              </Text>
              <Text style={{ fontSize: 11, fontWeight: '500', color: '#4B4B4B', fontFamily: 'Roboto-Regular' }}>
                8 glasses today
              </Text>
            </View>
            <Text style={{ fontSize: 11, fontWeight: '700', color: '#E08E2C', fontFamily: 'Roboto-Regular', marginLeft: 10 }}>
              11:00 AM
            </Text>
          </View>
          {/* Medicine Reminder */}
          <View
            style={{
              backgroundColor: '#FFF4E2',
              borderRadius: 16,
              borderWidth: 1,
              borderColor: 'rgba(30,30,30,0.13)',
              paddingVertical: 10,
              paddingHorizontal: 14,
              flexDirection: 'row',
              alignItems: 'center',
              shadowColor: '#D97706',
              shadowOpacity: 0.06,
              shadowRadius: 10,
              elevation: 2,
            }}
          >
            <View style={{
              width: 28,
              height: 28,
              borderRadius: 14,
              backgroundColor: '#F5D395',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
              shadowColor: '#fff',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.12,
              shadowRadius: 2,
            }}>
              <Ionicons name="medkit-outline" size={16} color="#D97706" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 13, fontWeight: '600', color: '#1F1F1F', fontFamily: 'Roboto-Regular', marginBottom: 1 }}>
                Take Medicine
              </Text>
              <Text style={{ fontSize: 11, fontWeight: '500', color: '#4B4B4B', fontFamily: 'Roboto-Regular' }}>
                Vitamin D, after lunch
              </Text>
            </View>
            <Text style={{ fontSize: 11, fontWeight: '700', color: '#E08E2C', fontFamily: 'Roboto-Regular', marginLeft: 10 }}>
              2:00 PM
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}