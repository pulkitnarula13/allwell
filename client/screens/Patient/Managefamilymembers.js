import { View, Text, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Avatar } from "react-native-paper";
import { ScrollView } from "react-native";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import { AuthContext } from "../../Context/AuthContext";

let Screenheight = Dimensions.get("window").height;

const Managefamilymembers = ({ navigation, route }) => {
  // get the family members
  useEffect(() => {
    getFamilyMembers();
  }, []);

  const { userInfo } = useContext(AuthContext);
  const [membersData, setMembersData] = useState([]);

  // Get the family members from the API
  const getFamilyMembers = async () => {
    const familyData = await axios.get(
      `${BASE_URL_DEV}/patients/members/${userInfo.id}`,
      {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
    );

    const data = familyData.data.data;

    setMembersData(data);
  };


  const renderMember = (item) => {
    return (
      <TouchableOpacity
        style={[styles.list, item.selectedClass]}
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
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            paddingLeft: 15,
          }}
        >
          {item.item.name.split(" ")[0]}
        </Text>
      </TouchableOpacity>
    );
  };

  const Item = ({ name, profilePicture }) => (
    <View style={styles.item}>
      {!profilePicture ? (
        <Avatar.Text
          style={{ backgroundColor: "#74CBD4" }}
          size={100}
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


  return (
    <ScrollView>
      <View style={styles.outerview}>

        <View style={styles.familyContainer}>
          <FlatList
            horizontal={true}
            data={membersData}
            renderItem={renderMember}
            keyExtractor={(item) => item.name}
          />
          <View>
            <TouchableOpacity
            style={{
              borderWidth: 1, borderColor: "#74CBD4", borderRadius: 100, 
              display: "flex", justifyContent: "center", alignItems: "center",
              padding: 8
            }}
              onPress={() => navigation.navigate("Add-Family-Member")}
            >
              <Image
                style={{ width: 50, height: 50 }}
                source={require("../../assets/icons/medico_icon_plus.png")}
              />
            </TouchableOpacity>
            <Text>Add Member</Text>
          </View>
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },

  image1: {
    width: 120,
    height: 120,
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
    alignItems: "center",
    marginRight: 16,
  },
  
});
export default Managefamilymembers;
