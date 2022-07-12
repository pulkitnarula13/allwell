import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const AppointmentCard = ({ item }) => {
  var newdate = new Date(item.date);

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <View style={styles.clock}>
          <Button icon="clock"></Button>
        </View>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text
            style={styles.time}
          >{`Date: ${newdate.getDate()} / ${newdate.getMonth()} / ${newdate.getFullYear()}  `}</Text>
          <Text style={styles.time}>{`Time: ${newdate.getHours()} : ${
            newdate.getMinutes() ? newdate.getMinutes() : "00"
          }   `}</Text>
        </View>
      </View>
      <View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={
              item.profilePicture
                ? item.profilePicture
                : require("../assets/icon.png")
            }
          />
          <Text style={styles.name}>{item.patient.name}</Text>
        </View>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: "1px",
    borderColor: "#d4d4d4",
    borderRadius: 8,
    padding: 4,
    width: 170,
    height: 170,
    margin: 8,
    gap: 8,
  },
  image: {
    width: 65,
    height: 65,
  },
  clock: {
    minWidth: 20,
    height: 20,
  },
  time: {
    fontSize: 10,
    fontWeight: "bold",
  },
  flatListColumn: {
    margin: 8,
  },
  timeContainer: {
    display: "flex",
    flexDirection: "row",
  },
  imageContainer: {
    alignItems: "center",
    gap: 8,
  },
  name: {
    fontWeight: "bold",
  },
});

export default AppointmentCard;
