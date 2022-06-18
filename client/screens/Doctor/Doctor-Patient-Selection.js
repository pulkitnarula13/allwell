import { View, Text, StyleSheet } from "react-native";
import React from "react";

const DoctorPatientSelection = () => {
  return (
    <View style={style.container}>
      <Text>Doctor-Patient-Selection</Text>
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


export default DoctorPatientSelection;
