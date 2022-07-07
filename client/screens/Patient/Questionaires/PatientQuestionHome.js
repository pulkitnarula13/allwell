import { View, Text } from "react-native";
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

const PatientQuestionHome = ({ navigation }) => {


  const [active, setActive] = useState(0);
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

  const { appointmentData, setAppointmentData } = useContext(AppointmentContext);
  
  useEffect(() => {
    const data = [firstStepData, secondStepperData, thirdStepperData, fourthStepperData, fifthStepperData, sixthStepperData];
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
        onBack={() => setActive((p) => p - 1)}
        onFinish={() => {
          navigation.navigate("Requestwait");
        }}
        onNext={() => setActive((p) => p + 1)}
        stepStyle={{ display: "none" }}
      />
    </View>
  );
};

export default PatientQuestionHome;
