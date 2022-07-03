import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const DetailCardHome = ({ config, item }) => {
    console.log(item, "length");
  return (
    <View style={config.type === "solid" ? styles.solidContainerConfig : styles.outlineContainerConfig}>
      <View style={styles.buttonContainer}>
        <Button icon={config.icon}></Button>
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
    gap: "20px",
    alignItems: "center"
  },   
  solidContainerConfig: {
    backgroundColor: "#74CBD4",
    height: 170,
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    borderRadius: 8,
    gap: "20px",
    justifyContent: "space-evenly"
  },
  outlineContainerConfig: {
    backgroundColor: "white",
    height: 170,
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    borderRadius: 8,
    gap: "20px",
    justifyContent: "space-evenly"
  },
  solidTextConfig:  {
    color: "white",
    fontSize: 22,
    fontWeight: "bold"

  },
  outlineTextConfig: {
    color: "#74CBD4",
    fontSize: 22,
    fontWeight: "bold"
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
