import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TrendingUp } from 'lucide-react-native';

export default function HealthyicsScreen() {
  return (
    <View style={styles.container}>
      <TrendingUp size={48} color="#2563eb" />
      <Text style={styles.title}>Healthyics</Text>
      <Text style={styles.subtitle}>Health Analytics & Insights</Text>
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