import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { AuthContext } from "../Context/AuthContext";
import { Avatar } from "react-native-paper";

const DoctorCurrentMessages = (props) => {

  const [currentData, setCurrentData] = useState();
  // const [dialogbox, setDialogbox] = useState(false);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    const modifiedData = props?.currentAppointmnents?.map((data) => {
      return {
        date: `${new Date(data.date).getDate()} / ${new Date(
          data.date
        ).getMonth()} / ${new Date(data.date).getFullYear()}`,
        symptoms: data.symptoms[0]?.name,
        info: data.qna[0].answer,
      patient: data.patient,
        qna: data.qna,
        appointmentInfo: data._id,
        doctor: userInfo,
      };
    });

    setCurrentData(modifiedData);
  }, [props.currentAppointmnents]);

  const openDialog = (data) => {
    props.setDialogbox(true);
    props.currentPatient(data);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => openDialog(item)}>
        <View style={styles.main}>
          {/* <Text style={styles.date1}>{item.date}</Text> */}
            <View style={styles.inner}>
              <View style={
                {
                 display: "flex",
                 justifyContent: "center",
                 alignItems: "center",
                 flexWrap: "wrap"
                }
              }>
                {!item?.profilePicture ? (
                  <Avatar.Text
                    style={{ backgroundColor: "#74CBD4" }}
                    size={65}
                    label={item.patient.name[0]}
                    color="#fff"
                  />
                ) : (
                  <Image
                    style={styles.image2}
                    source={
                      item.profilePicture
                        ? item.profilePicture
                        : require("../assets/icon.png")
                    }
                  />
                )}
                <Text
                  style={{
                    left: -13,
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "500",
                    fontSize: 16,
                    marginTop: 8,
                  }}
                >
                  {item.patient.name}
                </Text>
              </View>
              <View style={{ marginLeft: 30, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: 200
                  }}
                >
                  <Text
                    style={{
                      marginBottom: 18,
                      marginTop: 10,
                      fontSize: 14,
                      fontWeight: "400",
                      color: "#718096",
                    }}
                  >
                    Date: {item.date}
                  </Text>
                  {
                    item.symptoms ? <Text>Symptoms: {item.symptoms}</Text> : <Text> </Text>
                  }
                  <Text style={{ fontSize: 16, fontWeight: "400", height: 44 }}>
                    {item.qna[0].answer}
                  </Text>
                </View>
              </View>
            </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      horizontal={false}
      data={currentData}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
};
const styles = StyleSheet.create({
  date1: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 24,
    marginTop: 17,
    marginBottom: 7,
  },

  down: {
    width: 180,
    height: 60,
    marginTop: 19.71,
  },
  mainouter: {
    display: "flex",
    width: 343,
    height: 130,
    borderWidth: 0.7,
    borderColor: "#718096",
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  main: {
    display: "flex",
    flex: 1,
    marginTop: 22,
  },
  inner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth: 0.7,
    borderColor: "gray",
    width: 343,
    height: 156,
    borderRadius: 10,
    padding: 16

  },
  image2: {
    width: 86,
    height: 86,
    borderRadius: 100,
  },
});
export default DoctorCurrentMessages;
