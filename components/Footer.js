import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 WasteApp - Simulation Mode</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    width: '100%',
    backgroundColor: '#8A2BE2',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 12,
  },
});
