import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import {familymemberlists} from "../../constants/familymemberslist";

const Item = ({ name, image }) => {
  return <View style={styles.item}>
  <Image
    style={styles.image1}
    source={require("../../assets/icon.png")}
    resizeMode="contain"
  />
  <Text style={styles.name1}>{name}</Text>
</View>
};
const FamilyScreen = () => {
  const renderItem = ({ item }) => {
    return <Item name={item.name} image={item.image} />
  };

  return (
    <View>
      <View style={styles.outerview}>
        <Text style={styles.profiletext}>Family Members</Text>
        <FlatList
          data={familymemberlists}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.flatListColumn}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  outerview: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 38,
    marginBottom: 46,
  },
  profiletext: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 36,
    textAlign: "center",
  },
  flatListColumn: {
    margin: 30,
  },
  image1:{
    width:92,
    height:92,
    marginRight:59
    
},

});
export default FamilyScreen;
