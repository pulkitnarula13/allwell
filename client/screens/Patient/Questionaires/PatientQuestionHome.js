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
import Bottomnavigation from "../../../components/BottomNavigation";
import {
  getDatabase,
  get,
  ref,
  set,
  onValue,
  push,
  update,
} from "firebase/database";

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
  const [userData, setUserData] = useState();
  const [patientName, setPatientName] = useState(null);
  const [users, setUsers] = useState([]);
  const [userToAdd, setUserToAdd] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatRoomId, setChatRoomId] = useState("");

  const { appointmentData, setAppointmentData } =
    useContext(AppointmentContext);

  const createAppointment = async () => {
    setPatientName(userInfo.name);
    firebaseSetup();

    // try {
    //   const response = await axios.post(
    //     `${BASE_URL_DEV}/appointments`,
    //     appointmentData,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${userInfo.token}`,
    //       },
    //     }
    //   );
    //   Alert.alert("Success", response.data.message);
    // } catch (error) {
    //   console.log(error);
    //   Alert.alert("Error", error.message);
    // }

    // navigation.navigate("Requestwait");
  };

  const firebaseSetup = async () => {
    const user = await findUser(patientName);

    //create a new user if not registered
    if (user) {
      setUserData(user);
    } else {
      const newPatient = {
        name: userInfo.name,
        userId: userInfo.id,
        avatar: "https://i.pravatar.cc/150?u=" + Date.now(),
      };

      const database = getDatabase();

      set(ref(database, `patients/${patientName}`), newPatient);
      setUserData(newPatient);
    }

    // set friends list change listener
    const myPatientRef = ref(database, `patients/${patientName}`);
    console.log(myPatientRef, "user Reference ");
    onValue(myPatientRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data, "data inside snapshot");
      setUsers(data.doctors);
      setUserData((prevData) => ({
        ...prevData,
        doctors: data.doctors,
      }));
    });

    onAddFriend();
  };

  const findUser = async (name) => {
    const database = getDatabase();

    const mySnapshot = await get(ref(database, `patients/${name}`));

    return mySnapshot.val();
  };

  const onAddFriend = async (name) => {
    try {
      //find user and add it to my friends and also add me to his friends
      const database = getDatabase();

      const user = await findUser(name);

      if (user) {
        if (user.patientName === userData.patientName) {
          // don't let user add himself
          return;
        }

        if (
          userData.doctors &&
          userData.doctors.findIndex(
            (f) => f.patientName === user.patientName
          ) > 0
        ) {
          // don't let user add a user twice
          return;
        }

        // create a chatroom and store the chatroom id

        const newChatroomRef = push(ref(database, "chatrooms"), {
          firstUser: userData.patientName,
          secondUser: user.patientName,
          messages: [],
        });

        const newChatroomId = newChatroomRef.key;
        setChatRoomId(newChatroomId);
        setAppointmentData({
          ...appointmentData,
          chatRoomId,
        });

        const doctorsList = user.doctors || [];
        //join myself to this user friend list
        update(ref(database, `patients/${user.patientName}`), {
          doctors: [
            ...doctorsList,
            {
              name: userData.patientName,
              id: userData.id,
              avatar: userData.avatar,
              chatroomId: newChatroomId,
            },
          ],
        });

        const myDoctors = userData.doctors || [];
        //add this user to my friend list
        update(ref(database, `patients/${userData.patientName}`), {
          doctors: [
            ...myDoctors,
            {
              name: user.patientName,
              avatar: user.avatar,
              chatroomId: newChatroomId,
            },
          ],
        });
      }
    } catch (error) {
      console.error(error);
    }
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
    <View>
      <Stepper
        active={active}
        content={content}
        buttonStyle={{
          width: 150,
          height: 49,
          backgroundColor: "#74CBD4",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
        }}
        onBack={() => setActive((p) => p - 1)}
        onFinish={() => createAppointment()}
        onNext={() => setActive((p) => p + 1)}
        stepStyle={{ display: "none", width: 330 }}
      />
      <Bottomnavigation />
    </View>
  );
};

export default PatientQuestionHome;
