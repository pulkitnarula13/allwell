import { View, Text, StyleSheet, StatusBar, SafeAreaView, FlatList } from 'react-native'
import React from 'react';
import AvailableDoctorCard from '../../components/AvailableDoctorCard';
import { availableDoctorList } from '../../constants/availableDoctor';
import { ScrollView } from 'react-native-gesture-handler';

const AvailableDoctor = () => {

  const Item = (data) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{data.name}</Text>
      </View>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatlist}>
      <FlatList
        data={availableDoctorList}
        renderItem={AvailableDoctorCard}
        keyExtractor={item => item.id}
      />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
  },
  flatlist: {
    flexDirection: "row !important",
    flexWrap: "wrap !important",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center"
  }
});


export default AvailableDoctor;