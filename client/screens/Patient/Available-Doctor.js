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
import { availableDoctorList } from "../../constants/availableDoctor";
import { AuthContext } from "../../Context/AuthContext";
import { Alert } from "react-native";

const AvailableDoctor = (props) => {
  const { userInfo } = useContext(AuthContext);
  const [alldata, setalldata] = useState();

  useEffect(() => {
    console.log("Hello");
    axios
      .get(`${BASE_URL_DEV}/doctors`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      })
      .then((response) => {
        setalldata(response.data.data)
        console.log(response.data.data)
        Alert.alert("You are on available doctor screen");
      }).catch((error) => {
        Alert.alert(error.message);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatlistContainer}>
        <FlatList
          style={styles.flatlist}
          data={availableDoctorList}
          renderItem={(data) => (
            <AvailableDoctorCard {...data} navigation={props.navigation} />
          )}
          keyExtractor={(item) => item.id}
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
    margin: 30,
  },
  flatlistContainer: {
    marginTop: 67,
  },
});

export default AvailableDoctor;
