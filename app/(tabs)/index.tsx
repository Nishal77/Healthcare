import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useMemo, useState } from 'react';
import { Image, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ReminderModal from '../modals/ReminderModal';
import Activity from '../../components/Activity';

export default function DashboardScreen() {
  const [showReminderModal, setShowReminderModal] = useState(false);
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

        {/* Activity Section */}
        <Activity />

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
              value: 'Good',
              status: 'good',
            },
            {
              label: 'Energy',
              icon: 'flash-outline',
              value: 'Average',
              status: 'warning',
            },
            {
              label: 'Sleep',
              icon: 'moon-outline',
              value: '6h avg',
              status: 'warning',
            },
            {
              label: 'Mood',
              icon: 'happy-outline',
              value: 'Positive',
              status: 'good',
            },
            {
              label: 'Bowel Movement',
              icon: 'water-outline',
              value: 'Irregular',
              status: 'bad',
            },
            {
              label: 'Menstrual Cycle',
              icon: 'female-outline',
              value: 'Irregular',
              status: 'bad',
            },
          ].map((item, idx) => {
            let boxColor: [string, string];
            let iconColor: string;
            let labelColor: string;
            let valueColor: string;
            if (item.status === 'good') {
              boxColor = ['#DCF5E3', '#B6F0C2']; // green
              iconColor = '#388E3C';
              labelColor = '#215732';
              valueColor = '#215732';
            } else if (item.status === 'warning') {
              boxColor = ['#FFF9E3', '#FFE9A7']; // yellow
              iconColor = '#F59E0B';
              labelColor = '#B68900';
              valueColor = '#B68900';
            } else {
              boxColor = ['#FDE2E1', '#FFBABA']; // red
              iconColor = '#D81B60';
              labelColor = '#B71C1C';
              valueColor = '#B71C1C';
            }
            return (
              <LinearGradient
                key={item.label}
                colors={boxColor}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  width: '47%',
                  borderRadius: 14,
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  marginBottom: 10,
                  marginRight: idx % 2 === 0 ? '6%' : 0,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  minHeight: 44,
                  shadowColor: iconColor,
                  shadowOpacity: 0.06,
                  shadowRadius: 10,
                  elevation: 1,
                  borderWidth: 1,
                  borderColor: item.status === 'good' ? 'rgba(30,120,30,0.13)' : item.status === 'warning' ? 'rgba(200,180,30,0.13)' : 'rgba(200,30,30,0.13)',
                }}
              >
                <View style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  backgroundColor: iconColor + '22',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 10,
                }}>
                  <Ionicons name={item.icon as any} size={14} color={iconColor} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 11, fontWeight: '700', color: labelColor, fontFamily: 'Roboto-Regular', marginBottom: 0 }}>
                    {item.label}
                  </Text>
                  <Text style={{ fontSize: 12, fontWeight: '500', color: valueColor, fontFamily: 'Roboto-Regular' }}>
                    {item.value}
                  </Text>
                </View>
              </LinearGradient>
            );
          })}
        </View>

        {/* Daily Reminder Section */}
        <View className="mx-5 mb-0">
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <Text style={{ fontSize: 18, fontWeight: '700', color: '#1F1F1F', fontFamily: 'Roboto-Regular' }}>
              Daily Reminder
            </Text>
            <TouchableOpacity
              style={{ backgroundColor: '#B99470', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 6 }}
              onPress={() => setShowReminderModal(true)}
              activeOpacity={0.8}
            >
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 15 }}>Add</Text>
            </TouchableOpacity>
          </View>
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
      {/* Reminder Modal */}
      <ReminderModal visible={showReminderModal} onClose={() => setShowReminderModal(false)} />
    </SafeAreaView>
  );
}