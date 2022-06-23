import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import { availableDoctorList } from '../../constants/availableDoctor';
import availableDoctorCard from '../../components/availableDoctorCard';
const AvailableDoctor = () => {



const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <Item title={item.name} />
);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={availableDoctorList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
     
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
  title: {
    fontSize: 32,
  },
});


export default AvailableDoctor;