import {
  View,
  Text,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Rating } from "react-native-ratings";
import { Avatar, Button, Chip } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
const AvailableDoctorCard = (props) => {


  return (
    <View style={styles.container}>
      <TouchableOpacity
      style={{
        display: "flex",
        alignItems: "center"
      }}
        onPress={() =>
          props.navigation.navigate("Doctor-Info", {
            id: props.item._id,
          })
        }
      >
        <View style={styles.ratingContainer}>
          <Rating
            type="custom"
            ratingColor="#74CBD4"
            ratingCount={1}
            imageSize={15}
            ratingBackgroundColor="#74CBD4"
            readonly={true}
          />
          <Text style={{paddingLeft: 4}}>{props.item.rating}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 4,
          }}
        >
          {!props.item.profilePicture ? (
            <Avatar.Text
              style={{ backgroundColor: "#74CBD4" }}
              size={65}
              label={props.item.name[0]}
              color="#fff"
            />
          ) : (
            <Image
              source={{
                uri: `${props.item.profilePicture}`
              }}
              style={styles.image}
              resizeMode="cover"
            />
          )}
        </View>
     
      <Text
        style={{
          marginBottom: 5,
          marginRight: -10,
          fontSize: 16,
          fontWeight: "400",
        }}
      >
        Dr. {props.item.name}
      </Text>

      <Text style={{ marginBottom: 5, fontWeight: "100" }}>
        <View style={styles.chip}>
          <Text style={{ fontSize: 10, color: "#718096" }}>
            {props.item.specialities[0]?.name}
          </Text>
        </View>
      </Text>
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {/* <Ionicons name="location-outline" size={24} color="#74CBD4" /> */}
        <Image
              style={{
                width: 24,
                height: 24,
              }}
              source={require("../assets/icons/medico_icon_location.png")}
            />
        <Text style={{ color: "black" }}>
          {(props.item.distance / 10000000).toFixed(1)} km
        </Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: 168.7,
    height: 182,
    borderWidth: 2,
    marginRight: 10.3,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  chipItem: {
    fontSize: 6,
    marginHorizontal: 0,
    marginVertical: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  chip: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 0,
    marginVertical: 0,
    minHeight: 12,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 100,
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    paddingRight: 10,
    paddingTop: 10
  },
});

export default AvailableDoctorCard;
