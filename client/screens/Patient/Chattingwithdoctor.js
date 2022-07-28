import { View, Text, Alert } from "react-native";
import React, { useState, useEffect, useCallback, useContext } from "react";
import { Bubble, GiftedChat, Composer } from "react-native-gifted-chat";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import { Button, Divider } from "react-native-paper";
import { AuthContext } from "../../Context/AuthContext";
import PushNotification from "../../components/PushNotification";

export default function PatientChatting(props) {

  console.log(props.route.params, 'chtting doc');
  const [messages, setMessages] = useState([]);
  const [completed, setCompleted] = useState(false);
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
          backgroundColor: "transparent",
          borderColor: "#79bdcc",
          borderWidth: !props.currentMessage.image  ? 1  : 0, 
          borderBottomLeftRadius: 10,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          padding: 6,
          marginTop: 8,
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

  const modifyChat = () => {
    const modifiedData = [];
    console.log(props.route.params, "qna");
    props.route.params.qna.forEach((qna) => {
      modifiedData.push({
        _id: qna.question,
        text: (
          <View
            style={{
              backgroundColor: "transparent",
            }}
          >
            {qna.question ? (
              <Text style={{  backgroundColor: "white", color: "black", padding: 8,borderRadius: 10, borderWidth: 1, borderColor: "#fff", overflow: "hidden" }}>
                Question: {qna.question}
              </Text>
            ) : (
              <Text></Text>
            )}
            <Divider />
            <Text
              style={{
                color: "#a09e9e",
              padding: 4,
              borderRadius: 10,
              borderWidth:
                qna.answer ? 1 : 0,
              borderColor: qna.answer ? "#fff" : "transparent",
              }}
            >
              {` ${qna.answer ? "Answer :" : ""} ${qna.answer}`}
            </Text>
          </View>
        ),
        image: qna?.images[0],
        createdAt: new Date(),
        user: {
          _id: 2,
          name: props.route.params.patient.name,
          avatar: props.route.params.patient.profilePicture ? props.route.params.patient.profilePicture : "https://placeimg.com/140/140/any",
        },
      });
    });

    setMessages(modifiedData.reverse());
  };

  const completeAppointment = async () => {
    try {
      const response = await axios.put(
        `${BASE_URL_DEV}/appointments/complete/${props.route.params.appointmentInfo}`,
        {
          completed: true,
          history: messages,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      setCompleted(true);

      Alert.alert("Success", response.data.message);
      props.navigation.navigate("Home");
    } catch (error) {
      console.log(error, "error");
      Alert.alert("Error", error.message);
    }
  };
  const onSend = useCallback((messages = []) => {
    const modifiedMessage = messages.map((data) => {
      data.quickReplies = {
        type: "radio",
        values: [
          {
            title: "Mark Complete",
            value: "yes",
          },
        ],
      };
    });
    // const newMessa
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    console.log();
  }, []);
  return (
    <>
    {
      completed ?   <PushNotification
      title={`Message Recieved`}
      body={`You have a new message from the doctor`}
      toToken={props.route.params.patient.expoToken}
    /> : null
    }
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={(messages) => onSend(messages)}
        alwaysShowSend={true}
        onQuickReply={(quck) => completeAppointment()}
        user={{
          _id: 1,
        }}
      />
    </>
  );
}
