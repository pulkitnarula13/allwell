import React, { useState } from "react";
import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
import { Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const CreatingAccount1 = () => {
  const [image1, setimage1] = useState(".../assets/icon.png");
  const [clicked, setclicked] = useState(false)

  const changepage = () => {
      setclicked(true)
  };

  const openimagelib = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setimage1(result.uri);
    }
  };

  return (
    <View>
      <View>
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
            style={{ width: 302, height: 194 }}
            source={{ uri: image1 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonview}>
        <Button
          style={{
            marginBottom: 5,
            borderRadius: 10,
            backgroundColor: "#D9D9D9",
            width: 302,
            height: 45,
            justifyContent: "center",
          }}
          mode="contained"
          onPress={changepage}
        >
          Submit and Continue
        </Button>
        <Text>Register process may take upto three hours</Text>
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
    fontSize: "20px",
    fontWeight: "600",
    color: "gray",
    marginTop: 20,
  },
  accountHeading1: {
    fontSize: 16,
    fontWeight: "400",
    color: "#718096",
    lineHeight: 19.36,
    marginTop: 20,
    marginBottom: 40,
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
  },
});

export default CreatingAccount1;
