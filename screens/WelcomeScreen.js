import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.logo}>♻</Text>

      <Text style={styles.title}>Welcome to the App!</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate("Signup")}
          color="#8A2BE2"
        />
        <View style={styles.spacer} />
        <Button
          title="Log In"
          onPress={() => navigation.navigate("Login")}
          color="#8A2BE2"
        />
      </View>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F2EAFB",
    paddingVertical: 50,
  },
  logo: {
    fontSize: 240,
    marginBottom: 20,
    color: "#4B0082",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4B0082",
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
  },
  spacer: {
    height: 10,
  },
});

export default WelcomeScreen;
