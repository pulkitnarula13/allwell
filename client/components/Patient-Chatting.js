import { View, Text, Alert } from "react-native";
import React, { useState, useEffect, useCallback, useContext } from "react";
import { Bubble, GiftedChat, Composer, InputToolbar } from "react-native-gifted-chat";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import { Button, Divider } from "react-native-paper";
import { AuthContext } from "../Context/AuthContext";

export default function PatientChatting(props) {
  const [messages, setMessages] = useState([]);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    modifyChat();
  }, []);

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: "#79bdcc",
          },
        }}
      />
    );
  }

  const RenderComposer = (props) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Composer {...props} />
        <Button icon="check" color="#79bdcc" onPress={completeAppointment}>
          Complete
        </Button>
      </View>
    );
  };

  const RenderSend = (props) => {
    return (
        <Button icon="send">
        </Button>
    );
  };


  const modifyChat = () => {
    const modifiedData = [];
    props.route.params.qna.forEach((qna) => {
      modifiedData.push({
        _id: qna.question,
        text: (
          <View>
            {
              qna.question ? <Text style={{ fontWeight: "bold"}}>Question: {qna.question}</Text> : <Text></Text>
            }
            <Divider />
            <Text
              style={{
                backgroundColor: "#79bdcc",
                color: "#fff",
                padding: 4,
                borderRadius: 10,
                borderWidth: 1,
                fontWeight: "bold",
                borderColor: "#fff",
                display: qna.answer ? "block" : "none"
              }}
            >
              {` ${qna.answer ? "Answer :" : "" } ${qna.answer}`}
            </Text>
          </View>
        ),
        image: qna?.images[0],
        createdAt: new Date(),
        user: {
          _id: 2,
          name: props.route.params.patient,
          avatar: "https://placeimg.com/140/140/any",
        },
      });
    });

    setMessages(modifiedData.reverse());
  };

  const completeAppointment = async () => {
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
      console.log("response", response);

      Alert.alert("Success", response.data.message);
      props.navigation.navigate("Doctor-Inbox");
    } catch (error) {
      console.log(error, "error");
      Alert.alert("Error", error.message);
    }
  };
  const onSend = useCallback((messages = []) => {
    setMessages(
      (previousMessages) => GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      renderBubble={renderBubble}
      onSend={(messages) => onSend(messages)}
      alwaysShowSend={true}
      user={{
        _id: 1,
      }}
    />
  );
}
