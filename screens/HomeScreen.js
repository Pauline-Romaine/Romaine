import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const totalWaste = 124.5; // kg
  const totalPoints = 8;
  const nextCollection = "Saturday, May 18 at 10:00 AM";

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Header />

      {/* Menu Button */}
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
          <Ionicons name="ellipsis-vertical" size={28} color="#4B0082" />
        </TouchableOpacity>

        {menuVisible && (
          <View style={styles.dropdown}>
            <TouchableOpacity onPress={() => { setMenuVisible(false); navigation.navigate("Map"); }}>
              <Text style={styles.menuItem}>Map</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setMenuVisible(false); navigation.navigate("AddReport"); }}>
              <Text style={styles.menuItem}>Add Report</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setMenuVisible(false); navigation.navigate("History"); }}>
              <Text style={styles.menuItem}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setMenuVisible(false); navigation.navigate("Profile"); }}>
              <Text style={styles.menuItem}>Profile</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Dashboard Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Dashboard</Text>


        <View style={styles.card}>
          <Text style={styles.cardLabel}>Total Waste Collected</Text>
          <Text style={styles.cardValue}>{totalWaste} kg</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>Collection Points</Text>
          <Text style={styles.cardValue}>{totalPoints}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardLabel}>Next Collection</Text>
          <Text style={styles.cardValue}>{nextCollection}</Text>
        </View>
      </ScrollView>

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
  content: {
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#4B0082",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 25,
  },
  card: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardLabel: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2E0854",
  },
  menuContainer: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 10,
  },
  dropdown: {
    marginTop: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    padding: 10,
  },
  menuItem: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#4B0082",
  },
});
