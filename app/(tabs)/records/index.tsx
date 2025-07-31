import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PATIENTS = [
  { id: '1', name: 'Aarav Sharma', age: 32, gender: 'Male', lastVisit: '2023-07-10', summary: 'Routine checkup, all vitals normal.' },
  { id: '2', name: 'Priya Singh', age: 28, gender: 'Female', lastVisit: '2023-07-08', summary: 'Follow-up for hypertension, medication adjusted.' },
  { id: '3', name: 'Rahul Mehta', age: 45, gender: 'Male', lastVisit: '2023-07-05', summary: 'Diabetes management, improved glucose levels.' },
  { id: '4', name: 'Sneha Patel', age: 36, gender: 'Female', lastVisit: '2023-07-01', summary: 'Annual physical, recommended more exercise.' },
];

export default function RecordsScreen() {
  const [search, setSearch] = useState('');
  const filtered = PATIENTS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.headerRow}>
        <Text style={styles.title}>Patient Records</Text>
      </View>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#AAB49A" style={{ marginRight: 8 }} />
        <TextInput
          style={styles.input}
          placeholder="Search patients..."
          placeholderTextColor="#AAB49A"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.gender}>{item.gender}, {item.age}</Text>
            </View>
            <Text style={styles.lastVisit}>Last Visit: <Text style={{ color: '#283618' }}>{item.lastVisit}</Text></Text>
            <Text style={styles.summary}>{item.summary}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No patients found.</Text>}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 8,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#283618',
    fontFamily: 'Roboto-Regular',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#222',
    fontFamily: 'Roboto-Regular',
  },
  listContent: {
    paddingBottom: 32,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#283618',
    fontFamily: 'Roboto-Regular',
  },
  gender: {
    fontSize: 14,
    color: '#AAB49A',
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
  },
  lastVisit: {
    fontSize: 13,
    color: '#888',
    marginBottom: 4,
    fontFamily: 'Roboto-Regular',
  },
  summary: {
    fontSize: 15,
    color: '#222',
    fontFamily: 'Roboto-Regular',
  },
  empty: {
    textAlign: 'center',
    color: '#AAB49A',
    fontSize: 16,
    marginTop: 40,
    fontFamily: 'Roboto-Regular',
  },
}); 