import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Alert,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { AuthContext } from "../../Context/AuthContext";

import { FloatingAction } from "react-native-floating-action";
import { BASE_URL_DEV } from "@env";
import axios from "axios";
import { SymptomsList } from "../../constants/symptoms";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDistance, getPreciseDistance } from "geolib";
import PushNotification from "../../components/PushNotification";

const PatientHome = ({ navigation }) => {
  const [nearbyDoctors, setNearByDoctors] = useState([]);

  const [latitude, setlatitude] = useState(0);
  const [userLocation, setUserLocation] = useState("");
  const [longitude, setlongitude] = useState(0);
  const [locationLoading, setLocationLoading] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    getSymptoms();
    getlocationhandler();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    SetLocationData();
  }, []);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const SetLocationData = async () => {
    const mainLocation = JSON.parse(
      await AsyncStorage.getItem("user-location")
    );

    if (mainLocation) {
      setUserLocation(mainLocation.address);
      setlatitude(mainLocation.latitude);
      setlongitude(mainLocation.longitude);
    }
  };

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

  const getNearbyDoctorList = async (latitude, longitude) => {
    const response = await axios.get(
      `${BASE_URL_DEV}/doctors/location?longitude=${longitude}&latitude=${latitude}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    const modifiedData = response.data.data.map((val) => {
      val.distance = getDistance(
        { latitude: latitude, longitude: longitude },
        {
          latitude: val.location.coordinates[1],
          longitude: val.location.coordinates[1],
        }
      );

      return val;
    });

    setNearByDoctors(modifiedData);
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

      SetLocationData();
      getNearbyDoctorList(latitude, longitude);

      for (let item of response) {
        let address = `${item.city}`;
        AsyncStorage.setItem(
          "user-location",
          JSON.stringify({
            address,
            longitude,
            latitude,
          })
        );

        setUserLocation(address);
        console.log(userLocation);
        setlongitude(longitude);
        setlatitude(latitude);
        setLocationLoading(false);
      }
    }
  }

  const renderSpecialities = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  const Item1 = ({ name, distance, specialities, profilePicture }) => {
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
            borderWidth: 1,
            display: "flex",
            justifyContent: "center",
            marginRight: 10,
            alignItems: "center",
            borderColor: "#D9D9D9",
            borderRadius: 8,
          }}
        >
          <View style={{ marginBottom: 8 }}>
            {!profilePicture ? (
              <Avatar.Text
                style={{ backgroundColor: "#74CBD4" }}
                size={65}
                label={name[0]}
                color="#fff"
              />
            ) : (
              <Image
                style={{
                  width: 65,
                  height: 65,
                  borderRadius: 100
                }}
                source={{
                  uri: `${profilePicture}`
                }}
                resizeMode="cover"
              />
            )}
          </View>

          <Text
            style={{
              fontWeight: "400",
              fontSize: 16,
            }}
          >
            Dr. {name}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontSize: 12,
              marginTop: 8,
              marginRight: 8,
            }}
          >
            <Ionicons
              style={{ marginRight: 4 }}
              name="location-outline"
              size={16}
              color="#74CBD4"
            />
            <Text style={{ color: "black" }}>
              {(distance / 10000000).toFixed(1)} km
            </Text>
          </View>
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
            marginRight: 14,
          }}
        >
          <Image
            style={{ width: 76, height: 76 }}
            source={SymptomsList[name]}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.symptomsName}>{name}</Text>
      </TouchableOpacity>
    );
  };

  let Screenheight = Dimensions.get("window").height;

  const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;
  const renderItem1 = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Doctor-Info", {
            id: item._id,
          })
        }
      >
        <Item1
          name={item.name}
          image={item.image}
          distance={item.distance}
          specialities={item.specialities}
          profilePicture={item.profilePicture}
        />
      </TouchableOpacity>
    );
  };

  const renderItem2 = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Doctor-Info", {
          id: item._id,
        })
      }
    >
      <Item1
        name={item.name}
        image={item.image}
        distance={item.distance}
        specialities={item.specialities}
      />
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        backgroundColor: "#FAFAFA",
        alignItems: "center",
      }}
    >
      
      <View
        style={{ marginLeft: 16, marginRight: 16, backgroundColor: "#FFFFFFF" }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View
            style={{
              marginTop: 17.81,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <PushNotification />
            <Text style={styles.heading}>Hello, {userInfo.name}</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={getlocationhandler}>
                <Ionicons name="location-outline" size={24} color="#74CBD4" />
              </TouchableOpacity>
              <Text>
                {locationLoading ? (
                  <ActivityIndicator size="small" color="#bbd0d8" />
                ) : (
                  userLocation
                )}
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 50 }}>
            <Text style={styles.heading13}>Not feeling well?</Text>
          </View>

          <View
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 20,
              color: "white",
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 100,
                backgroundColor: "#74CBD4",
                width: "100%",
                height: 45,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
              color="white"
              mode="contained"
              onPress={() => navigation.navigate("Patient-question-home")}
            >
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
                Chat with a doctor
              </Text>
            </TouchableOpacity>
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
                  fontSize: 16,
                  fontWeight: "600",
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
              style={{
                fontWeight: "700",
                textDecorationLine: "underline",
                textDecorationColor: "#74CBD4",
                lineHeight: 24,
              }}
            >
              View all
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
              style={{ height: 130 }}
              horizontal={true}
              data={symptomsData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index}
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
            <Text
              style={{
                fontWeight: "600",
                fontSize: 16,
              }}
            >
              Near By Doctors
            </Text>
          </View>
          <View>
            <FlatList
              style={{ height: 210 }}
              horizontal={true}
              data={nearbyDoctors}
              renderItem={renderItem1}
              keyExtractor={(item) => item.name}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View>
            <Text
              style={{
                marginTop: 20,
                fontSize: 18,
                marginTop: 17,
                marginBottom: 17,
                fontWeight: "600",
              }}
            >
              Popular Specialists
            </Text>
          </View>
          <View>
            <FlatList
              style={{ height: 210 }}
              horizontal={true}
              data={nearbyDoctors}
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
  heading: {
    fontSize: 22,
    fontWeight: "600",
  },
  heading13: {
    fontSize: 16,
    fontWeight: "600",
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
  symptomsName: {
    textAlign: "center",
    marginLeft: -20,
  },
});
export default PatientHome;
