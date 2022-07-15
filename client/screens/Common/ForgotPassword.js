import React, { useState } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");

const ForgotPassword = () => {
  const [email, setemail] = useState("");
  //   const [image1, setimage1] = useState(".../assets/icon.png");
    const [clicked, setclicked] = useState(false);

  const changepage = () => {
    setclicked(true);
  };

  return (
    <View>
      <View>
        <Text style={styles.pageTitle}>Forgot your password?</Text>
      </View>
      <View>
        <Text style={styles.accountHeading1}>
          We will send you the new password to this email for reset.
        </Text>
        <TextInput
          style={styles.inputbox}
          mode="outlined"
          label="email"
          placeholder="asd@as.com"
          value={email}
          onChangeText={(text) => setemail(text)}
        />
        <Button style={styles.buttonnew} mode="contained" onPress={changepage}>
          Send Password
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonnew: {
    backgroundColor: "#D9D9D9",
    width: 257,
    height: 40,
    justifyContent: "center",
    marginLeft: 60,
    marginRight: 73,
  },
  pageTitle: {
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 29.05,
    marginTop: 100,
    marginLeft: 60,
    marginRight: 73,
    textAlign: "center",
  },
  inputbox: {
    width: 256,
    height: 40,
    marginLeft: 61,
    marginRight: 73,
    marginBottom: 36,
  },

  firstHeading: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 29.05,
    textAlign: "center",
  },
  outerview: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    height: height,
    flex: 1,
    padding: 32,
  },
  indicatorContainer: {
    height: 22,
    width: 348,
    padding: 20,
    margin: 15,
    elevation: 10,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  accountHeading: {
    fontSize: 20,
    fontWeight: "600",
    color: "gray",
    marginTop: 20,
  },
  accountHeading1: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22,
    marginTop: 95,
    marginBottom: 47,
    marginLeft: 49,
    marginRight: 49,
    marginBottom: 38,
  },
  accountImage: {
    width: 302,
    height: 194,
    marginRight: 21,
  },
  buttonview: {
    marginTop: 76,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ForgotPassword;
