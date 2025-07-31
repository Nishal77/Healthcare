import { Ionicons } from '@expo/vector-icons';
import React, { useMemo, useState } from 'react';
import { Image, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Activity from '../../components/Activity';
import ReminderModal from '../modals/ReminderModal';

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

        {/* Daily Reminder Section */}
        <View className="mx-5 mb-0">
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <Text style={{ fontSize: 22, fontWeight: '700', color: '#1F1F1F', fontFamily: 'Roboto-Regular' }}>
              Daily Reminder
            </Text>
            <TouchableOpacity
              style={{ backgroundColor: '#3B82F6', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 8 }}
              onPress={() => setShowReminderModal(true)}
              activeOpacity={0.8}
            >
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>Add</Text>
            </TouchableOpacity>
          </View>
          {/* Water Reminder */}
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.08)',
              paddingVertical: 16,
              paddingHorizontal: 18,
              flexDirection: 'row',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 12,
              elevation: 4,
              marginBottom: 12,
            }}
          >
            <View style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#DBEAFE',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 14,
              shadowColor: '#3B82F6',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
            }}>
              <Ionicons name="water-outline" size={20} color="#3B82F6" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#1F1F1F', fontFamily: 'Roboto-Regular', marginBottom: 4 }}>
                Drink Water
              </Text>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#6B7280', fontFamily: 'Roboto-Regular' }}>
                8 glasses today
              </Text>
            </View>
            <Text style={{ fontSize: 14, fontWeight: '700', color: '#3B82F6', fontFamily: 'Roboto-Regular', marginLeft: 10 }}>
              11:00 AM
            </Text>
          </View>
          {/* Medicine Reminder */}
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.08)',
              paddingVertical: 16,
              paddingHorizontal: 18,
              flexDirection: 'row',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 12,
              elevation: 4,
            }}
          >
            <View style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#FEF3C7',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 14,
              shadowColor: '#F59E0B',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
            }}>
              <Ionicons name="medkit-outline" size={20} color="#F59E0B" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#1F1F1F', fontFamily: 'Roboto-Regular', marginBottom: 4 }}>
                Take Medicine
              </Text>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#6B7280', fontFamily: 'Roboto-Regular' }}>
                Vitamin D, after lunch
              </Text>
            </View>
            <Text style={{ fontSize: 14, fontWeight: '700', color: '#F59E0B', fontFamily: 'Roboto-Regular', marginLeft: 10 }}>
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