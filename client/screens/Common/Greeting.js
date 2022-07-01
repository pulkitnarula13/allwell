import { View, Button, StyleSheet } from "react-native";
import React from "react";
import GoogleSignup from "../../components/GoogleSignup";
import { Divider } from "react-native-paper";
import { Text } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const Greeting = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text variant="displayLarge">Greeting!</Text>
        <Text variant="displaySmall">
          With Medico, you can connect to the doctor anytime you want 24/7.
        </Text>
      </View>
      <View style={style.button}>
        <Button
          title="Signup with Email"
          onPress={() => navigation.navigate("Doctor-Patient-Selection-Signup")}
        />
      {/* <GoogleSignup /> */}
        <Button
          title="Login"
          onPress={() => navigation.navigate("Doctor-Patient-Selection-Login")}
        />
        <Divider />
        <TouchableOpacity style={style.guest}>
          <Text> Continue as Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    display: "flex",
    alignItems: "flex-start",
    margin: 40,
    gap: 10,
  },
  button: {
    width: 315,
    height: 49,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    margin: 40,
  },
  guest: {
    textAlign: "center",
  },
});

export default Greeting;
