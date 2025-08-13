import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Pill } from 'lucide-react-native';

export default function CuraScreen() {
  return (
    <View style={styles.container}>
      <Pill size={48} color="#2563eb" />
      <Text style={styles.title}>CURA</Text>
      <Text style={styles.subtitle}>Medication & Treatment Tracking</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold' as const,
    color: '#1e293b',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
});