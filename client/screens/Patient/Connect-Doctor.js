import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import AppointmentContext from "../../Context/AppointmentContext";
import { Ionicons } from "@expo/vector-icons";

let Screenheight = Dimensions.get("window").height;

const DATA = [
  {
    name: "Mark",
    image: "../../assets/icon1.png",
  }
];

const ConnectPatient = ({ navigation, route }) => {
  const { appointmentData } = useContext(AppointmentContext);
  const { setAppointmentData } = useContext(AppointmentContext);
  const [selectedItem, setSelectedItems] = useState();

  useEffect(() => {
    const filteredArray = route?.params?.symptomsData.filter((value) =>
      appointmentData.symptoms.includes(value._id)
    );
    setSelectedItems(filteredArray);
  }, [route]);

  const Item = ({ name, image }) => (
    <View style={styles.item}>
      <Image
        style={styles.image1}
        source={require("../../assets/icon.png")}
        resizeMode="center"
      />
      <Text style={styles.name1}>{name}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;

  const renderSymptoms = ({ item }) => {
    return (
        <View style={styles.item}>
        <Image
          style={styles.image1}
          source={require("../../assets/icon.png")}
          resizeMode="center"
        />
        <Text style={styles.name1}>{item.name}</Text>
      </View>
    );
  };

  async function asapButtonClick(){
    setAppointmentData({
      ...appointmentData,
      urgent: true,
    });
    navigation.navigate("Patient-question-home");
  }

  return (
    <ScrollView>
      <View style={styles.outerview}>
        <View style={styles.headingview}>
          <Text style={styles.headingtextview}>Connect with a doctor</Text>
        </View>
        <View style={styles.subheadingview}>
          <Text style={styles.subheadingtextview}>Choose a family</Text>
        </View>
        <View style={styles.familyContainer}>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Add-Family-Member")}
          >
            <Button>
              <Ionicons name="ios-add-circle-outline" size={94} color="black" />
            </Button>
          </TouchableOpacity>
        </View>

        <View style={styles.symptoms}>
          <Text style={styles.subheadingtextview}>Selected Symptoms</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={selectedItem}
            renderItem={renderSymptoms}
            keyExtractor={(item) => item.name}
          />
        </View>

        {/* <View style={styles.speciality}>
          <Text style={styles.subheadingtextview}>Selected Speciality</Text>
          <Text style={styles.subheadingtextview1}>Neurologists</Text>
        </View> */}
        <View style={{ alignItems: "center" }}>
          <Button
            style={styles.availablebtn}
            mode="contained"
            onPress={() => navigation.navigate("AvailableDoctor")}
          >
            Available Doctor
          </Button>

          <Button
            style={styles.availablebtn1}
            mode="contained"
            onPress={asapButtonClick}
          >
            ASAP
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outerview: {
    backgroundColor: "#fff",
    height: Screenheight * 1.4,
    display: "flex",
    flex: 1,
    padding: 32,
  },
  familyContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  availablebtn: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    width: 282,
    height: 45,
    justifyContent: "center",
    marginTop: 68,
    fontWeight: "500",
    fontSize: 17,
  },
  availablebtn1: {
    backgroundColor: "#ffff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    width: 282,
    height: 45,
    justifyContent: "center",
    marginTop: 18,
    fontWeight: "500",
    fontSize: 17,
  },
  subheadingtextview1: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 28,
    textAlign: "center",
    marginTop: 14,
    width: 100,
    height: 28,
  },
  speciality: {
    marginTop: 18,
  },
  symptoms: {
    // position:'absolute',
    // top:400
    marginTop: 24,
  },

  image1: {
    width: 92,
    height: 92,
  },
  image2: {
    width: 67,
    height: 67,
    borderRadius: 50,
  },
  name1: {
    width: 74,
    height: 24,
    textAlign: "center",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    marginRight: 21,
    marginTop: 24,
  },
  headingview: {
    marginTop: 50,
    alignItems: "center",
  },
  headingtextview: {
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 28,
  },
  subheadingview: {
    marginTop: 96,
  },
  subheadingtextview: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 22,
  },
});
export default ConnectPatient;
