import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function EmojiMoodTracker() {
  // Sample data for week
  const weekData = [
    { day: 'Mon', emoji: '😴', mood: 'Tired' },
    { day: 'Tue', emoji: '🙂', mood: 'Okay' },
    { day: 'Wed', emoji: '😁', mood: 'Happy' },
    { day: 'Thu', emoji: '😐', mood: 'Neutral' },
    { day: 'Fri', emoji: '🤩', mood: 'Excited' },
    { day: 'Sat', emoji: '😎', mood: 'Chill' },
    { day: 'Sun', emoji: '🥱', mood: 'Sleepy' },
  ];

  const screenPadding = 8;
  const gap = 8;
  const totalGaps = gap * (weekData.length - 1);
  const width = Dimensions.get('window').width;
  const available = width - screenPadding * 2 - totalGaps;
  const cardWidth = Math.floor(available / weekData.length);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weekly Mood Tracker</Text>
      <View style={[styles.row, { paddingHorizontal: screenPadding, columnGap: gap }]}>
        {weekData.map((item, index) => (
          <LinearGradient
            key={index}
            colors={['#4facfe', '#00f2fe']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.card, { width: cardWidth }]}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.day}>{item.day}</Text>
            <Text style={styles.mood}>{item.mood}</Text>
          </LinearGradient>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: '#333',
    paddingHorizontal: 9,
    fontFamily: 'Roboto-Regular',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: 72,
    height: 96,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)'
  },
  emoji: {
    fontSize: 30,
    marginBottom: 4,
  },
  day: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
    fontFamily: 'Roboto-Regular',
  },
  mood: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.9)',
    fontFamily: 'Roboto-Regular',
  },
});


