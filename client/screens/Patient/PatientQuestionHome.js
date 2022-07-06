import { View, Text } from "react-native";
import React, { useState } from "react";
import Stepper from "react-native-stepper-ui";
import PatientQuestiontwo from "./Patient-Questiontwo";
import PatientQuestionSummary from "./Patient-QuestionSummary";
import PatientQuestionone from "./Patient-Questionone";
import PatientQuestionthree from "./Patient-Questiononethree";
import PatientQuestionfour from "./Patient-Questionfour";
import PatientQuestionfive from "./Patient-Questionfive";
import PatientQuestionsix from "./Patient-Questionsix";

const PatientQuestionHome = ({ navigation }) => {
  const [active, setActive] = useState(0);
  const [firstStepData, setFirstStepperData] = useState();
  const [secondStepperData, setSecondStepperData] = useState();
  const [thirdStepperData, setThirdStepperData] = useState();

  const [qnaList, setqnaList] = useState([
    {
      question: "What is wrong ?",
      answer: "I am feeling headache",
    },
    {
      question: "What is wrong ?",
      answer: "I am feeling headache",
    },
    {
      question: "What is wrong ?",
      answer: "I am feeling headache",
    },
    {
      question: "What is wrong ?",
      answer: "I am feeling headache",
    },
    {
      question: "What is wrong ?",
      answer: "I am feeling headache",
    },
    {
      question: "Do you need medication ?",
      answer: "Yes please",
    },
  ]);
  const content = [
    <PatientQuestionone
      mainData={firstStepData}
      setFirstStepperData={(data) => setFirstStepperData(data)}
    />,

    <PatientQuestionthree
      mainData={firstStepData}
      setFirstStepperData={(data) => setFirstStepperData(data)}
    />,

    <PatientQuestionfour
      mainData={firstStepData}
      setFirstStepperData={(data) => setFirstStepperData(data)}
    />,
    <PatientQuestionfive
      mainData={firstStepData}
      setFirstStepperData={(data) => setFirstStepperData(data)}
    />,
    <PatientQuestionsix
      mainData={firstStepData}
      setFirstStepperData={(data) => setFirstStepperData(data)}
    />,
    <PatientQuestiontwo
      mainData={secondStepperData}
      setSecondStepperData={(data) => setSecondStepperData(data)}
    />,
    <PatientQuestionSummary
      mainData={thirdStepperData}
      setThirdStepperData={(data) => setThirdStepperData(data)}
    />,
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
