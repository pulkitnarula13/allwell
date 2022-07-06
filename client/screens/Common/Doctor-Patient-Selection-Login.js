import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const DoctorPatientSelectionLogin = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={{marginTop:90,borderRadius: 20,borderColor:"#74CBD4",borderWidth:2,marginBottom:56}}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Patient-Login")}
          style={{
            width: 316,
            height: 208,
            borderRadius: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 112, height: 112  }}
            source={require("../../assets/adaptive-icon.png")}
          />
          <Text>I'm a Patient</Text>
        </TouchableOpacity>
      </View>
      <View style={{borderRadius: 20,borderColor:"#74CBD4",borderWidth:2,marginBottom:30}}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Doctor-Login")}
          style={{
            width: 316,
            height: 208,
            borderRadius: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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

export default DoctorPatientSelectionLogin;
