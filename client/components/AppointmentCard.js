import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const AppointmentCard = ({ item }) => {
  var newdate = new Date(item.date);
  console.log(item.patient);
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <View style={styles.clock}>
          <Button color="#74CBD4" icon="clock"></Button>
        </View>
        <View style={{ display: "flex", flexDirection: "column",justifyContent:"flex-start", marginLeft:-20, }}>
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
          {/* <Text style={styles.name}>{item.patient}</Text> */}
        </View>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: "2px",
    borderColor: "#74CBD4",
    borderRadius: 20,
    padding: 4,
    marginLeft:27,
    width: 170,
    height: 170,
    margin: 8,
    gap: 8,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius:100,
    marginBottom:6
  },
  clock: {
    minWidth: 20,
    display:"flex",
    justifyContent:"flex-start",
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

    marginBottom:11,
    marginTop:10,
    justifyContent:"flex-start",
    flexDirection: "row",
  },
  imageContainer: {
    alignItems: "center",
    gap: 8,
  },
  name: {
    fontWeight: "400",
    fontFamily:"poppins",
    fontSize:16
  },
});

export default AppointmentCard;
