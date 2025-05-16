import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BadgeCard from "../components/BadgeCard";
import { badges } from "../constants/badges";
// import { user } from "../data/mockData";
import { ProgressBar } from "react-native-paper"; // Optional but nice if you have it

// Simulated user data
const user = {
  name: "Althaya",
  address: "Douala, Cameroon",
  totalCollected: 48.6, // kg
  currentRank: {
    name: "♻ Recycleur Actif",
    progress: 0.45, // 45% toward next rank
  },
  badges: [
    { name: "🧃 Plastic Sorter", unlocked: true },
    { name: "📸 Reporter", unlocked: true },
    { name: "🧠 Eco Adviser", unlocked: false },
    { name: "🧩 Multi-Sorter", unlocked: true },
    { name: "🗺 Explorer", unlocked: true },
    { name: "🔥 Express Recycler", unlocked: false },
  ],
};

export default function ProfileScreen() {
  const renderBadge = ({ item }) => (
    <View style={[styles.badgeCard, !item.unlocked && styles.lockedBadge]}>
      <Text style={styles.badgeIcon}>{item.name.split(" ")[0]}</Text>
      <Text style={styles.badgeText}>{item.name.split(" ").slice(1).join(" ")}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Your Profile</Text>

      <View style={styles.section}>
        <Text style={styles.label}>👤 Name: {user.name}</Text>
        <Text style={styles.label}>🏠 Address: {user.address}</Text>
        <Text style={styles.label}>♻ Total Collected: {user.totalCollected} kg</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>🌟 Current Rank</Text>
        <Text style={styles.rankText}>{user.currentRank.name}</Text>
        <View style={styles.progressBar}>
          <View style={{ ...styles.progressFill, width: `${user.currentRank.progress * 100}%` }} />
        </View>
        <TouchableOpacity>
          <Text style={styles.link}>See how to progress ➜</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>🏅 Your Badges</Text>
        <FlatList
          data={user.badges}
          numColumns={2}
          keyExtractor={(item) => item.name}
          renderItem={renderBadge}
          contentContainerStyle={styles.badgeList}
        />
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4EFFF",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    color: "#4B0082",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#4B0082",
    marginBottom: 8,
  },
  rankText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: "#DDD",
    borderRadius: 6,
    overflow: "hidden",
    marginBottom: 10,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#8A2BE2",
  },
  link: {
    color: "#8A2BE2",
    fontWeight: "600",
    textAlign: "right",
  },
  badgeList: {
    gap: 10,
  },
  badgeCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    margin: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  lockedBadge: {
    opacity: 0.5,
  },
  badgeIcon: {
    fontSize: 30,
  },
  badgeText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
    color: "#333",
  },
});