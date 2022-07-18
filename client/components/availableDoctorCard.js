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
import { Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
const AvailableDoctorCard = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("Doctor-Info", {
            id: props.item._id,
          })
        }
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
            marginTop:18
          }}
        >
          <Image
            source={require("../assets/icon.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.ratingContainer}>
            
            <Rating
              type="custom"
              ratingBackgroundColor="#74CBD4"
              ratingColor="#74CBD4"
              ratingCount={1}
              imageSize={15}
            />
            <Text>{props.item.rating}4.0</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Text style={{ marginBottom: 5,marginRight:-10,fontSize:16,fontWeight:"400" }}>{props.item.name}</Text>

      <Text style={{ marginBottom: 5, fontWeight: "100" }}>
        {/* {props.item.specialities.map((speciality) => {

        })} */}
      </Text>
      <Button style={{ display: "flex", flexDirection: "row" }}>
        <Ionicons
          style={{ marginRight: 10 }}
          name="location-outline"
          size={24}
          color="#74CBD4"
        />
        <Text style={{ color: "black",marginBottom:15 }}>2km</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 168.7,
    height:182,
    borderWidth: 2,
    marginRight: 10.3,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:30
  },
  image: {
    width: 65,
    height: 65,
    marginRight:7,
    borderRadius:100
   
  },
  ratingContainer: {
    display: "flex",
    marginRight:-50,
    marginTop:-10,
    flexDirection: "row",
  },
});

export default AvailableDoctorCard;
