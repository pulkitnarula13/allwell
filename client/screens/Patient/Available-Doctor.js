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

const AvailableDoctor = (props) => {
  const { userInfo } = useContext(AuthContext);
  const [allDoctorsData, setAllDoctorsData] = useState();

  useEffect(() => {

    axios
      .get(`${BASE_URL_DEV}/doctors`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      })
      .then((response) => {
        setAllDoctorsData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  }, []);

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
    marginLeft:21,
    marginRight:11,
    height:660

  },
});

export default AvailableDoctor;
