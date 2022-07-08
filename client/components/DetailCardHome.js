import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DetailCardHome = ({ config,item }) => {
  return (
    
    <View style={config.type === "solid" ? styles.solidContainerConfig : styles.outlineContainerConfig}>
      <View style={styles.buttonContainer}>
        <Button ><MaterialCommunityIcons name="message-text-clock-outline" size={24} color="white"/></Button>
      </View>
      <View style={styles.textContainer}>
        <Text style={config.type === "solid" ? styles.solidTextConfig: styles.outlineTextConfig}>{item.length}</Text>
        <Text style={config.type === "solid" ? styles.solidTextConfig: styles.outlineTextConfig} >{config.title}</Text>
      </View>
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    display: "flex",
    gap: 20,
    alignItems: "center"
  },   
  solidContainerConfig: {
    backgroundColor: "#718096",
    height: 170,
    marginRight:20,
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    borderRadius: 8,
    gap: 20,
    justifyContent: "space-evenly"
  },
  outlineContainerConfig: {
    backgroundColor: "#718096",
    height: 170,
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    borderRadius: 8,
    gap: 20,
    justifyContent: "space-evenly"
  },
  solidTextConfig:  {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom:42

  },
  outlineTextConfig: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom:42
  },
  buttonContainer: {
    alignItems: "flex-start",
    display: "flex",
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default DetailCardHome;
