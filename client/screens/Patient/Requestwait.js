import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const Requestwait = (props) => {
  return (
    <View style={styles.outer}>
      <Text style={styles.textone}>Appointment Booked!!</Text>
      <Image
        style={styles.image2}
        source={require("../../assets/clockAni_Sketch.png")}
        resizeMode="center"
      />
      {/* <Text style={{ width: 170, height: 57 }}>
        Please wait until doctor accept your request.
      </Text> */}
      <View style={styles.btn1}>
        <Button
          title="Go to Home"
          color="white"
          onPress={() => props.navigation.navigate("Home")}
        > Go To Home</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    display: "flex",
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  btn1: {
    width: 257,
    height: 40,
    backgroundColor: "#74CBD4",
    borderRadius: 8,
  },
  textone: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24.2,
  },
  image2: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
});

export default Requestwait;
