import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import CreatingAccount1 from "../../components/CreatingAccount1";
import Stepper from "react-native-stepper-ui";
import CreatingAccount2 from "../../components/CreatingAccount2";
import CreatingAccount3 from "../../components/CreatingAccount3";
import axios from "axios";

const DoctorSignup = () => {
  const [active, setActive] = useState(0);
  const [firstStepData, setFirstStepperData] = useState();
  const [secondStepperData, setSecondStepperData] = useState();
  const [thirdStepperData, setThirdStepperData] = useState();

  const content = [
    <CreatingAccount1
      mainData={firstStepData}
      setFirstStepperData={(data) => setFirstStepperData(data)}
    />,
    <CreatingAccount2
      mainData={secondStepperData}
      setSecondStepperData={(data) => setSecondStepperData(data)}
    />,
    <CreatingAccount3
      mainData={thirdStepperData}
      setThirdStepperData={(data) => setThirdStepperData(data)}
    />,
  ];

  const submitData = () => {
    let mainData = {
      licenseImage: firstStepData.image.uri,
      licenseNumber: firstStepData.licenseNumber,
      name: secondStepperData.name,
      email: secondStepperData.email,
      password: secondStepperData.password,
      phoneNumber: secondStepperData.phoneNumber,
      specialities: thirdStepperData.specialities
        .split(",")
        .filter((data) => data),
      experience: thirdStepperData.experience,
      description: thirdStepperData.description,
    };

    
    axios.post('http://localhost:8080/api/v1/doctors/register', mainData).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  };

  return (
    <View style={{ marginVertical: 30, marginHorizontal: 30, flexDirection: "column" }}>
      <Text style={styles.firstHeading}>Creating Account</Text>
      <Stepper
        active={active}
        content={content}
        onBack={() => setActive((p) => p - 1)}
        onFinish={() => submitData()}
        onNext={() => setActive((p) => p + 1)}
        buttonStyle={styles.buttonstyle}
      />
      <Text>Registration Process may take upto 3 hours for approval</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonstyle: {
    margin: 20,
    borderRadius: 10,
    backgroundColor: "black !important",
    height: 50,
    justifyContent: "center",
    flexBasis: "auto"

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
