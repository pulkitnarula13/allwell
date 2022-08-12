import {
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  ScrollView,
} from "react-native";
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
import Bottomnavigation from "../../../components/BottomNavigation";
import PushNotification from "../../../components/PushNotification";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const PatientQuestionHome = ({ navigation }) => {
  const [active, setActive] = useState(0);
  const { userInfo } = useContext(AuthContext);
  const [firstStepData, setFirstStepperData] = useState({
    question: "What is your medical issue?",
  });
  const [secondStepperData, setSecondStepperData] = useState({
    question: "How long have you had symptoms?",
  });
  const [thirdStepperData, setThirdStepperData] = useState({
    question: "Do you have any other symptoms?",
  });
  const [fourthStepperData, setFourthStepperData] = useState({
    question: "Are you taking any medications?",
  });
  const [fifthStepperData, setFifthStepperData] = useState({
    question: "Do you have a medical family history related to this issue?",
  });
  const [sixthStepperData, setSixthStepperData] = useState();

  const [patientSummary, setPatientSummary] = useState([]);
  const [doctorInfo, setDoctorInfo] = useState();
  const { appointmentData, setAppointmentData } =
    useContext(AppointmentContext);

  const createAppointment = async () => {
    navigation.navigate("Requestwaitgif");
    getDoctorById();
  };

  const getDoctorById = async () => {
    const response = await axios.get(
      `${BASE_URL_DEV}/doctors/${appointmentData.doctor}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );

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
      !response
        ? navigation.navigate("Requestwaitgif")
        : navigation.navigate("Requestwait");
      Alert.alert("Success", response.data.message);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", error.message);
    }

    console.log(response.data.data, "response");
    setDoctorInfo(response.data.data);
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
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <KeyboardAwareScrollView
        behavior="position"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            bounces={false}
            contentInsetAdjustmentBehavior="always"
            overScrollMode="always"
            showsVerticalScrollIndicator={true}
          >
            {doctorInfo ? (
              <PushNotification
                title={`Appointment Booking`}
                body={`You have an appointment booked by ${userInfo.name}`}
                toToken={doctorInfo.expoToken}
              />
            ) : null}
            <Stepper
              active={active}
              content={content}
              buttonStyle={{
                width: 120,
                height: 49,
                backgroundColor: "#74CBD4",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
                marginLeft: active === 0 ? "auto" : "auto",
                marginRight: active === 0 ? 30 : "auto",
              }}
              onBack={() => setActive((p) => p - 1)}
              onFinish={() => createAppointment()}
              onNext={() => setActive((p) => p + 1)}
              stepStyle={{ display: "none" }}
            />
            {/* <Bottomnavigation /> */}
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};


export default PatientQuestionHome;
