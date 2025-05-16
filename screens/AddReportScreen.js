import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import Header from "../components/Header";
import Footer from "../components/Footer";

// export default function AddReportScreen() {
  const AddReportScreen = () => {
    const [wasteType, setWasteType] = useState("plastic");
    const [weight, setWeight] = useState("");
    const [imageUri, setImageUri] = useState(null);
    const [location, setLocation] = useState("PK14");
  
    const handleChoosePhoto = async () => {
      let permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permission.granted) {
        Alert.alert("Permission denied", "We need access to your photos.");
        return;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
  
      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    };
  
    const handleSubmit = () => {
      if (!weight) {
        Alert.alert("Missing field", "Please enter the estimated weight.");
        return;
      }
  
      Alert.alert("Report Submitted", `Thanks for reporting ${wasteType} waste.`);
      // Reset form
      setWeight("");
      setImageUri(null);
      setWasteType("plastic");
      setLocation("PK14");
    };
  
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>Add Waste Report</Text>
  
        <View style={styles.form}>
          <Text style={styles.label}>Type of Waste</Text>
          <Picker
            selectedValue={wasteType}
            onValueChange={(itemValue) => setWasteType(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Plastic" value="plastic" />
            <Picker.Item label="Glass" value="glass" />
            <Picker.Item label="Organic" value="organic" />
            <Picker.Item label="Paper" value="paper" />
          </Picker>
  
          <Text style={styles.label}>Estimated Weight (kg)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
            placeholder="e.g. 2.5"
          />
  
          <Text style={styles.label}>Deposit Location</Text>
          <Picker
            selectedValue={location}
            onValueChange={(itemValue) => setLocation(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="PK14" value="PK14" />
            <Picker.Item label="Logpom" value="Logpom" />
            <Picker.Item label="Bonanjo" value="Bonanjo" />
            <Picker.Item label="Yassa" value="Yassa" />
            <Picker.Item label="Bonamoussadi" value="Bonamoussadi" />
            <Picker.Item label="Bonapriso" value="Bonapriso" />
            <Picker.Item label="Deido" value="Deido" />
            <Picker.Item label="Bonaberi" value="Bonaberi" />
          </Picker>

  
          <Text style={styles.label}>Add Photo (Optional)</Text>
          <TouchableOpacity onPress={handleChoosePhoto} style={styles.photoButton}>
            <Text style={styles.photoButtonText}>Choose Image</Text>
          </TouchableOpacity>
  
          {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
  
          <View style={styles.submitButton}>
            <Button title="Submit Report" onPress={handleSubmit} color="#8A2BE2" />
          </View>
        </View>
        <Footer />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F2EAFB",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 24,
      textAlign: "center",
      marginVertical: 15,
      color: "#4B0082",
      fontWeight: "bold",
    },
    form: {
      paddingHorizontal: 20,
    },
    label: {
      fontSize: 16,
      color: "#4B0082",
      marginBottom: 5,
      marginTop: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      backgroundColor: "#fff",
      padding: 10,
      marginBottom: 10,
    },
    picker: {
      backgroundColor: "#fff",
      borderRadius: 8,
      marginBottom: 10,
    },
    photoButton: {
      backgroundColor: "#8A2BE2",
      padding: 10,
      borderRadius: 8,
      marginBottom: 10,
      alignItems: "center",
    },
    photoButtonText: {
      color: "#fff",
      fontWeight: "bold",
    },
    image: {
      width: "100%",
      height: 180,
      borderRadius: 10,
      marginBottom: 15,
    },
    submitButton: {
      marginTop: 15,
    },
  });
  
  export default AddReportScreen;