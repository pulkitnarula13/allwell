import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

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
            style={{ width: 186, height: 186  }}
            source={require("../../assets/images/patientsignup.png")}
          />
        </TouchableOpacity>
        <Text>I'm a Patient</Text>
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
            style={{ width: 234, height: 160, borderRadius: 4 }}
            resizeMode="cover"
            source={require("../../assets/images/doctorsignup.png")}
          />
       
        </TouchableOpacity>
        <Text>I'm a Doctor</Text>
      </View>
      {/* <View>
        <Text>Already have an account ? </Text>
      </View> */}
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
