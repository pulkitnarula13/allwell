import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Button } from "react-native-paper";


const AppointmentCard = ({ item, navigation }) => {
  var newdate = new Date(item.time);
  const selectItem = () => {
    navigation.navigate("Chatting", {
      qna: item.qna,
      patient: item.patient,
      appointmentInfo: item._id
    });
  };

  return (
    <TouchableOpacity onPress={selectItem}>
      <View style={styles.container}>
        <View style={styles.timeContainer}>
          <View style={styles.clock}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../assets/icons/medico_icon-clock.svg")}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              marginLeft: -20,
            }}
          >
            <Text style={styles.time}>{`${newdate.getHours()}:${
              newdate.getMinutes() ? newdate.getMinutes() : "00" }`} { `- ${newdate.getHours() + 1}:${
                newdate.getMinutes() ? newdate.getMinutes() : "00" }` }</Text>
          </View>
        </View>
        <View>
          <View style={styles.imageContainer}>
            {!item?.profilePicture ? (
              <Avatar.Text
                style={{ backgroundColor: "#74CBD4" }}
                size={65}
                label={item.patient.name[0]}
                color="#fff"
              />
            ) : (
              <Image
                style={styles.image}
                source={
                 {
                  uri : `${item.profilePicture}`
                 }
                }
              />
            )}

            <Text style={styles.name}>{item.patient.name}</Text>
            <Text style={styles.symptomName}>{item.symptoms[0]?.name}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: "1px",
    borderColor: "#E2E8F0",
    borderRadius: 8,
    marginLeft: 16,
    width: 168.7,
    height: 182,
    gap: 8,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 100,
    marginBottom: 6,
  },
  clock: {
    minWidth: 20,
    display: "flex",
    justifyContent: "flex-start",
    height: 20,
    marginRight: 25,
    marginLeft: 12
  },
  time: {
    fontSize: 12,
  },
  flatListColumn: {
    margin: 8,
  },
  timeContainer: {
    display: "flex",

    marginBottom: 11,
    marginTop: 10,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center"
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 10
  },
  name: {
    fontWeight: "400",
    // fontFamily:"poppins",
    fontSize: 16,
    marginTop: 10
  },
  symptomName: {
    fontSize: 12,
    color: "#718096"
  }
});

export default AppointmentCard;
