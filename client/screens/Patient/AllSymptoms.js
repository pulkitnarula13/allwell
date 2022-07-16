import axios from "axios";
import { BASE_URL_DEV } from "@env";
import AppointmentContext from "../../Context/AppointmentContext";
import { StyleSheet, TouchableOpacity, View, Text, Image, FlatList } from "react-native";
import { useContext, useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { AuthContext } from "../../Context/AuthContext";
import { SymptomsList } from "../../constants/symptoms";


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

  const renderItem = (item, image) => {
    console.log(item, "item"); 
    return (
      <TouchableOpacity
        style={[styles.list, item.selectedClass]}
        onPress={() => selectItem(item)}
      >
        <View style={styles.item}>
        <Image
            style={{ width: 74, height: 70 }}
            source={SymptomsList[item.item.name]}
            resizeMode="cover"
          />
          
        </View>
        <Text style={{textAlign:"center"}}>{item.item.name}</Text>
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
          style={{ height: 447,width:390,  marginLeft: 36 }}
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
          <Button style={{justifyContent:"center",alignItems:"center"}} color="white" onPress={getSelectedSymptoms}>
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
    alignItems:"center",
    flex: 1,
  },
  btn: {
    width: 315,
    height: 49,
    backgroundColor: "#74CBD4",
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 100,
  },
  item: {
    marginRight: 10,
    marginBottom: 15,
    borderWidth:2,
    width:100,
    height:100,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:100,
    borderColor:"#74CBD4"
  },
  mainflat: {
    marginTop: 38,
    marginBottom: 54,
    width:1000,
    height: 447,
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
  },
  name1: {
    textAlign: "center",
    color: "white",
  },
  selected: { backgroundColor: "#74CBD4" },
  list: {
    paddingVertical: 5,
    margin: 3,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: -1,
  },
});
