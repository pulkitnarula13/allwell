import { View, Text, Alert } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Stepper from "react-native-stepper-ui";
import PatientQuestionSummary from "./PatientQuestionSummary";
import PatientQuestionOne from "./PatientQuestionOne";
import PatientQuestionTwo from "./PatientQuestionTwo";
import PatientQuestionThree from "./PatientQuestionThree";
import PatientQuestionFour from "./PatientQuestionFour";
import PatientQuestionFifth from "./PatientQuestionFifth";
import PatientQuestionImage from "./PatientQuestionImage";
import AppointmentContext from "../../../Context/AppointmentContext";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import { AuthContext } from "../../../Context/AuthContext";

const PatientQuestionHome = ({ navigation }) => {
  const [active, setActive] = useState(0);
  const { userInfo } = useContext(AuthContext);
  const [firstStepData, setFirstStepperData] = useState({
    question: "What is the issue you are facing ?",
  });
  const [secondStepperData, setSecondStepperData] = useState({
    question: "How long the issue has been there ?",
  });
  const [thirdStepperData, setThirdStepperData] = useState({
    question: "Do you have any other symptoms ?",
  });
  const [fourthStepperData, setFourthStepperData] = useState({
    question: "Are you on any medications ?",
  });
  const [fifthStepperData, setFifthStepperData] = useState({
    question: "Do you have any family history in this ?",
  });
  const [sixthStepperData, setSixthStepperData] = useState();

  const [patientSummary, setPatientSummary] = useState([]);

  const { appointmentData, setAppointmentData } =
    useContext(AppointmentContext);

  const createAppointment = async () => {

    console.log(appointmentData, "appointmentData");
    try {
      const response = await axios.post(
        `${BASE_URL_DEV}/appointments`,
        appointmentData,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      Alert.alert("Success", response.data.message);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
    
    navigation.navigate("Requestwait");
  };

  useEffect(() => {
    const data = [
      firstStepData,
      secondStepperData,
      thirdStepperData,
      fourthStepperData,
      fifthStepperData,
      sixthStepperData,
    ];
    console.log(data, "patientHome");
    setPatientSummary(data);
  }, [sixthStepperData]);

  const content = [
    <PatientQuestionOne
      mainData={firstStepData}
      stepperData={(data) => setFirstStepperData(data)}
    />,

    <PatientQuestionTwo
      mainData={secondStepperData}
      stepperData={(data) => setSecondStepperData(data)}
    />,

    <PatientQuestionThree
      mainData={thirdStepperData}
      setThirdStepperData={(data) => setThirdStepperData(data)}
    />,
    <PatientQuestionFour
      mainData={fourthStepperData}
      setFourthStepperData={(data) => setFourthStepperData(data)}
    />,
    <PatientQuestionFifth
      mainData={fifthStepperData}
      setFifthStepperData={(data) => {
        setFifthStepperData(data);
      }}
    />,
    <PatientQuestionImage
      mainData={sixthStepperData}
      setSixthStepperData={(data) => setSixthStepperData(data)}
    />,
    <PatientQuestionSummary data={patientSummary} />,
  ];

  return (
    <View>
      <Stepper
        active={active}
        content={content}
        buttonStyle={{width:150,height:49,backgroundColor:"#74CBD4",justifyContent:"center",alignItems:"center",borderRadius:100}}
        onBack={() => setActive((p) => p - 1)}
        onFinish={() => createAppointment()}
        onNext={() => setActive((p) => p + 1)}
        stepStyle={{ display: "none" }}
      />
    </View>
  );
};

export default PatientQuestionHome;
