import { View, Text, StyleSheet, Image, ScrollView, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { TextInput, Button } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import PatientProfile from "./Patient-Profile";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { BASE_URL_DEV } from "@env";
import { Avatar } from "react-native-paper";

const PatientInformation = (props) => {
  const { userInfo } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [MSP, setMSP] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [dataLoading, setDataLoading] = useState(false);

  const getPatientProfile = async () => {
    setDataLoading(true);
    const userData = await axios.get(
        `${BASE_URL_DEV}/patients/${userInfo.id}`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
    console.log(userData);
    setName(userData.data.data.name);
    setemail(userData.data.data.email);
    setProfilePicture(userData.data.data.profilePicture);
    setPhoneNumber(userData.data.data.phoneNumber.toString());
    setMSP(userData.data.data.healthNumber.toString());
    setDataLoading(false);
  };

  useEffect(() => {
    getPatientProfile();
  }, []);

  const openimagelib = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePicture({ base64: result.base64, uri: result.uri });
      console.log(profilePicture, "selected Profile Picture");
    }
  };

  function updatedata() {
    // navigation.navigate("Patientprofile");
    console.log(name, email, phoneNumber, profilePicture, "all val");
    axios
      .put(
        `${BASE_URL_DEV}/patients/${userInfo.id}`,
        {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          healthNumber: MSP,
          profilePicture: profilePicture.base64,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      )
      .then((response) => {
        Alert.alert("Success", "Updated Profile Succesfully");
        props.navigation.navigate("PatientProfile")
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return  (
    <View style={styles.maxview}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.overall}>
          <View style={styles.imageview}>
            <TouchableOpacity onPress={openimagelib}>
              {/* {!userInfo.profilePicture && !profilePicture ? (
                <Avatar.Text
                  style={{ backgroundColor: "#74CBD4" }}
                  size={140}
                  label={userInfo.name[0]}
                  color="#fff"
                />
              ) : (
                <Image
                  style={styles.imgstyle}
                  source={{ uri: `${profilePicture.uri}` }}
                />
              )} */}
                <Image
                    style={styles.imgstyle}
                    source={{ uri: profilePicture }}
                    resizeMode="cover"
                />
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.inputbox1}
            mode="outlined"
            label="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <TextInput
            style={styles.inputbox}
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={(text) => setemail(text)}
          />

          <TextInput
            style={styles.inputbox}
            mode="outlined"
            label="Phone"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />

          <TextInput
            style={styles.inputbox}
            mode="outlined"
            label="MSP Number"
            value={MSP}
            onChangeText={(text) => setMSP(text)}
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
            onPress={() => props.navigation.navigate("PatientProfile")}
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
  )
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
    width: 150,
    height: 150,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#D9D9D9",
    borderRadius: 100,
  },
});
export default PatientInformation;
