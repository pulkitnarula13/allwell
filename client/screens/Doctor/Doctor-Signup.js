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

  useEffect(() => {
    console.log(firstStepData, "first step data");
    console.log(secondStepperData, "second step data");
    console.log(thirdStepperData, "third step data");
  }, [firstStepData, secondStepperData, thirdStepperData]);

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
    <View style={{ marginVertical: 50, marginHorizontal: 60 }}>
      <Text style={styles.firstHeading}>Creating Account</Text>
      <Stepper
        active={active}
        content={content}
        onBack={() => setActive((p) => p - 1)}
        onFinish={() => submitData()}
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
