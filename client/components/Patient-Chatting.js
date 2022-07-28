import { View, Text, Alert } from "react-native";
import React, { useState, useEffect, useCallback, useContext } from "react";
import {
  Bubble,
  GiftedChat,
  Composer,
  InputToolbar,
} from "react-native-gifted-chat";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import { Button, Divider } from "react-native-paper";
import { AuthContext } from "../Context/AuthContext";

export default function PatientChatting(props) {
  console.log(props, "props");
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
          right: {
            backgroundColor: "#79bdcc",
            borderColor: "#79bdcc",
            borderWidth: 1,
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
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


  const renderUI = (item) => {

    let UI;
    if (item.text.props?.children[1].props.children.trim().length > 0) {
      UI =       <View>
      {typeof item.text !== "string" ? (
        <Text style={{ fontWeight: "bold" }}>Question: {item._id}</Text>
      ) : null}
      <Divider />
      <Text
        style={{
          backgroundColor: "#79bdcc",
          color: "#fff",
          padding: 4,
          borderRadius: 10,
          borderWidth:
            item.text.props?.children[1].props.children.length > 0
              ? 1
              : 0,
          fontWeight: "bold",
          borderColor: item.text.props?.children
            ? "#fff"
            : "transparent",
        }}
      >
        {item.text.props?.children[1]?.props?.children}
      </Text>
    </View>
    } 

    return UI;

  }

  const modifyChat = () => {
    const modifiedData = [];
    props.route.params.history
      .filter((item) => typeof item.text !== "string")
      .forEach((item) => {
        modifiedData.push({
          _id: item.question,
          text: renderUI(item),
          // image: qna?.images[0],
          createdAt: new Date(),
          sent: true,
          user: {
            _id: 1,
            name: props.route.params.patient.name,
            avatar: "https://placeimg.com/140/140/any",
          },
        });
      });

    modifiedData.reverse();

    props.route.params.history
      .filter((item) => typeof item.text === "string")
      .forEach((item) => {
        modifiedData.push({
          _id: item.question,
          text: (
            <View>
              {typeof item.text === "string" ? (
                <Text style={{ fontWeight: "bold" }}>{item.text}</Text>
              ) : null}
            </View>
          ),
          createdAt: new Date(),
          sent: true,
          user: {
            _id: 2,
            name: props.route.params.doctor.name,
            avatar: props.route.params.doctor.profilePicture
              ? props.route.params.doctor.profilePicture
              : "https://placeimg.com/140/140/any",
          },
        });
      });

    modifiedData.reverse();

    setMessages(modifiedData);
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
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
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
