import React, { useState } from "react";
import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
const { width, height } = Dimensions.get("window");

const CreatingAccount1 = (props) => {
  const [image1, setimage1] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");

  const openimagelib = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setimage1(result.uri);
      console.log(result.uri);
      props.setFirstStepperData(result);
      props.setFirstStepperData({
        image: result,
        ...props.mainData,
      });
    }
  };

  return (
    <View style={{marginLeft:50,marginRight:50}} >
      <View style={{marginTop:55}}>
        <Text style={styles.accountHeading}>To register a doctor account,</Text>
      </View>
      <View>
        <Text style={styles.accountHeading1}>
          Please upload a primary document for the proof of medical
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={openimagelib}>
          <Image
            style={{ width: 292, height: 194 }}
            source={
              image1 ? { uri: image1 } : require("../assets/placeholder.png")
            }
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={{marginBottom:40}}>
        <Text style={styles.textspeciality}>License Number</Text>
        <TextInput
          value={licenseNumber}
          placeholder="License Number"
          onChangeText={(data) => {
            setLicenseNumber(data);
            props.setFirstStepperData({
              ...props.mainData,
              licenseNumber: data,
            });
          }}
        />
      </View>
      <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:22}}>
      <Text style={{width:247,fontSize:12}}>Registration Process may take upto 3 hours</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstHeading: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 29.05,
    textAlign: "center",
  },
  outerview: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    height: height,
    flex: 1,
    padding: 32,
  },
  indicatorContainer: {
    height: 22,
    width: 348,
    padding: 20,
    margin: 15,
    elevation: 10,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  accountHeading: {
    fontSize: 20,
    fontWeight: "600",
    color: "gray",
    marginTop: 20,
    width:292
  },
  accountHeading1: {
    fontSize: 16,
    fontWeight: "400",
    color: "#718096",
    lineHeight: 19.36,
    marginTop: 20,
    marginBottom: 32,
  },
  accountImage: {
    width: 302,
    height: 194,
    marginRight: 21,
  },
  buttonview: {
    marginTop: 76,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:20
  },
  textspeciality: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    color: "#515767",
  },
});

export default CreatingAccount1;
