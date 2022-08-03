import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Avatar, Button } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import { AuthContext } from "../../Context/AuthContext";

const PatientProfile = (props) => {
  const { userInfo } = useContext(AuthContext);
  const [patientProfileData, setPatientProfileData] = useState();

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const userdata = await axios.get(
        `${BASE_URL_DEV}/patients/${userInfo.id}`,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );

      setPatientProfileData(userdata.data.data);
    } catch (error) {
      console.log(error);
    }
    console.log(props);
  };

  return patientProfileData ? (
    <View style={styles.allview}>
      <View style={styles.main}>
        <View style={styles.profileheading}>
          <Text style={styles.profiletext}>Profile</Text>
        </View>
        <View style={styles.profileheading}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Patient-Profile-Settings")}
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
        {!patientProfileData.profilePicture ? (
              <Avatar.Text
                style={{ backgroundColor: "#74CBD4" }}
                size={140}
                label={userInfo?.name[0]}
                color="#fff"
              />
            ) : (
              <Image
                style={styles.image2}
                source={
                {
                  uri: `${patientProfileData.profilePicture}`
                }
                }
              />
            )}
        <Button style={styles.editicon}
          onPress={() => props.navigation.navigate("PatientInformation")}>
          <Feather name="edit-3" size={24} color="black" />
        </Button>
      </View>

      <View style={styles.info1}>
        <Text style={styles.infotext1}>Name</Text>
        <Text style={styles.infotext11}>{patientProfileData.name}</Text>
      </View>

      <View style={styles.dividerLine} />

      <View style={styles.info2}>
        <Text style={styles.infotext1}>Email</Text>
        <Text style={styles.infotext11}>{patientProfileData.email}</Text>
      </View>

      <View style={styles.dividerLine} />

      <View style={styles.info2}>
        <Text style={styles.infotext1}>Mobile Number</Text>
        <Text style={styles.infotext11}>{patientProfileData.phoneNumber}</Text>
      </View>

      <View style={styles.dividerLine} />

      <View style={styles.info2}>
        <Text style={styles.infotext1}>MSP Number</Text>
        <Text style={styles.infotext11}>{patientProfileData.healthNumber}</Text>
      </View>

      <View style={styles.dividerLine} />



      <View style={styles.info2}>
        <Text style={styles.infotext1}>Address</Text>
        <Text style={styles.infotext11}>
          {patientProfileData.address ? (
            <View>
              <Text>{patientProfileData.address}</Text>
            </View>
          ) : (
            <View>
              <Text> : Please add Address</Text>
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
    paddingLeft: 45,
    paddingRight: 45,
  },
  infotext1: {
    width: 118,
    height: 22,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
    marginRight: 30,
  },

  editicon: {
    position: "absolute",
    top: 150,
    left: 60,
  },
  infotext11: {
    width: 180,
    fontWeight: "400",
    fontSize: 15,
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
    marginTop: 20,
  },
  info3: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },
  dividerLine: {
    width: 310,
    height: 0,
    borderWidth: 0.75,
    borderColor: "#CBD5E0",
    marginLeft: -9,
    marginBottom: 15,
  },
});

export default PatientProfile;
