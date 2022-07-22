import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { Avatar, Button } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import { AuthContext } from "../../Context/AuthContext";

const PatientProfile = (props) => {
  const { userInfo } = useContext(AuthContext);

  const [PatientProfileData, setPatientProfileData] = useState();
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
  const dateformatted = new Date(PatientProfileData?.dob);
  let defaultphonenumber = "00000";

  return (
    <ScrollView>
      <View style={styles.allview}>
        <View style={styles.main}>
          <View style={styles.profileheading}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={styles.profiletext}>Profile</Text>
              <Button
                style={styles.editicon}
                onPress={() =>
                  props.navigation.navigate("PatientInformation", {
                    data: PatientProfileData,
                  })
                }
              >
                <Feather name="edit-3" size={24} color="black" />
              </Button>
            </View>
            <View>
              <Button
                style={styles.btnsetting}
                onPress={() =>
                  props.navigation.navigate("Patient-Profile-Settings")
                }
              >
                <Feather name="settings" size={24} color="black" />
              </Button>
            </View>
          </View>
        </View>
        <View style={styles.imagecenter}>
         {
          PatientProfileData?.profilePicture ? 
           <Image
           style={styles.image2}
           source={{
             uri: `${PatientProfileData?.profilePicture}`,
           }}
           resizeMode="cover"
         /> :               
         <Avatar.Text
          style={{ backgroundColor: "#74CBD4" }}
          size={98}
          label={PatientProfileData?.name[0]}
          color="#fff"
        />
         }
        </View>
        <View style={styles.info1}>
          <Text style={styles.infotext1}>Email</Text>
          <Text style={styles.infotext11}>{PatientProfileData?.email}</Text>
        </View>

        <View style={styles.dividerLine} />

        <View style={styles.info2}>
          <Text style={styles.infotext1}>Mobile Number</Text>
          <Text style={styles.infotext11}>
            {!PatientProfileData?.phoneNumber
              ? defaultphonenumber
              : PatientProfileData?.phoneNumber}
          </Text>
        </View>

        <View style={styles.dividerLine} />

        <View style={styles.info2}>
          <Text style={styles.infotext1}>MSP Number</Text>
          <Text style={styles.infotext11}>
            {PatientProfileData?.healthNumber}
          </Text>
        </View>

        <View style={styles.dividerLine} />

        <View style={styles.info2}>
          <Text style={styles.infotext1}>Date of birth</Text>
          <Text style={styles.infotext11}>{dateformatted.toDateString()}</Text>
        </View>

        <View style={styles.dividerLine} />

        <View style={styles.info2}>
          <Text style={styles.infotext2}>Address</Text>
          <Text style={styles.infotext11}>
          {PatientProfileData?.address}
          </Text>
        </View>


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnsetting: {},

  allview: {
    paddingLeft: 53,
    paddingRight: 53,
  },  editicon: {
    // position: "absolute",
    // top: 120,
    // left: 60,
  },

  dividerLine: {
    width: 310,
    height: 0,
    borderWidth: 0.75,
    borderColor: "#CBD5E0",
    marginLeft: -9,
    marginBottom: 15,
  },

  infotext1: {
    width: 118,
    height: 22,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
  },
  infotext13: {
    width: 118,
    height: 22,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
    textAlign: "left",
    left: -10,
  },
  infotext2: {
    width: 118,
    height: 44,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
  },
  infotext11: {
    width: 199,
    fontWeight: "400",
    fontSize: 16,
    textAlign: "right",
    lineHeight: 22,
  },
  infotext12: {
    width: 317,
    height: 111,
    fontWeight: "400",
    fontSize: 16,
    textAlign: "left",
    lineHeight: 22,
    left: -10,
  },
  profileheading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 38,
    marginBottom: 26,
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
    width: 75,
  },
  image2: {
    width: 130,
    height: 130,
    marginBottom: 62,
    borderRadius: 100,
  },
  info1: {
    display: "flex",
    width: 302,
    flexDirection: "row",
    marginBottom: 12,
    left: -10,
    justifyContent: "space-between",
  },
  info2: {
    marginBottom: 12,
    left: -10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  info3: {
    display: "flex",
    flexDirection: "column",
  },
});

export default PatientProfile;
