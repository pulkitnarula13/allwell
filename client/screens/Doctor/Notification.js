import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import NotificationItem from "./Notification-item";

function Notification() {
  const listOFNotification = [
    {
      name: "Dr. John",
      message:
        "Hello, how are you? I am fine. Thank you. Hello, how are you? I am fine. Thank you. Thank you. Hello, how are you? I am fine. Thank you. Hello, how are you? I am fine. Thank you. Thank you.",
      time: "5 min ago",
    },
    {
      name: "Dr. John",
      message:
        "Hello, how are you? Hello, how are you? I am fine. Thank you. Hello, how are you? I am fine. Thank you.",
      time: "5 min ago",
    },
    {
      name: "Dr. John",
      message: "Hello, how are you? Hello, how are you? I am fine.",
      time: "5 min ago",
    },
  ];
  return (
    <ScrollView>
      <View style={{ marginTop: 20, flexDirection: "column" }}>
        {listOFNotification.map((item, index) => (
          <NotificationItem key={index} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    color: "#000",
  },
  imgstyle: {
    width: "100%",
    height: "100%",
    marginRight: 20,
  },
  imageview: {
    width: 20,
    alignItems: "flex-end",
  },
});

export default Notification;
