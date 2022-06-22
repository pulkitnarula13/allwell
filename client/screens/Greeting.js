import { View, Button, StyleSheet } from "react-native";
import React from "react";
import GoogleSignup from "../components/GoogleSignup";

const Greeting = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Button
        title="Go to Doctor/Patient Selection"
        onPress={() => navigation.navigate("Doctor-Patient-Selection")}
      />
      < GoogleSignup />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Greeting;
