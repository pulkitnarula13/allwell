import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Rating } from "react-native-ratings";
import { FlatList } from "react-native";
import { DATA } from "../constants/Doctor-inboxvalues";
import { AuthContext } from "../Context/AuthContext";

const Doctorinboxdata = (props) => {
  console.log(props, "props");

  const [currentData, setCurrentData] = useState();
  const [dialogbox, setDialogbox] = useState(false);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    const modifiedData = props?.currentAppointmnents?.map((data) => {
      return {
        image: "../../assets/icon.png",
        date: `${new Date(data.date).getDate()} / ${new Date(
          data.date
        ).getMonth()} / ${new Date(data.date).getFullYear()}`,
        symptoms: data.symptoms[0].name,
        info: data.qna[0].answer,
        patient: data.patient.name,
        qna: data.qna,
        appointmentInfo: data._id,
        doctor: userInfo,
      };
    });

    console.log(modifiedData, "modifiedData");
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
          <Text style={styles.date1}>{item.date}</Text>
          <View style={styles.mainouter}>
            <View style={styles.inner}>
              <View>
                <Image
                  style={styles.image2}
                  source={require("../assets/icon.png")}
                  resizeMode="contain"
                />
                <Text style={{ textAlign: "center" }}> {item.patient}</Text>
              </View>
              <View style={{ marginLeft: 30 }}>
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text>Date: {item.date}</Text>
                  <Text>Symptoms: {item.symptoms}</Text>
                  <Text>More Information: {item.qna[0].answer}</Text>
                </View>
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
    fontSize: 16,
    fontWeight: "600",
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
    height: 156,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    padding: 30,
  },
  main: {
    display: "flex",
    flex: 1,
  },
  inner: {
    display: "flex",
    flexDirection: "row",
  },
  image2: {
    width: 62,
    height: 62,
  },
});
export default Doctorinboxdata;
