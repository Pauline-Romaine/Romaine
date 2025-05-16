import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Mock history data
const historyData = [
  {
    id: "1",
    date: "2025-05-10",
    type: "Plastic",
    location: "PK14",
    weight: 6.2,
  },
  {
    id: "2",
    date: "2025-04-27",
    type: "Organic",
    location: "Logpom",
    weight: 2.7,
  },
  {
    id: "3",
    date: "2025-04-22",
    type: "Glass",
    location: "Bonanjo",
    weight: 1.5,
  },
  {
    id: "4",
    date: "2025-04-18",
    type: "Paper",
    location: "Yassa",
    weight: 3.1,
  },
  {
    id: "5",
    date: "2025-04-15",
    type: "Organic",
    location: "Bonamoussadi",
    weight: 1.8,
  },
  {
    id: "6",
    date: "2025-04-10",
    type: "Glass",
    location: "Bonapriso",
    weight: 2.3,
  },
  {
    id: "7",
    date: "2025-04-03",
    type: "Plastic",
    location: "Deido",
    weight: 4.0,
  },
  {
    id: "8",
    date: "2025-03-25",
    type: "Paper",
    location: "Bonaberi",
    weight: 1.2,
  },
];


export default function HistoryScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.date}>📅 {item.date}</Text>
      <Text style={styles.detail}>♻ Waste Type: {item.type}</Text>
      <Text style={styles.detail}>📍 Location: {item.location}</Text>
      <Text style={styles.detail}>⚖ Estimated Weight: {item.weight} kg</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Collection History</Text>

      <FlatList
        data={historyData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

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
  list: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  date: {
    fontWeight: "bold",
    color: "#4B0082",
    marginBottom: 5,
    fontSize: 16,
  },
  detail: {
    fontSize: 14,
    color: "#555",
    marginBottom: 3,
  },
});
