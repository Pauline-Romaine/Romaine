import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BadgeCard = ({ name, icon, condition, unlocked }) => {
  return (
    <View style={[styles.card, !unlocked && styles.locked]}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.condition}>{condition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    width: "45%",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  locked: {
    opacity: 0.5,
  },
  icon: {
    fontSize: 30,
    marginBottom: 8,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 4,
    color: "#4B0082",
  },
  condition: {
    fontSize: 12,
    textAlign: "center",
    color: "#555",
  },
});

export default BadgeCard;
