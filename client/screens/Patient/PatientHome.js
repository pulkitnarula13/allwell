import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const PatientHome = () => {
  let Screenheight = Dimensions.get("window").height;
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#fff",
          alignItems: "center",
          height: Screenheight * 1.4,
          display: "flex",
          flex: 1,
        }}
      >
        <View style={{ marginTop: 50 }}>
          <Text style={styles.heading}>Doctor Info</Text>
        </View>
        <View style={styles.imageview}>
          <Image
            style={styles.imgstyle}
            source={require("../../assets/icon.png")}
            resizeMode="contain"
          />
        </View>
        <View style={{ width: 346, height: 100, marginTop: 12 }}>
          <View style={styles.containerdata15}>
            <View>
              <Text style={styles.heading1}>Doctor Name</Text>
            </View>
          </View>
          <View style={styles.containerdata16}>
            <Text>Location</Text>
            <Text>Wait time: 2-4hr</Text>
          </View>

          <View>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 15,
                marginTop: 11,
                lineHeight: 24,
              }}
            >
              Introduction
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "400", opacity: 0.6 }}>
              
            </Text>
          </View>
          <View style={{ marginTop: 19 }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 15,
                marginTop: 11,
                lineHeight: 24,
              }}
            >
              Choose your symptoms
            </Text>
            <View style={styles.twoimages}>
              <View>
                <Image
                  style={{ width: 50, height: 50, marginRight: 21 }}
                  source={require("../../assets/icon.png")}
                  resizeMode="contain"
                />
                <Text style={styles.text1}>Headache</Text>
              </View>
              <View>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../../assets/icon.png")}
                  resizeMode="contain"
                />
                <Text style={styles.text1}>General Practitioner</Text>
              </View>
            </View>
          </View>

      

          <View>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 15,
                marginTop: 11,
                lineHeight: 24,
              }}
            >
              Languages
            </Text>
            <Text style={{ opacity: 0.6, fontSize: 16, lineHeight: 18 }}>
              {"\u2022"} English
            </Text>
            <Text style={{ opacity: 0.6, fontSize: 16, lineHeight: 18 }}>
              {"\u2022"} French
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              height: Screenheight,
            }}
          >
            <Button
              style={{
                borderRadius: 10,
                backgroundColor: "#D9D9D9",
                width: 282,
                height: 45,
                justifyContent: "center",
              }}
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Connect
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text1: {
    width: 67,
    height: 36,
    fontSize: 10,
    lineHeight: 18,
    alignItems: "center",
  },
  twoimages: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
  },
  containernew: {
    position: "absolute",
    left: "18.46%",
    right: "18.46%",
    top: "8.65%",
    bottom: "89.1%",
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 26.66,
  },
  imgstyle: {
    width: 350,
    height: 233,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
  },

  imageview: {
    width: 35,
    height: 233,
    alignItems: "center",
  },
  containerdata1: {},
  containerdata15: {
    width: 346,
    height: 66,
    display: "flex",
  },
  heading1: {
    fontSize: 20,
    fontWeight: "600",
  },
  containerdata16: {
    width: 125,
    height: 39,
  },
});

export default PatientHome;