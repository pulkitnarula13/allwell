import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import {  Button } from "react-native-paper";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import {
//   getCurrentPositionAsync,
//   useForegroundPermissions,
//   PermissionStatus,
// } from "expo-location";

import * as Location from "expo-location";
import { AuthContext } from "../../Context/AuthContext";

import { FloatingAction } from "react-native-floating-action";
import { BASE_URL_DEV } from "@env";
import axios from "axios";
import { SymptomsList } from "../../constants/symptoms";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PatientHome = ({ navigation }) => {
  const nearby = [
    {
      id: "Dr.Beth Smith",
      image: "./assets/doctor1.jpg",
    },
    {
      id: "Dr.John Legend",
      image: "./assets/doctor2.jpg",
    },
  ];

  const [latitude, setlatitude] = useState("0");
  const [userLocation, setUserLocation] = useState("");
  const [longitude, setlongitude] = useState("0");
  const [locationLoading, setLocationLoading] = useState(false);

  useEffect(async () => {
    getSymptoms();
    const address = await AsyncStorage.getItem('user-location');
    console.log(address, "address");
    if (address) {
      setUserLocation(address);
    }
  }, []);



  const [symptomsData, setSymptomsData] = useState([]);
  const { userInfo } = useContext(AuthContext);

  const getSymptoms = async () => {
    const data = await axios.get(`${BASE_URL_DEV}/patients/symptoms`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    const modifiedData = data.data.data.map((item) => {
      item.image = "../../assets/icon1.png";
      return item;
    });

    setSymptomsData(modifiedData);
  };

  async function getlocationhandler() {
    setLocationLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();


    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
        AsyncStorage.setItem('user-location', address);
        setUserLocation(address);
        setLocationLoading(false);
      }
    }
  }

  const Item1 = ({ name, image }) => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 187,
            height: 187,
            borderWidth: 2,
            display: "flex",
            justifyContent: "center",
            marginRight: 10,
            alignItems: "center",
            borderColor: "black",
            borderRadius: 8,
          }}
        >
          <Image
            style={{
              width: 65,
              height: 65,
              borderRadius: 100,
              backgroundColor: "gray",
            }}
            source={nearby.name}
            resizeMode="cover"
          />
          <Text style={{ fontWeight: "500", fontSize: 16 }}>{nearby.name}</Text>
          <Text style={{ fontWeight: "100", fontSize: 12 }}>
            General Phisician
          </Text>
          <Button style={{ display: "flex", flexDirection: "row" }}>
            <Ionicons
              style={{ marginRight: 10 }}
              name="location-outline"
              size={24}
              color="#74CBD4"
            />
            <Text style={{ color: "black" }}>5Km</Text>
          </Button>
        </View>
      </View>
    );
  };

  const Item = ({ name, image }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("All-Symptoms")}>
        <View
          style={{
            borderWidth: 3,
            borderColor: "#74CBD4",
            borderRadius: 100,
            padding: 10,
            marginRight: 14,
          }}
        >
          <Image
            style={{ width: 76, height: 76 }}
            source={SymptomsList[name]}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
    );
  };

  let Screenheight = Dimensions.get("window").height;

  const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;
  const renderItem1 = ({ item }) => (
    <Item1 name={item.name} image={item.image} />
  );

  const renderItem2 = ({ item }) => (
    <Item1 name={item.name} image={item.image} />
  );

  return (
    <View
      style={{
        backgroundColor: "#FAFAFA",
        alignItems: "center",
        height: Screenheight * 1.4,
        display: "flex",
        flex: 1,
      }}
    >
      <View style={{ paddingLeft: 20, backgroundColor: "#FFFFFFF" }}>
        <ScrollView>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          ></View>
          <View
            style={{
              marginTop: 17.81,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.heading}>Hello, {userInfo.name}</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Button onPress={getlocationhandler}>
                <Ionicons name="location-outline" size={24} color="#74CBD4" />
              </Button>
              <Text style={{ marginRight: 50, marginTop: 15 }}>
               {locationLoading ?  <ActivityIndicator size="small" color="#bbd0d8" /> :  userLocation}
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 50 }}>
            <Text style={styles.heading}>Not feeling well?</Text>
          </View>

          <View
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Button
              style={{
                color: "white",
                borderRadius: 100,
                backgroundColor: "#74CBD4",
                width: 282,
                height: 45,
                justifyContent: "center",
              }}
              color="white"
              mode="contained"
              onPress={() => navigation.navigate("Patient-question-home")}
            >
              Chat with a doctor
            </Button>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "block",
                alignItems: "flex-start",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  alignItems: "flex-start",
                }}
              >
                Choose your symptons
              </Text>
            </View>
            <Text
              onPress={() => {
                navigation.navigate("All-Symptoms");
              }}
              style={{ marginRight: 40, fontWeight: "700" }}
            >
              View All
            </Text>
          </View>
          <View
            style={{
              display: "block",
              alignItems: "flex-start",
              height: 50,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "600", color: "#A0AEC0" }}>
              To connect with specialist
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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 17,
              marginBottom: 17,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 16 }}>
              Near By Doctors
            </Text>
          </View>
          <View>
            <FlatList
              style={{ height: 210, marginRight: 36, marginLeft: 36 }}
              horizontal={true}
              data={nearby}
              renderItem={renderItem1}
              keyExtractor={(item) => item.name}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View>
            <Text style={{ marginTop: 20, fontWeight: "700", fontSize: 16 }}>
              Popular Doctors
            </Text>
          </View>
          <View>
            <FlatList
              style={{ height: 210, marginRight: 36, marginLeft: 36 }}
              horizontal={true}
              data={nearby}
              renderItem={renderItem2}
              keyExtractor={(item) => item.name}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    width: 67,
    height: 36,
    fontSize: 10,
    lineHeight: 18,
    alignItems: "center",
  },
  twoimages: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
  },
  containernew: {
    position: "absolute",
    left: "18.46%",
    right: "18.46%",
    top: "8.65%",
    bottom: "89.1%",
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 26.66,
  },
  heading12: {
    width: 201,
    marginTop: 55,
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 24.66,
  },
  imgstyle: {
    width: 350,
    height: 233,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
  },
  imageview: {
    width: 35,
    height: 233,
    alignItems: "center",
  },
  containerdata1: {},
  containerdata15: {
    width: 346,
    height: 66,
    display: "flex",
  },
  heading1: {
    fontSize: 20,
    fontWeight: "600",
  },
  containerdata16: {
    width: 125,
    height: 39,
  },
});
export default PatientHome;
