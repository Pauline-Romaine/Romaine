import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Waste types and statuses
const wasteTypesLabels = {
  plastic: "Plastic",
  glass: "Glass",
  organic: "Organic",
  paper: "Paper",
};

const statusLabels = {
  full: "Full",
  inProgress: "In Progress",
  empty: "Empty",
};

// Collection points data
const collectionPoints = [
  {
    id: "1",
    name: "PK14 Collection Point",
    coordinate: { latitude: 4.1060, longitude: 9.7670 },
    wasteTypes: ["plastic", "organic"],
    status: "inProgress",
  },
  {
    id: "2",
    name: "Logpom Collection Point",
    coordinate: { latitude: 4.0840, longitude: 9.7675 },
    wasteTypes: ["glass", "paper"],
    status: "full",
  },
  {
    id: "3",
    name: "Bonanjo Collection Point",
    coordinate: { latitude: 4.0436, longitude: 9.6919 },
    wasteTypes: ["plastic", "glass", "organic"],
    status: "empty",
  },
  {
    id: "4",
    name: "Yassa Collection Point",
    coordinate: { latitude: 4.1045, longitude: 9.8422 },
    wasteTypes: ["organic", "paper"],
    status: "full",
  },
  {
    id: "5",
    name: "Bonamoussadi Collection Point",
    coordinate: { latitude: 4.0721, longitude: 9.7031 },
    wasteTypes: ["plastic", "glass"],
    status: "inProgress",
  },
  {
    id: "6",
    name: "Bonapriso Collection Point",
    coordinate: { latitude: 4.0514, longitude: 9.7366 },
    wasteTypes: ["paper", "glass", "organic"],
    status: "empty",
  },
  {
    id: "7",
    name: "Deido Collection Point",
    coordinate: { latitude: 4.0592, longitude: 9.7268 },
    wasteTypes: ["plastic", "organic"],
    status: "inProgress",
  },
  {
    id: "8",
    name: "Bonaberi Collection Point",
    coordinate: { latitude: 4.0921, longitude: 9.6712 },
    wasteTypes: ["glass", "organic", "paper"],
    status: "full",
  },
];

// Function to simulate distances (in km)
function getRandomDistance() {
  return (Math.random() * 5 + 0.5).toFixed(2); // 0.5 to 5.5 km
}

export default function MapScreen() {
  // Store simulated distances in state so they stay consistent during the session
  const [distances, setDistances] = useState({});

  useEffect(() => {
    // Calculate random distances for each point
    let distObj = {};
    collectionPoints.forEach((point) => {
      distObj[point.id] = getRandomDistance();
    });
    setDistances(distObj);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.pointName}>{item.name}</Text>
      <Text style={styles.detail}>
        Waste Types: {item.wasteTypes.map((t) => wasteTypesLabels[t]).join(", ")}
      </Text>
      <Text style={styles.detail}>Status: {statusLabels[item.status]}</Text>
      <Text style={styles.detail}>
        Estimated Distance: {distances[item.id] ?? "..."} km
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Collection Points Map</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 4.0840,
          longitude: 9.7675,
          latitudeDelta: 0.07,
          longitudeDelta: 0.07,
        }}
      >
        {collectionPoints.map((point) => (
          <Marker
            key={point.id}
            coordinate={point.coordinate}
            title={point.name}
            description={`Accepts: ${point.wasteTypes
              .map((t) => wasteTypesLabels[t])
              .join(", ")}`}
            pinColor={
              point.status === "full"
                ? "red"
                : point.status === "inProgress"
                ? "orange"
                : "green"
            }
          />
        ))}
      </MapView>

      <Text style={styles.listTitle}>Collection Points Details</Text>
      <FlatList
        data={collectionPoints}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4EFFF",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4B0082",
    textAlign: "center",
    marginVertical: 10,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.4,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#4B0082",
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 5,
  },
  list: {
    marginHorizontal: 15,
  },
  listItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  pointName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  detail: {
    fontSize: 14,
    color: "#555",
  },
});
