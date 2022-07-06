import { View, Text, Image, Dimensions, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { Button } from "react-native-paper";
import {  Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { FloatingAction } from "react-native-floating-action";

const PatientHome = ({navigation}) => {
  const [latitude, setlatitude] = useState("0");
  const [longitude, setlongitude] = useState("0");

  const DATA = [
    {
      name: "Cough",
      image: "../../assets/icon.png",
    },
    {
      name: "Muscle Cramp",
      image: "../../assets/icon.png",
    },
    {
      name: "Sore Throad",
      image: "../../assets/icon.png",
    },
    {
      name: "Stomach Pain",
      image: "../../assets/icon.png",
    },
    {
      name: "Stomach Pain 1",
      image: "../../assets/icon.png",
    },
    {
      name: "Congestion1",
      image: "../../assets/icon.png",
    },
    {
      name: "Fever1",
      image: "../../assets/icon.png",
    },
    {
      name: "Fever2",
      image: "../../assets/icon.png",
    },
  ];

  

  const [locationpermissioninfo, requestpermission] =useForegroundPermissions();

  async function seePermission() {
    

    if (locationpermissioninfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestpermission();
      console.log(locationpermissioninfo, "locationPermission");
      return permissionResponse.granted;
    }

    if (locationpermissioninfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Sorry, we cannot get the permission for you as it is denied by the user "
      );

      return false;
    }
  }

  async function getlocationhandler() {
    const haspermission = await seePermission();
    console.log(haspermission, "has permission");

    if (!haspermission) {
      return;
    }

    const location = await getCurrentPositionAsync().then((data) => {
      setlatitude(data.coords.latitude);
      setlongitude(data.coords.longitude);
      console.log(data.coords.latitude, "latitude");
      console.log(data.coords.longitude, "longitutde");
    });
  }

  const Item = ({ name, image }) => (
    <View style={styles.item}>
      <Image
        style={{ width: 100, height: 100,marginRight:14 }}
        source={require("../../assets/icon.png")}
        resizeMode="contain"
      />
      <Text style={styles.name1}>{name}</Text>
    </View>
  );
  let Screenheight = Dimensions.get("window").height;
  const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;
  return (
    <View style={{
        
      backgroundColor: "#FAFAFA",
      alignItems: "center",
      height: Screenheight * 1.4,
      display: "flex",
      flex: 1,
    }}>
    <View
      style={{paddingLeft:20,backgroundColor:"#FFFFFFF"}}
    >
      <ScrollView>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <Text style={styles.heading12}>Medico</Text>
      <Button style={{width:50,marginTop:50,marginRight:50}} onPress={getlocationhandler}>
              <MaterialCommunityIcons name="bell-badge-outline" size={24} color="#74CBD4" />
            </Button>
      </View>
        <View
          style={{
            marginTop: 17.81,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          
          <Text style={styles.heading}>Hello,Guest</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Button onPress={getlocationhandler}>
              <Ionicons name="location-outline" size={24} color="#74CBD4" />
            </Button>
            <Text style={{ marginRight: 50, marginTop: 15 }}>
              {latitude},{longitude}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 50 }}>
          <Text style={styles.heading}>Not feeling well</Text>
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
              color:"#FFFFFF",
              borderRadius: 10,
              backgroundColor: "#74CBD4",
              width: 282,
              height: 45,
              justifyContent: "center",
            }}
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Chat with a doctor
          </Button>
        </View>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
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
        <Text onPress={()=>{navigation.navigate("ChooseSymptoms")}} style={{marginRight:40,fontWeight:"700"}}>View All</Text>
        </View>
        <View
          style={{
            display: "block",
            alignItems: "flex-start",
            height: 50,
          }}
        >
          <Text>To connect with specialist</Text>
        </View>
        <View>
          <FlatList
            style={{ height: 110, marginRight: 36, marginLeft: 36 }}
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            showsHorizontalScrollIndicator={false}
          />
          
        </View>
        <View style={{ display: "flex", flexDirection: "row",marginTop:17,marginBottom:17 }}>
          <Text style={{ fontWeight: "700", fontSize: 16 }}>
            Near By Doctors
          </Text>
          {/* <Button
            style={{
              borderRadius: 10,
              backgroundColor: "gray",
              width: 230,
              height: 40,
              justifyContent: "center",
              marginRight: 31,
              borderColor: "#000000",
              borderWidth: 1,
              marginLeft: 3,
              marginBottom: 50,
            }}
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Try Chat Bot
          </Button> */}
        </View>
        <View style={{ display: "flex", flexDirection: "row",justifyContent:"center" }}>
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
                width: 72,
                height: 72,
                borderRadius: 100,
                backgroundColor: "gray",
              }}
              source={require("../../assets/icon.png")}
              resizeMode="contain"
            />
            <Text style={{ fontWeight: "500", fontSize: 16 }}>
              Dr.Lora Smith
            </Text>
            <Text style={{ fontWeight: "100", fontSize: 12 }}>
              General Phisician
            </Text>
            <Button style={{display:"flex",flexDirection:"row",}} onPress={getlocationhandler}>
              <Ionicons style={{marginRight:10}} name="location-outline" size={24} color="#74CBD4" />
              <Text style={{color:"black"}}>5Km</Text>
            </Button>
          </View>
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
                width: 72,
                height: 72,
                borderRadius: 100,
                backgroundColor: "gray",
              }}
              source={require("../../assets/icon.png")}
              resizeMode="contain"
            />
            <Text style={{ fontWeight: "500", fontSize: 16 }}>
              Dr.Lora Smith
            </Text>
            <Text style={{ fontWeight: "100", fontSize: 12 }}>
              General Phisician
            </Text>
            <Button style={{display:"flex",flexDirection:"row",}} onPress={getlocationhandler}>
              <Ionicons style={{marginRight:10}} name="location-outline" size={24} color="#74CBD4" />
              <Text style={{color:"black"}}>5Km</Text>
            </Button>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row",justifyContent:"center",marginTop:10 }}>
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
                width: 72,
                height: 72,
                borderRadius: 100,
                backgroundColor: "gray",
              }}
              source={require("../../assets/icon.png")}
              resizeMode="contain"
            />
            <Text style={{ fontWeight: "500", fontSize: 16 }}>
              Dr.Lora Smith
            </Text>
            <Text style={{ fontWeight: "100", fontSize: 12 }}>
              General Phisician
            </Text>
            <Button style={{display:"flex",flexDirection:"row",}} onPress={getlocationhandler}>
              <Ionicons style={{marginRight:10}} name="location-outline" size={24} color="#74CBD4" />
              <Text style={{color:"black"}}>5Km</Text>
            </Button>
          </View>
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
                width: 72,
                height: 72,
                borderRadius: 100,
                backgroundColor: "gray",
              }}
              source={require("../../assets/icon.png")}
              resizeMode="contain"
            />
            <Text style={{ fontWeight: "500", fontSize: 16 }}>
              Dr.Lora Smith
            </Text>
            <Text style={{ fontWeight: "100", fontSize: 12 }}>
              General Phisician
            </Text>
            <Button style={{display:"flex",flexDirection:"row",}} onPress={getlocationhandler}>
              <Ionicons style={{marginRight:10}} name="location-outline" size={24} color="#74CBD4" />
              <Text style={{color:"black"}}>5Km</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
      <FloatingAction
      onOpen={() => {
        navigation.navigate("Chattingwithdoctor")
      }}
      animated={false}
      color='#718096'
      buttonSize={75}
      floatingIcon={<MaterialCommunityIcons  name="message-processing-outline" size={24} color="white" />}
  />
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
    width:201,
    marginTop:55,
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
