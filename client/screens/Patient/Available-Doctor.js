import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
} from "react-native";
import { BASE_URL_DEV } from "@env";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";

import AvailableDoctorCard from "../../components/availableDoctorCard";
import { AuthContext } from "../../Context/AuthContext";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDistance } from "geolib";

const AvailableDoctor = (props) => {
  const { userInfo } = useContext(AuthContext);
  const [allDoctorsData, setAllDoctorsData] = useState();

  useEffect(() => {
    getNearbyDoctorList();
  }, []);

  const getNearbyDoctorList = async () => {
    const mainLocation = JSON.parse(
      await AsyncStorage.getItem("user-location")
    );

    const response = await axios.get(
      `${BASE_URL_DEV}/doctors`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );


      const modifiedData = response.data.data;


    // const modifiedData = response.data.data.map((val) => {
    //   val.distance = getDistance(
    //     { latitude: mainLocation.latitude, longitude: mainLocation.longitude },
    //     {
    //       latitude: val.location.coordinates[1],
    //       longitude: val.location.coordinates[1],
    //     }
    //   );

    //   return val;
    // });
    setAllDoctorsData(modifiedData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatlistContainer}>
        <FlatList
          style={styles.flatlist}
          data={allDoctorsData}
          renderItem={(data) => (
            <AvailableDoctorCard {...data} navigation={props.navigation} />
          )}
          keyExtractor={(item) => item._id}
          numColumns={2}
          extraData={props.navigation}
          columnWrapperStyle={styles.flatListColumn}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
  },
  flatListColumn: {
    // margin: "30pt",
  },
  flatlistContainer: {
    marginTop: 67,
    marginLeft: 21,
    marginRight: 11,
    height: 660,
  },
});

export default AvailableDoctor;
