import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const DoctorPatientSelection = () => {
  return (
    <View style={style.container}>
      <View>
        <TouchableOpacity style={{ width: 316, height: 208, borderRadius: 20, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{ width: 112, height: 112, borderRadius: 4 }}
            source={require("../../assets/adaptive-icon.png")}
          />
          <Text>I'm a Patient</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={{ width: 316, height: 208, borderRadius: 20, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{ width: 112, height: 112, borderRadius: 4 }}
            source={require("../../assets/adaptive-icon.png")}
          />
          <Text>I'm a Doctor</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Already have an account ? </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DoctorPatientSelection;
