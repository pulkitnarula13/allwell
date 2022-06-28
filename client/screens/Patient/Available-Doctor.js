import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
} from "react-native";
import React from "react";
import AvailableDoctorCard from "../../components/availableDoctorCard";
import { availableDoctorList } from "../../constants/availableDoctor";

const AvailableDoctor = () => {
  const Item = (data) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{data.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatlistContainer}>
        <FlatList
          style={styles.flatlist}
          data={availableDoctorList}
          renderItem={AvailableDoctorCard}
          keyExtractor={(item) => item.id}
          numColumns={2}
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
});

export default AvailableDoctor;
