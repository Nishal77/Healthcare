import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../constants/Colors';

export default function DashboardScreen() {
  const quickActions = [
    {
      id: 1,
      title: 'Book Appointment',
      icon: 'calendar-outline',
      color: Colors.primary[600],
      onPress: () => console.log('Book Appointment'),
    },
    {
      id: 2,
      title: 'Add Health Record',
      icon: 'add-circle-outline',
      color: Colors.secondary[600],
      onPress: () => console.log('Add Health Record'),
    },
    {
      id: 3,
      title: 'View Reports',
      icon: 'document-text-outline',
      color: Colors.accent[600],
      onPress: () => console.log('View Reports'),
    },
    {
      id: 4,
      title: 'Emergency',
      icon: 'warning-outline',
      color: Colors.error,
      onPress: () => console.log('Emergency'),
    },
  ];

  const healthMetrics = [
    { label: 'Heart Rate', value: '72 BPM', color: Colors.health.heartRate },
    { label: 'Blood Pressure', value: '120/80', color: Colors.health.bloodPressure },
    { label: 'Weight', value: '70 kg', color: Colors.health.weight },
    { label: 'Temperature', value: '98.6°F', color: Colors.health.temperature },
  ];

  const renderQuickAction = (action: typeof quickActions[0]) => (
    <Pressable
      key={action.id}
      onPress={action.onPress}
      style={({ pressed }) => [
        {
          width: '48%',
          backgroundColor: 'white',
          padding: 16,
          borderRadius: 12,
          marginBottom: 16,
          shadowColor: Colors.black,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        },
        Platform.OS === 'ios' && pressed && { opacity: 0.8 }
      ]}
    >
      <View
        style={[{
          width: 48,
          height: 48,
          borderRadius: 24,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 12,
          backgroundColor: `${action.color}15`,
        }]}
      >
        <Ionicons
          name={action.icon as keyof typeof Ionicons.glyphMap}
          size={24}
          color={action.color}
        />
      </View>
      <Text style={{ fontSize: 14, fontWeight: '500', color: Colors.gray[900] }}>
        {action.title}
      </Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background.secondary }}>
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
        <View style={{ padding: 24, backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <View>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: Colors.gray[900] }}>
                Good Morning!
              </Text>
              <Text style={{ fontSize: 16, color: Colors.gray[500], marginTop: 4 }}>
                How are you feeling today?
              </Text>
            </View>
            <Pressable
              onPress={() => console.log('Notifications')}
              style={({ pressed }) => [
                {
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: Colors.gray[100],
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                Platform.OS === 'ios' && pressed && { opacity: 0.8 }
              ]}
            >
              <Ionicons 
                name="notifications-outline" 
                size={20} 
                color={Colors.gray[600]} 
              />
            </Pressable>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={{ padding: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: Colors.gray[900], marginBottom: 16 }}>
            Quick Actions
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {quickActions.map(renderQuickAction)}
          </View>
        </View>

        {/* Health Metrics */}
        <View style={{ padding: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: Colors.gray[900], marginBottom: 16 }}>
            Health Overview
          </Text>
          <View style={{ backgroundColor: 'white', borderRadius: 12, padding: 16 }}>
            {healthMetrics.map((metric, index) => (
              <React.Fragment key={metric.label}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: 6,
                        backgroundColor: metric.color,
                        marginRight: 12,
                      }}
                    />
                    <Text style={{ color: Colors.gray[700], fontWeight: '500' }}>
                      {metric.label}
                    </Text>
                  </View>
                  <Text style={{ color: Colors.gray[900], fontWeight: '600' }}>
                    {metric.value}
                  </Text>
                </View>
                {index < healthMetrics.length - 1 && (
                  <View style={{ height: 1, backgroundColor: Colors.gray[100] }} />
                )}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Recent Activity */}
        <View style={{ padding: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: Colors.gray[900], marginBottom: 16 }}>
            Recent Activity
          </Text>
          <View style={{ backgroundColor: 'white', borderRadius: 12, padding: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12 }}>
              <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: Colors.success + '15', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                <Ionicons name="checkmark" size={20} color={Colors.success} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: Colors.gray[900], fontWeight: '500' }}>
                  Appointment Completed
                </Text>
                <Text style={{ color: Colors.gray[500], fontSize: 14 }}>
                  Dr. Smith - General Checkup
                </Text>
              </View>
              <Text style={{ color: Colors.gray[400], fontSize: 12 }}>2 hours ago</Text>
            </View>
            
            <View style={{ height: 1, backgroundColor: Colors.gray[100], marginVertical: 8 }} />
            
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12 }}>
              <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: Colors.primary[600] + '15', alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
                <Ionicons name="add" size={20} color={Colors.primary[600]} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: Colors.gray[900], fontWeight: '500' }}>
                  Health Record Added
                </Text>
                <Text style={{ color: Colors.gray[500], fontSize: 14 }}>
                  Blood pressure reading
                </Text>
              </View>
              <Text style={{ color: Colors.gray[400], fontSize: 12 }}>1 day ago</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}