import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { List } from "react-native-paper";
import AppointmentContext from "../../../Context/AppointmentContext";
import { AuthContext } from "../../../Context/AuthContext";

const PatientQuestionSummary = ({ data }) => {
  const [expanded, setExpanded] = useState(true);
  const [imagesList, setImagesList] = useState([]);

  const handlePress = () => setExpanded(!expanded);

  const { appointmentData, setAppointmentData } =
    useContext(AppointmentContext);
  const { userInfo } = useContext(AuthContext);
  useEffect(() => {
    const dbData = data.map((val) => {
      if (!val.question) {
        val.question = "";
        val.answer = "";
      }
      return val;
    });

    setAppointmentData({
      ...appointmentData,
      qna: dbData,
      patient: userInfo.id,
    });
    const output = data.pop();
    setImagesList(output);
  }, [data]);

  const Item = ({ item }) => {
    return (
      <List.Accordion
        title={item.question}
        left={(props) => <List.Icon {...props} icon="folder" />}
      >
        <List.Item title={item.answer} />
      </List.Accordion>
    );
  };

  const renderImages = ({ item }) => {
    return (
      <View>
        <Image style={styles.image1} source={item} resizeMode="center" />
      </View>
    );
  };

  return (
    <View style={styles.outer}>
      <View>
        <List.Section title="Questions">
          {
            data.map((val, index) => {
              return <Item key={index} item={val} />
            })
          }
        </List.Section>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "column",
    marginRight: 21,
    marginTop: 24,
  },
  image2: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  image1: {
    width: 130,
    height: 130,
    marginRight: 20,
  },
  textheight: {
    width: 320,
    height: 130,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    marginTop: 11,
    marginBottom: 40,
  },
  availablebtn: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    width: 150,
    height: 45,
    justifyContent: "center",

    fontWeight: "500",
    fontSize: 17,
    marginRight: 30,
  },
  availablebtn1: {
    backgroundColor: "#ffff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    width: 150,
    height: 45,
    justifyContent: "center",

    fontWeight: "500",

    fontSize: 17,
  },

  imageview: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 38,
  },
  outer: {
    display: "flex",
    flex: 1,
    padding: 30,
    height:500
  },
});
export default PatientQuestionSummary;
