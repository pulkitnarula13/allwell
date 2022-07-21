import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { TextInput, Button } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Doctorprofile from "./Doctor-Profile";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { BASE_URL_DEV } from "@env";
import { Avatar } from "react-native-paper";


const DoctorInformation = (props) => {
  console.log(props, "props");

  const { userInfo } = useContext(AuthContext);
  const [docProfileData, setDocProfileData] = useState();

  useEffect(() => {
    getDoctorProfile();
  }, []);

  const getDoctorProfile = async () => {
    const userData = await axios.get(`${BASE_URL_DEV}/doctors/${userInfo.id}`);
    setDocProfileData(userData.data.data);
  };

  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [doctorDescription, setDoctorDescription] = useState('');
  const [profilePicture, setProfilePicture] = useState('');


  const openimagelib = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
    setProfilePicture(result.base64);
      console.log(profilePicture);
    }
  };

  function updatedata() {

    navigation.navigate("Doctorprofile")

    axios
      .put(
        `${BASE_URL_DEV}/doctors/${userInfo.id}`,
        {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          doctorDescription: doctorDescription,
          profilePicture: profilePicture,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        alert(`Value has changed to ${response.data.name}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return docProfileData ? (
    <View style={styles.maxview}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.overall}>
          <View style={styles.imageview}>
            <TouchableOpacity onPress={openimagelib}>
              {/* <Image
                style={styles.imgstyle}
                source={{ uri: profilePicture }}
                resizeMode="cover"
              /> */}
              {!userInfo.profilePicture ? (
              <Avatar.Text
                style={{ backgroundColor: "#74CBD4" }}
                size={140}
                label={userInfo.name[0]}
                color="#fff"
              />
            ) : (
              <Image
                style={styles.imgstyle}
                source = {{ uri: profilePicture }}
              />
            )}
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.inputbox1}
            mode="outlined"
            label="Name"
            value={docProfileData.name}
            onChangeText={(text) => setName(text)}
          />

          <TextInput
            style={styles.inputbox}
            mode="outlined"
            label="Email"
            value={docProfileData.email}
            onChangeText={(text) => setemail(text)}
          />

        <TextInput
            style={styles.inputbox}
            mode="outlined"
            label="Phone"
            value={docProfileData.phoneNumber.toString()}
            onChangeText={(text) => setPhoneNumber(text)}
          />

        <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.inputbox3}
            mode="outlined"
            label="Doctor Description"
            value={docProfileData.doctorDescription}
            onChangeText={(text) => setDoctorDescription(text)}
          />
          
        </View>
        <View style={styles.btnview}>
          <Button
            style={{
              borderRadius: 100,
              backgroundColor: "#FCFCFC",
              width: 150,
              height: 49,
              justifyContent: "center",
              marginRight: 29,
              borderColor: "#74CBD4",
              borderWidth: 2,
            }}
            labelStyle={{ color: "#74CBD4", fontSize: 16, fontWeight: "600" }}
            mode="contained"
            onPress={() => props.navigation.navigate("Doctorprofile")}
          >
            Cancel
          </Button>
          <Button
            style={{
              borderRadius: 100,
              backgroundColor: "#74CBD4",
              width: 150,
              height: 49,
              justifyContent: "center",
              borderColor: "#74CBD4",
              borderWidth: 2,
            }}
            labelStyle={{ color: "white", fontSize: 16, fontWeight: "600" }}
            mode="contained"
            onPress={() => updatedata()}
          >
            Save
          </Button>
        </View>
      </ScrollView>
    </View>
  ): null;
};
const styles = StyleSheet.create({
  overall: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnview: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  maxview: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  outerview: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 38,
    marginBottom: 46,
  },
  inputbox: {
    width: 287,
    height: 40,
    marginBottom: 19,
  },  
  inputbox3: {
    width: 287,
    height: 90,
    marginBottom: 19,
  },
  inputboxhouse: {
    width: 287,
    height: 40,
    marginBottom: 19,
    marginRight: 10,
    display: "flex",
    flex: 1,
  },
  inputbox1: {
    width: 287,
    height: 40,
    marginBottom: 19,
  },
  imageview: {
    display: "flex",
    marginTop: 23,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  profiletext: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 36,
    textAlign: "center",
  },
  imgstyle: {
    width: 95,
    height: 95,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#D9D9D9",
    borderRadius: 10,
  },
});
export default DoctorInformation;
