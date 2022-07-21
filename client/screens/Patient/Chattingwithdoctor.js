import { View, Text, Alert, FlatList, Image } from "react-native";
import React, { useState, useEffect, useCallback, useContext } from "react";
import { Bubble, GiftedChat, Composer, InputToolbar } from "react-native-gifted-chat";
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
            backgroundColor: "white",
            borderWidth:1,
            borderColor:"#74CBD4",
            borderTopRightRadius:100,
            borderBottomRightRadius:100,
            borderTopLeftRadius:100,
            borderBottomLeftRadius:100,
            padding:10
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
        <Button color="white"  style={{width:80,height:39,borderWidth:1,borderColor:"#74CBD4",backgroundColor:"#74CBD4",borderRadius:"100"}} >
        Send
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
            <Text>{qna.question}</Text>
            <Divider />
            <Text style={{ backgroundColor: "#fff" }}>{qna.answer}</Text>
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

    console.log(modifiedData, "modified");
    setMessages(modifiedData.reverse());
  };

  const completeAppointment = async () => {
    console.log("Completed function", props);
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
      renderSend={()=>RenderSend()}
      alwaysShowSend={true}
      user={{
        _id: 1,
      }}
    />
  );
}
