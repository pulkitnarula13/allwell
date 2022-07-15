import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import CreatingAccount1 from "../../components/CreatingAccount1";
import Stepper from "react-native-stepper-ui";
import CreatingAccount2 from "../../components/CreatingAccount2";
import CreatingAccount3 from "../../components/CreatingAccount3";
import axios from "axios";
import { BASE_URL_DEV } from "@env";

const DoctorSignup = ({ navigation }) => {
  const [active, setActive] = useState(0);
  const [firstStepData, setFirstStepperData] = useState();
  const [secondStepperData, setSecondStepperData] = useState();
  const [thirdStepperData, setThirdStepperData] = useState();
  const [thirData, setThirdData] = useState({});

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
    setThirdData({...thirData, thirdStepperData})

  }, [thirdStepperData])

  const submitData = () => {
    let mainData = {
      licenseImage: firstStepData.image.uri,
      licenseNumber: firstStepData.licenseNumber,
      name: secondStepperData.name,
      email: secondStepperData.email,
      password: secondStepperData.password,
      phoneNumber: secondStepperData.phoneNumber,
      specialities: thirdStepperData.specialities,
      experience: thirdStepperData.experience,
      doctorDescription: thirdStepperData.description,
      languages: thirdStepperData.languages,
      certifications: thirdStepperData.certifications,
      location: thirdStepperData.location
    };

    axios
      .post(`${BASE_URL_DEV}/doctors/register`, mainData)
      .then((response) => {
        navigation.navigate("DoctorSignupScreenLast");
        Alert.alert("Success", response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
    // navigation.navigate("DoctorSignupScreenLast");
  };

  return (
    <View
      style={{
        marginVertical: 30,
        marginHorizontal: 30,
        flexDirection: "column",
        
      }}
    >
      <View style={styles.stepperstyle}>
      <Stepper
        active={active}
        content={content}
        buttonStyle={{width:157.5,height:49,backgroundColor:"#74CBD4",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:100,marginLeft:20,marginBottom:22}}
        onBack={() => setActive((p) => p - 1)}
        onFinish={() => submitData(navigation)}
        onNext={() => setActive((p) => p + 1)}
        stepStyle={{backgroundColor:"#74CBD4"}}
       
       
      />
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  buttonstyle: {
    margin: 20,
    borderRadius: 10,
    backgroundColor: "black",
    height: 50,
    justifyContent: "center",
    flexBasis: "auto",
  },
  firstHeading: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 29.05,
    textAlign: "center",
    marginBottom: 24,
  },
  stepperstyle:{
    marginTop:23,
    justifyContent:"center",
    
    
  }
});

export default DoctorSignup;
