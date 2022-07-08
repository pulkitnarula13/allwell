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
import { AuthContext } from "../../Context/AuthContext";

let Screenheight = Dimensions.get("window").height;

const DATA = [
  {
    name: "John Doe",
    image: "../../assets/icon1.png",
  },
  {
    name: "Alia Bhatt",
    image: "../../assets/icon2.png",
  },
];

const ConnectPatient = ({ navigation, route }) => {
  const { userInfo } = useContext(AuthContext)
  const [symptomsData, setSymptomsData] = useState([]);
  const { appointmentData } = useContext(AppointmentContext);
  const [selectedItem, setSelectedItems] = useState();

  console.log(route, "navigation");
  useEffect(() => {
    const filteredArray = route?.params?.symptomsData.filter((value) =>
      appointmentData.symptoms.includes(value._id)
    );
    setSelectedItems(filteredArray);
  }, [route]);


  useEffect(() => {
    getSymptoms();
  }, []);

  const getSymptoms = async () => {
    const data = await axios.get(`${BASE_URL_DEV}/patients/symptoms`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    });
    const modifiedData = data.data.data.map((item) => {
      item.image = "../../assets/icon1.png";
      return item;
    });

    setSymptomsData(modifiedData);
  };

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

  const Item1= ({ name, image }) => (
    <TouchableOpacity onPress={() => navigation.navigate("All-Symptoms")}>
      <View style={styles.item}>
        <Image
          style={{ width: 100, height: 100, marginRight: 14 }}
          source={require("../../assets/icon.png")}
          resizeMode="contain"
        />
        <Text style={styles.name1}>{name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item1 name={item.name} image={item.image} />;


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
            <Button
            onPress={() => navigation.navigate("Add-Family-Member")}
            >
              <Ionicons name="ios-add-circle-outline" size={94} color="black" />
            </Button>
          </TouchableOpacity>
        </View>

        <View style={styles.symptoms}>
          <Text style={styles.subheadingtextview}>Select Symptoms</Text>
          <Text
              onPress={() => {
                navigation.navigate("All-Symptoms");
              }}
              style={{ marginRight: 40, fontWeight: "700" }}
            >
              View All
            </Text>
        </View>
        <View>
            <FlatList
              style={{ height: 110, marginRight: 36, marginLeft: 36 }}
              horizontal={true}
              data={symptomsData}
              renderItem={renderItem}
              keyExtractor={(item) => item.name}
              showsHorizontalScrollIndicator={false}
            />
          </View>

        <View style={styles.speciality}>
          <Text style={styles.subheadingtextview}>Select Speciality</Text>
          <Text style={styles.subheadingtextview1}>Neurologists</Text>
        </View>
        <View style={{ alignItems: "center" }}>
        <Button
            style={styles.availablebtn1}
            mode="contained"
            onPress={() => navigation.navigate("Patient-question-home")}
          >
            Connect Now
          </Button>
          <Button
            style={styles.availablebtn}
            mode="contained"
            onPress={() => navigation.navigate("AvailableDoctor")}
          >
            View Specialist List
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
    marginTop: 19,
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
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
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
