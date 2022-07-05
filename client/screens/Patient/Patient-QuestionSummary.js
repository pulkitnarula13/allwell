import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

const PatientQuestionSummary = ({navigation}) => {

  const DATA = [
    {
      name: 'Kapil',
      image: '../../assets/icon1.png',
    },
    {
        name: 'Prabhjyot',
        image: '../../assets/icon2.png',
    },
    {
        name: 'Add Patient',
        image: '../../assets/icon3.png',
    },
  ];



  const Item = ({item}) =>  {
    return (
      <View style={styles.item}>
      <Image style={styles.image2} source={require('../../assets/icon.png')} resizeMode="center" />
    </View>
    )
  }
  return (
    <View style={styles.outer}>
      <View style={styles.imageview}>
        <Image
          style={styles.image1}
          source={require("../../assets/icon.png")}
          resizeMode="center"
        />
      </View>
      <Text>Add Photos/Videos</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        
          <Image
            style={styles.image1}
            source={require("../../assets/camera.jpg")}
            resizeMode="center"
          />
        
        <FlatList
          style={{marginBottom:40}}
          horizontal={true}
          data={DATA}
          renderItem={Item}
          keyExtractor={(item) => item.image}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          marginTop: 40,
        }}
      >
        <Button
          style={styles.availablebtn}
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Go Back
        </Button>

        <Button
          style={styles.availablebtn1}
          mode="contained"
          onPress={() => navigation.navigate("Requestwait")}
        >
          Next
        </Button>
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
    marginRight:20,
    
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
  },
});
export default PatientQuestionSummary;
