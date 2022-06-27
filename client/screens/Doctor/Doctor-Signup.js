
import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import CreatingAccount1 from "../../components/CreatingAccount1";
import Stepper from "react-native-stepper-ui";
import CreatingAccount2 from "../../components/CreatingAccount2";
import CreatingAccount3 from "../../components/CreatingAccount3";

const content = [
  <CreatingAccount1 />,
  <CreatingAccount2 />,
  <CreatingAccount3 />,
];

const DoctorSignup = () => {
  const [active, setActive] = useState(0);

  return (
    <View style={{ marginVertical: 50, marginHorizontal: 60 }}>
      <Text style={styles.firstHeading}>Creating Account</Text>
      <Stepper
        active={active}
        content={content}
        onBack={() => setActive((p) => p - 1)}
        onFinish={() => alert("Finish")}
        onNext={() => setActive((p) => p + 1)}
        buttonStyle={() => {
          styles.buttonstyle;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  buttonstyle: {
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
    width: 302,
    height: 45,
    justifyContent: "center",
  },
  firstHeading: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 29.05,
    textAlign: "center",
    marginBottom: 24,
  },
});

export default DoctorSignup;
