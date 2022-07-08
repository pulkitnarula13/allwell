import axios from "axios";
import { BASE_URL_DEV } from "@env";
import AppointmentContext from "../../Context/AppointmentContext";
import { StyleSheet, TouchableOpacity, View, Text, Image, FlatList } from "react-native";
import { useContext, useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { AuthContext } from "../../Context/AuthContext";

export default function AllSymptoms(props) {
  useEffect(() => {
    getSymptoms();
  }, []);

  const [symptomsData, setSymptomsData] = useState([]);
  const { setAppointmentData } = useContext(AppointmentContext);
  const { userInfo } = useContext(AuthContext);

  const getSymptoms = async () => {
    const data = await axios.get(`${BASE_URL_DEV}/patients/symptoms`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    });

    const modifiedData = data.data.data.map((item) => {
      item.isSelect = false;
      item.selectedClass = styles.list;
      item.image = "../../assets/icon1.png";
      return item;
    });

    setSymptomsData(modifiedData);
  };

  const selectItem = (data) => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect
      ? styles.selected
      : styles.list;

    const index = symptomsData.findIndex((item) => data.item._id === item._id);

    let tempdata = symptomsData;
    tempdata[index] = data.item;

    setSymptomsData(tempdata);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={[styles.list, item.selectedClass]}
        onPress={() => selectItem(item)}
      >
        <View style={styles.item}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../../assets/icon.png")}
            resizeMode="contain"
          />
          <Text style={styles.name1}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const getSelectedSymptoms = () => {
    const selectedSymptoms = symptomsData
      .filter((data) => {
        if (data.isSelect) {
          return true;
        }
        return false;
      })
      .map((item) => item._id);

    setAppointmentData({
      symptoms: selectedSymptoms,
    });

    props.navigation.navigate("Doctor-Connect", {
      symptomsData,
    });
  };

  return (
    <View style={styles.mainscroll}>
      <View style={styles.mainflat}>
        <FlatList
          style={{ height: 417, marginRight: 36, marginLeft: 36 }}
          horizontal={false}
          data={symptomsData}
          renderItem={renderItem}
          numColumns={3}
          keyExtractor={(item) => item.name}
          extraData={symptomsData}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.btn}>
          <Button color="white" onPress={getSelectedSymptoms}>
            Continue
          </Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainscroll: {
    display: "flex",
    flex: 1,
  },
  btn: {
    width: 257,
    height: 40,
    backgroundColor: "#74CBD4",
    borderRadius: 8,
  },
  item: {
    marginRight: 10,
    marginBottom: 22,
  },
  mainflat: {
    marginTop: 38,
    marginBottom: 110,
    height: 417,
    justifyContent: "center",
    alignItems: "center",
  },
  name1: {
    textAlign: "center",
    color: "white",
  },
  selected: { backgroundColor: "#FA7B5F" },
  list: {
    paddingVertical: 5,
    margin: 3,
    flexDirection: "row",
    backgroundColor: "#192338",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: -1,
  },
});
