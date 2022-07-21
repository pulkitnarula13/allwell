import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Questions from "../../../components/questions";

const PatientQuestionFifth = (props) => {
  return (
    <View style={styles.outer}>
      <View style={styles.imageview}>
        <Image
          style={styles.image1}
          source={require("../../../assets/images/doctorAni.gif")}
          resizeMode="center"
        />
      </View>
      <View>
        <Questions
          data={props.mainData.question}
          setAnswer={(val) => {
            props.setFifthStepperData({
              ...props.mainData,
              answer: val,
            });
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image1: {
    height: 284,
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
    marginTop:40
  },
  outer: {
    display: "flex",
    flex: 1,
    padding: 30,
  },
});
export default PatientQuestionFifth;
