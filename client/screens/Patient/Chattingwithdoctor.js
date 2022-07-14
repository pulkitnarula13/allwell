import { View, Text, Alert } from "react-native";
import React, { useState, useEffect, useCallback, useContext } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { BASE_URL_DEV} from "@env";

export default function Chattingwithdoctor(props) {
  const [messages, setMessages] = useState([]);
  const { userInfo } = useContext(AuthContext);

  console.log(props, "Chatting");
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: `Question : ${props.route.params.qna[0].question} Answer: ${props.route.params.qna[0].answer}`,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: props.route.params.patient,
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const completeAppointment = async () => {
    console.log('Completed function', props);
    try {
      const response = await axios.put(
        `${BASE_URL_DEV}/appointments/complete/${props.route.params.appointmentInfo}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      console.log('response', response);

      Alert.alert("Success", response.data.message);
      props.navigation.navigate("Doctor-Inbox");
    } catch (error) {
      console.log(error, "error");
      Alert.alert("Error", error.message);
    }
  };
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    completeAppointment();
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}
