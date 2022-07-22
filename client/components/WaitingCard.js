import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Chip } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import moment from "moment";


const WaitingCard = ({ item, navigation }) => {

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Accept-Patient-Schedule", {
        item: item
      })}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {
            !item.patient.profilePicture ? <Avatar.Text
              style={{ backgroundColor: "#74CBD4" }}
              size={65}
              label={item.patient.name[0]}
              color="#fff"
            /> : <Image
              style={styles.image}
              source={
                {
                  uri: `${item.patient.profilePicture}`
                }
              }
            />
          }


          <Text style={styles.title}>{item.patient.name}</Text>
        </View>
        <View style={styles.chipCotainer}>
          <View>
            <Text style={styles.desc}>Request on: {moment(item.createdAt).format("DD-MM-YYYY")}</Text>
          </View>
          <View style={styles.chip}>
            {item.symptoms.map((symptom, index) => {
              return (
                <Chip style={styles.chipItem} key={index}>
                  {symptom.name}
                </Chip>
              );
            })}
          </View>
          <Text
            numberOfLines={1}
            style={styles.description}
            ellipsizeMode="tail"
          >
            {item.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderWidth: "1px",
    borderColor: "gainsboro",
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 30,
    borderRadius: 10,
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    width: 90,
    height: 85,
    borderRadius: 50,
  },
  chipCotainer: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    paddingLeft: 20,
    justifyContent: "space-evenly",
  },
  chip: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: "flex-start",
  },
  title: {
    fontWeight: "bold",
    paddingTop: 10,
  },
  desc: {
    color: "#718096",
  },
  description: {
    width: "70%",
  },
  chipItem: {
    fontSize: 10,
    marginRight: 4
  },
});

export default WaitingCard;
