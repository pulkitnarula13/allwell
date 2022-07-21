import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import PatientProfile from "./Patient-Profile";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { BASE_URL_DEV } from "@env";

const AccountInformation = (props) => {
  console.log(props, "props");

  const [name, setName] = useState(props.route.params.data.name);
  const [email, setemail] = useState(props.route.params.data.email);
  const [phonenumber, setphonenumber] = useState(
    props.route.params.data.phoneNumber
  );
  const [MSP, setMSP] = useState(props.route.params.data.healthNumber);
  const [birthdate, setbirthdate] = useState(props.route.params.data.dob);
  const [gender, setGender] = useState("");
  const [Pincode, setPincode] = useState("");
  const [shortbio, setshortbio] = useState("");
  const [image1, setimage1] = useState(props.route.params.data.profilePicture);
  const { userInfo } = useContext(AuthContext);

  const openimagelib = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setimage1(result.base64);
      console.log(image1);
      props.setFirstStepperData(result);
    }
  };

  function updatedata() {
    // navigation.navigate("PatientProfile")
    axios
      .put(
        `${BASE_URL_DEV}/patients/${userInfo.id}`,
        {
          name: name,
          email: email,
          healthNumber: MSP,
          dob: birthdate,
          profilePicture: image1,
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

  return (
    <View style={styles.maxview}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.overall}>
          <View style={styles.imageview}>
            <TouchableOpacity onPress={openimagelib}>
              <Image
                style={styles.imgstyle}
                source={{ uri: image1 }}
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
            label="Add MSP Number"
            value={MSP}
            onChangeText={(text) => setMSP(text)}
          />
          <TextInput
            style={styles.inputbox}
            mode="outlined"
            label="Birth Date"
            value={birthdate}
            onChangeText={(text) => setbirthdate(text)}
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
  );
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
    width: 95,
    height: 95,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#D9D9D9",
    borderRadius: 10,
  },
});
export default AccountInformation;
