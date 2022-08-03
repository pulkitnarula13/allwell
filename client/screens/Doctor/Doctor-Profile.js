import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import { Avatar } from "react-native-paper";
import ExpoFastImage from 'expo-fast-image';

const Doctorprofile = (props) => {
  const { userInfo } = useContext(AuthContext);
  const [docProfileData, setDocProfileData] = useState();

  useEffect(() => {
    getDoctorProfile();
  }, []);

  const getDoctorProfile = async () => {
    const userData = await axios.get(`${BASE_URL_DEV}/doctors/${userInfo.id}`);
    setDocProfileData(userData.data.data);
  };

  return docProfileData ? (
    <View style={styles.allview}>
      <View style={styles.main}>
        <View style={styles.profileheading}>
          <Text style={styles.profiletext}>Profile</Text>
        </View>
        <View style={styles.profileheading}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Doctor-Profile-Settings")}
          >
            <Button style={styles.btnsetting}>
              <Feather name="settings" size={24} color="black" />
            </Button>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imagecenter}>
        {/* <Image
          style={styles.image2}
          source={require("../../assets/icon.png")}
          resizeMode="contain"
        /> */}
        {!docProfileData.profilePicture ? (
          <Avatar.Text
            style={{ backgroundColor: "#74CBD4" }}
            size={140}
            label={userInfo.name[0]}
            color="#fff"
          />
        ) : (
          <Image
            style={styles.image2}
            source={
            {
              uri: `${docProfileData.profilePicture}`
            }
            }
          />

          // <ExpoFastImage
          //   uri={docProfileData.profilePicture} // image address
          //   cacheKey={docProfileData.email} // could be a unque id
          //   style={styles.image2} // your custom style object
          // />
        )}
        <Button
          style={styles.editicon}
          onPress={() => props.navigation.navigate("DoctorInformation")}
        >
          <Feather name="edit-3" size={24} color="black" />
        </Button>
      </View>

      <View style={styles.info1}>
        <Text style={styles.infotext1}>Name</Text>
        <Text style={styles.infotext11}>{docProfileData.name}</Text>
      </View>
      <View style={styles.info2}>
        <Text style={styles.infotext1}>Email</Text>
        <Text style={styles.infotext11}>{docProfileData.email}</Text>
      </View>
      <View style={styles.info2}>
        <Text style={styles.infotext1}>Mobile Number</Text>
        <Text style={styles.infotext11}>{docProfileData.phoneNumber}</Text>
      </View>
      <View style={styles.info2}>
        <Text style={styles.infotext1}>License Number</Text>
        <Text style={styles.infotext11}>{docProfileData.licenseNumber}</Text>
      </View>

      {/* Address */}
      {/* <View style={styles.info2}>
        <Text style={styles.infotext2}>Address</Text>
        {docProfileData.address ? (
          <View>
            <Text>
              {" "}
              {docProfileData.address.houseNumber}{" "}
              {docProfileData.address.province} {docProfileData.address.city}{" "}
            </Text>
            <Text>
              {" "}
              {docProfileData.address.province}{" "}
              {docProfileData.address.postalCode}{" "}
            </Text>
          </View>
        ) : (
          <View>
            <Text>Please update address</Text>
          </View>
        )}

        <Text style={styles.infotext11}></Text>
      </View> */}

      {/* Date of Birth (DOB) of doctors */}
      {/* <View style={styles.info2}>
        <Text style={styles.infotext1}>Date of birth</Text>
        <Text style={styles.infotext11}>
          {docProfileData.dob ? (
            <View>
              <Text>{docProfileData.dob}</Text>
            </View>
          ) : (
            <View>
              <Text>Please update DOB</Text>
            </View>
          )}
        </Text>
      </View> */}

      <View style={styles.info3}>
        <Text style={styles.infotext13}>Short Bio</Text>
        <Text style={styles.infotext12}>
          {docProfileData.doctorDescription ? (
            <View>
              <Text>{docProfileData.doctorDescription}</Text>
            </View>
          ) : (
            <View>
              <Text> : Please add some bio</Text>
            </View>
          )}
        </Text>
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  main: { display: "flex", flexDirection: "row", justifyContent: "center" },
  btnsetting: {
    marginLeft: 44,
  },
  allview: {
    paddingLeft: 53,
    paddingRight: 53,
  },
  infotext1: {
    width: 118,
    height: 22,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
    marginRight: 30,
  },
  infotext13: {
    width: 118,
    height: 22,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
  },
  infotext2: {
    width: 118,
    height: 44,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
  },
  editicon: {
    position: "absolute",
    top: 150,
    left: 60,
  },
  infotext11: {
    width: 199,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 22,
  },
  infotext12: {
    width: 302,
    height: 111,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 22,
  },
  profileheading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 38,
    marginBottom: 26,
    width: 246,
  },
  imagecenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profiletext: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 36,
    textAlign: "center",
  },
  image2: {
    width: 159,
    height: 159,
    borderRadius: 100
  },
  info1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
  },
  info2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 26,
  },
  info3: {
    display: "flex",
    flexDirection: "column",
    marginTop: 26,
  },
});

export default Doctorprofile;
