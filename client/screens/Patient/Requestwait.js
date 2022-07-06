import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Requestwait = () => {
  return (
    <View style={styles.outer}>
      <Text style={styles.textone}>You are in a queue!</Text>
      <Image
        style={styles.image2}
        source={require("../../assets/Clock.jpeg")}
        resizeMode="center"
      />
      <Text style={{ width: 170, height: 57 }}>
        Please wait until doctor accept your request.
      </Text>
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
  textone: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24.2,
  },
  image2: {
    width: 190,
    height: 190,
    marginTop: 48,
    marginBottom: 20,
  },
});

export default Requestwait;
