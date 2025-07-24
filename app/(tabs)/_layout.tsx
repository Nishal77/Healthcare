import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { Platform, View } from 'react-native';
import TabBarIcon from '../../components/navigation/TabBarIcon';
import { Colors } from '../../constants/Colors';

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.primary[600],
          tabBarInactiveTintColor: Colors.gray[500],
          headerShown: false,
          tabBarHideOnKeyboard: Platform.OS === 'android',
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 88,
              paddingBottom: 30,
              paddingTop: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderTopWidth: 1,
              borderTopColor: Colors.gray[200],
            },
            android: {
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 60,
              paddingBottom: 10,
              paddingTop: 10,
              backgroundColor: Colors.white,
              borderTopWidth: 1,
              borderTopColor: Colors.gray[200],
              elevation: 8,
            },
          }),
          tabBarBackground: Platform.OS === 'ios' ? () => (
            <BlurView
              intensity={80}
              tint="light"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
            />
          ) : undefined,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Dashboard',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon 
                name={focused ? 'home' : 'home-outline'} 
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="appointments/index"
          options={{
            title: 'Appointments',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon 
                name={focused ? 'calendar' : 'calendar-outline'} 
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="records/index"
          options={{
            title: 'Records',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon 
                name={focused ? 'document-text' : 'document-text-outline'} 
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile/index"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon 
                name={focused ? 'person' : 'person-outline'} 
                color={color}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}