import { View, Text, Alert } from "react-native";
import React, { useState, useEffect, useCallback, useContext } from "react";
import { Bubble, GiftedChat, Composer, InputToolbar } from "react-native-gifted-chat";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import { Button, Divider } from "react-native-paper";
import { AuthContext } from "../../Context/AuthContext";

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
            <Text
            style={{
              borderColor: "#79bdcc",
              backgroundColor: "transparent"
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
        {
          completed: true,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      console.log("response", response);

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
  );
}

