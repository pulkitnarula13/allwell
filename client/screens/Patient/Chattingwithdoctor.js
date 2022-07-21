import { View, Text, Alert, FlatList, Image } from "react-native";
import React, { useState, useEffect, useCallback, useContext } from "react";
import {
  Bubble,
  GiftedChat,
  Composer,
  InputToolbar,
} from "react-native-gifted-chat";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import { Button, Divider } from "react-native-paper";

export default function Chattingwithdoctor(props) {
  const [messages, setMessages] = useState([]);
  const { userInfo } = useContext(AuthContext);

  console.log(props, "Chatting");
  useEffect(() => {
    modifyChat();
  }, []);

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            borderColor: "#79bdcc",
            borderWidth: props.currentMessage._id.length > 0 ? 1 : 0,
            padding: 4,
            margin: 4,
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
            backgroundColor: "transparent",
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
    return <Button icon="send"></Button>;
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
    console.log("Completed function", props);
    try {
      const response = await axios.put(
        `${BASE_URL_DEV}/appointments/complete/${props.route.params.appointmentInfo}`,
        {
          completed: true,
          reply: messages
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      Alert.alert("Success", response.data.message);
      props.navigation.navigate("Doctor-Inbox");
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
      quickReplyStyle={{
        minHeight: 30,
        marginTop: 12
      }}
      onQuickReply={(quck) => completeAppointment()}
      user={{
        _id: 1,
      }}
    />
  );
}
