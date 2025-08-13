import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TrendingUp, Droplet, Flame, HeartPulse, Footprints } from 'lucide-react-native';

// Reusable analytics card component
function StatCard({ title, value, unit, icon, trend, trendColor }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardIcon}>{icon}</View>
      <View>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardValue}>
          {value}
          {unit ? <Text style={styles.cardUnit}>{unit}</Text> : null}
        </Text>
        <Text style={[styles.cardTrend, { color: trendColor }]}>
          {trend > 0 ? "+" : ""}
          {trend}%
        </Text>
      </View>
    </View>
  );
}

export default function HealthyicsScreen() {
  // Sample data (static or fetched from app state/API)
  const stats = [
    {
      title: "Steps",
      value: "8,247",
      unit: "",
      icon: <Footprints color="#2563eb" size={32} />,
      trend: 12,
      trendColor: "#22c55e",
    },
    {
      title: "Heart Rate",
      value: "72",
      unit: "bpm",
      icon: <HeartPulse color="#ef4444" size={32} />,
      trend: 12,
      trendColor: "#f59e42",
    },
    {
      title: "Water",
      value: "2.1",
      unit: "L / 4L",
      icon: <Droplet color="#0ea5e9" size={32} />,
      trend: 12,
      trendColor: "#06b6d4",
    },
    {
      title: "Calories",
      value: "1,847",
      unit: " kcal",
      icon: <Flame color="#f59e42" size={32} />,
      trend: 12,
      trendColor: "#f97316",
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: '#f8fafc' }}>
      <View style={styles.container}>
        <TrendingUp size={48} color="#2563eb" />
        <Text style={styles.title}>Healthlytics</Text>
        <Text style={styles.subtitle}>Health Analytics & Insights</Text>

        <View style={styles.cardContainer}>
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </View>

        <Text style={styles.sectionHeader}>Weekly Insights</Text>
        <Text style={styles.insight}>
          You're up <Text style={{ color: "#22c55e" }}>+12%</Text> in steps this week!
        </Text>
        {/* You can add charts, more insights, etc., here */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 24,
  },
  cardContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  card: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cardIcon: {
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 16,
    color: "#64748b",
    fontWeight: "500",
  },
  cardValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1e293b",
  },
  cardUnit: {
    fontSize: 14,
    color: "#64748b",
    fontWeight: "400",
  },
  cardTrend: {
    fontSize: 14,
    marginTop: 2,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2563eb",
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  insight: {
    fontSize: 16,
    color: "#1e293b",
    marginBottom: 32,
    alignSelf: "flex-start",
  }
});
