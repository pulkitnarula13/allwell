import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Switch, Button } from "react-native-paper";
import { AuthContext } from "../../Context/AuthContext";

const PatientProfileSettings = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const { logout } = useContext(AuthContext);

  const patientLogout = () => {
    logout();
    navigation.navigate("greeting");
  };

  return (
    <View>
      <View style={styles.outerview}>
        <Text style={styles.profiletext}>Profile</Text>
      </View>
      <View style={styles.info1}>
        <Text style={styles.infotext1}>Account Information</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      <View style={styles.info1}>
        <Text style={styles.infotext1}>Settings</Text>
        <AntDesign name="up" size={24} color="black" />
      </View>
      <View style={styles.info1}>
        <Text style={styles.infotext1}>Push notifications</Text>
        <Switch
          color="#74CBD4"
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
        />
      </View>
      <View style={styles.info1}>
        <Text style={styles.infotext1}>Touch ID</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      <View style={styles.info1}>
        <Text style={styles.infotext1}>Manage Family Member</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      <View style={styles.info1}>
        <Text style={styles.infotext1}>FAQ</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      <View style={styles.info1}>
        <Text style={styles.infotext1}>Privacy Policy</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      <View style={styles.info2}>
        <Text style={styles.infotext1}>Term of Use</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>
      <View style={styles.buttonarea}>
        <Button
          style={styles.availablebtn}
          mode="contained"
          onPress={patientLogout}
          color="#FCFCFC"
        >
          Log Out
        </Button>
      </View>
      <View style={styles.buttonarea}>
        <Button
          style={styles.availablebtn1}
          mode="contained"
          onPress={() => console.log("Pressed")}
          color="#FCFCFC"
        >
          Delete Account
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  outerview: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 38,
    marginBottom: 46,
  },
  buttonarea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  profiletext: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 36,
    textAlign: "center",
  },
  availablebtn: {
    backgroundColor: "#74CBD4",
    borderRadius: 100,
    width: 315,
    height: 49,
    justifyContent: "center",
    fontWeight: "500",
    fontSize: 17,
  },
  availablebtn1: {
    backgroundColor: "#FCFCFC",
    borderRadius: 100,
    borderColor: "#74CBD4",
    width: 315,
    height: 49,
    borderWidth: 2,
    justifyContent: "center",
    fontWeight: "500",
    fontSize: 17,
    color: "#74CBD4",
  },
  info1: {
    width: 333,
    display: "flex",
    flexDirection: "row",
    marginRight: 33,
    marginLeft: 33,
    marginBottom: 29,
    justifyContent: "space-between",
  },
  info2: {
    width: 333,
    display: "flex",
    flexDirection: "row",
    marginRight: 33,
    marginLeft: 33,
    marginBottom: 63,
    justifyContent: "space-between",
  },
  infotext11: {
    width: 199,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 22,
  },
  infotext1: {
    width: 195,
    height: 22,
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 24,
  },
});
export default PatientProfileSettings;
