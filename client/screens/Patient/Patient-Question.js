import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const PatientQuestion = () => {
  return (
    <View style={styles.outer}>
      <View style={styles.imageview}>
        <Image
          style={styles.image1}
          source={require("../../assets/icon.png")}
          resizeMode="center"
        />
      </View>
      <Text>Question</Text>
      <Text style={styles.textheight}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          marginTop: 40,
        }}
      >
        <Button
          style={styles.availablebtn}
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Go Back
        </Button>

        <Button
          style={styles.availablebtn1}
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Next
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image1: {
    width: 235,
    height: 248,
  },
  textheight: {
    width: 320,
    height: 130,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    marginTop: 11,
    marginBottom: 40,
  },
  availablebtn: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    width: 150,
    height: 45,
    justifyContent: "center",

    fontWeight: "500",
    fontSize: 17,
    marginRight: 30,
  },
  availablebtn1: {
    backgroundColor: "#ffff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    width: 150,
    height: 45,
    justifyContent: "center",

    fontWeight: "500",

    fontSize: 17,
  },

  imageview: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 38,
  },
  outer: {
    display: "flex",
    flex: 1,
    padding: 30,
  },
});
export default PatientQuestion;
