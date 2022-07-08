import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Chip } from "react-native-paper";
import { TouchableOpacity } from "react-native";

const WaitingCard = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Accept-Patient-Schedule", {
        item: item
      })}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={
              item.patient.profilePicture
                ? item.patient.profilePicture
                : require("../assets/icon.png")
            }
          />

          <Text style={styles.title}>{item.patient.name}</Text>
        </View>
        <View style={styles.chipCotainer}>
          <View>
            <Text style={styles.desc}>Request on: {item.date}</Text>
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
    gap: 20,
    // flex: 1,
    borderWidth: "1px",
    borderColor: "gainsboro",
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 10,
    borderRadius: 10,
  },
  imageContainer: {
    gap: 10,
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
  },
  desc: {
    color: "#718096",
  },
  description: {
    width: "70%",
  },
  chipItem: {
    fontSize: 10,
  },
});

export default WaitingCard;
