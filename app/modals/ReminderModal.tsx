import React, { useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface ReminderModalProps {
  visible: boolean;
  onClose: () => void;
}

const ReminderModal: React.FC<ReminderModalProps> = ({ visible, onClose }) => {
  const [reminders, setReminders] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addReminder = () => {
    if (input.trim()) {
      setReminders([...reminders, input.trim()]);
      setInput('');
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Reminders</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>×</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={reminders}
            keyExtractor={(item, idx) => idx.toString()}
            renderItem={({ item }) => (
              <View style={styles.reminderItem}>
                <Text style={styles.reminderText}>{item}</Text>
              </View>
            )}
            ListEmptyComponent={<Text style={{ color: '#888', textAlign: 'center', marginTop: 20 }}>No reminders yet.</Text>}
            style={{ flexGrow: 0, marginBottom: 16 }}
          />
          <View style={styles.inputRow}>
            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder="Add a new reminder..."
              style={styles.input}
              onSubmitEditing={addReminder}
              returnKeyType="done"
            />
            <TouchableOpacity onPress={addReminder} style={styles.addBtn}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F1F1F',
  },
  closeBtn: {
    padding: 4,
    borderRadius: 8,
  },
  reminderItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  reminderText: {
    fontSize: 16,
    color: '#333',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    marginRight: 8,
    backgroundColor: '#F7F7F7',
  },
  addBtn: {
    backgroundColor: '#B99470',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
});

export default ReminderModal; 