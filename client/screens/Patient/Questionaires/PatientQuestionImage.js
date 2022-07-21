import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";

const PatientQuestionImage = (props) => {
  const [totalImages, setTotalImages] = useState([]);

  const openimagelib = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const data = totalImages;
      data.push({
        uri: result.uri,
        base64: result.base64
      });
      setTotalImages(data);
      props.setSixthStepperData({
        ...props.mainData,
        images: data,
      });
    }
  };

  const Item = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image style={styles.image2} source={{
          uri: item.uri
        }} resizeMode="contain" />
      </View>
    );
  };
  return (
    <View style={styles.outer}>
      <View style={styles.imageview}>
        <Image
          style={styles.image1}
          source={require("../../../assets/images/doctorAni.gif")}
          resizeMode="center"
        />
      </View>
      <Text style={{ fontSize: 14, fontWeight: "600", marginBottom: 5 }}>Add Photos/Videos</Text>
      <View style={{ display: "flex", flexDirection: "row", height: 130 }}>
        <TouchableOpacity onPress={openimagelib}>
          <View style={{ width: 130, height: 130, borderWidth: 1, borderColor: "#A0AEC0", justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
            <Image
              style={styles.image3}
              source={require("../../../assets/camera.jpg")}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>
        <FlatList
          style={{ marginBottom: 40 }}
          horizontal={true}
          data={totalImages}
          renderItem={Item}
          keyExtractor={(item, index) => index}
        />
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
  image3: {
    width: 82,
    height: 82,
    borderRadius: 10,
    justifyContent: "center", alignItems: "center",
  },
  image1: {
    height: 284,
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
  },
  outer: {
    display: "flex",
    flex: 1,
    padding: 30,
  },
});
export default PatientQuestionImage;
