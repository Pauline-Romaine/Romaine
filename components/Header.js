import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>♻ Waste Management App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    width: '100%',
    backgroundColor: "#D8BFD8",
    alignItems: 'center',
  },
  text: {
    color: "#4B0082",
    fontSize: 18,
    fontWeight: 'bold',
  },
});
