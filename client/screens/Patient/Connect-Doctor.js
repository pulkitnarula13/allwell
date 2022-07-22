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
import { Avatar, Button } from "react-native-paper";
import { ScrollView } from "react-native";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import AppointmentContext from "../../Context/AppointmentContext";
import { Ionicons } from "@expo/vector-icons";
import { SymptomsList } from "../../constants/symptoms";
import { AuthContext } from "../../Context/AuthContext";


let Screenheight = Dimensions.get("window").height;

const ConnectPatient = ({ navigation, route }) => {
  // get the family members
  useEffect(() => {
    getFamilyMembers();
  }, []);

  const { userInfo } = useContext(AuthContext);
  const { appointmentData } = useContext(AppointmentContext);
  const { setAppointmentData } = useContext(AppointmentContext);
  const [ membersData, setMembersData ] = useState([]);
  const [selectedItem, setSelectedItems] = useState();

// Get the family members from the API
  const getFamilyMembers = async () => {
    const familyData = await axios.get(`${BASE_URL_DEV}/patients/members/${userInfo.id}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    });

    console.log(familyData);


    const modifiedData = familyData.data.data.map((item) => {
      item.isSelect = false;
      item.selectedClass = styles.list;
      item.image = "../../assets/icon1.png";
      return item;
    });

    setMembersData(modifiedData);
  };

  const selectMember = (data) => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect
      ? styles.selected
      : styles.list;

    const index = membersData.findIndex((item) => data.item._id === item._id);

    let tempdata = membersData;
    tempdata[index] = data.item;

    setMembersData(tempdata);
  };

  const renderMember = (item) => {
    return (
      <TouchableOpacity
        style={[styles.list, item.selectedClass]}
        onPress={() => selectMember(item)}
      >
        <View style={styles.item}>
        {!item.item.profilePicture ? (
        <Avatar.Text
          style={{ backgroundColor: "#74CBD4" }}
          size={65}
          label={item.item.name[0]}
          color="#fff"
        />
      ) : (
        <Image
          style={styles.image1}
          source={item.item.profilePicture}
          resizeMode="center"
        />
      )}
          
        </View>
        <Text style={{marginBottom:39,fontSize:14,fontWeight:"400", paddingLeft: 15}}>{item.item.name.split(' ')[0]}</Text>
      </TouchableOpacity>
    );
  };



  useEffect(() => {
    const filteredArray = route?.params?.symptomsData.filter((value) =>
      appointmentData.symptoms.includes(value._id)
    );
    setSelectedItems(filteredArray);
  }, [route]);

  const Item = ({ name, profilePicture }) => (
    <View style={styles.item}>
      {!profilePicture ? (
        <Avatar.Text
          style={{ backgroundColor: "#74CBD4" }}
          size={65}
          label={name[0]}
          color="#fff"
        />
      ) : (
        <Image
          style={styles.image1}
          source={require("../../assets/icon.png")}
          resizeMode="center"
        />
      )}

      <Text style={styles.name1}>{name}</Text>
    </View>
  );

  // const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;

  const renderSymptoms = ({ item, image }) => {
    return (
      <View
        style={{
          marginTop: 12,
          justifyContent: "center",
          alignItems: "center",
          marginRight: 14,
        }}
      >
        <View style={styles.symptopmsImgView}>
          <Image
            style={{ width: 74, height: 74 }}
            source={SymptomsList[item.name]}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.symptomName}>{item.name}</Text>
      </View>
    );
  };

  async function asapButtonClick() {
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
          <Text style={styles.headingtextview}>Choose your account</Text>
        </View>
        <View style={styles.familyContainer}>
          <FlatList
            horizontal={true}
            data={membersData}
            renderItem={renderMember}
            keyExtractor={(item) => item.name}
          />
          <View
            style={{ display: "flex", justifyContent: "center", marginTop: 8 }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Add-Family-Member")}
            >
              <Image
                style={{ width: 70, height: 70 }}
                source={require("../../assets/icons/medico_icon_plus.png")}
              />
            </TouchableOpacity>
            <Text>Add Patient</Text>
          </View>
        </View>

        <View style={styles.symptoms}>
          <Text style={styles.subheadingtextview}>Selected Symptoms</Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={selectedItem}
            renderItem={renderSymptoms}
            keyExtractor={(item, index) => index}
          />
        </View>

        {/* <View style={styles.speciality}>
          <Text style={styles.subheadingtextview}>Selected Speciality</Text>
          <Text style={styles.subheadingtextview1}>Neurologists</Text>
        </View> */}
        <View style={{ alignItems: "center" }}>
          <Button
            style={styles.viewDoctorsBtn}
            mode="contained"
            onPress={() => navigation.navigate("AvailableDoctor")}
          >
            <Text style={styles.viewDoctorsTxt}>View Doctors</Text>
          </Button>

          <Button
            style={styles.connectNowBtn}
            mode="contained"
            onPress={asapButtonClick}
          >
            <Text style={styles.connectNowTxt}>Connect Now</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outerview: {
    height: Screenheight * 1.4,
    display: "flex",
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  familyContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewDoctorsBtn: {
    backgroundColor: "#74CBD4",
    borderRadius: 100,
    width: 282,
    height: 45,
    justifyContent: "center",
    marginTop: 68,
    fontWeight: "500",
    fontSize: 17,
  },
  viewDoctorsTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textTransform: "capitalize",
  },
  connectNowBtn: {
    backgroundColor: "#ffff",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#74CBD4",
    width: 282,
    height: 45,
    justifyContent: "center",
    marginTop: 18,
    fontWeight: "500",
    fontSize: 17,
  },
  connectNowTxt: {
    color: "#74CBD4",
    fontWeight: "bold",
    fontSize: 15,
    textTransform: "capitalize",
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
  symptomName: {
    width: 74,
    height: 24,
    marginTop: 8,
    textAlign: "center",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    marginRight: 16,
    marginTop: 24,
  },
  symptopmsImgView: {
    borderWidth: 3,
    borderColor: "#74CBD4",
    borderRadius: 100,
    padding: 10,
  },
  headingview: {
    marginTop: 50,
    alignItems: "flex-start",
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
