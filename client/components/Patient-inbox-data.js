import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Rating } from "react-native-ratings";
import { FlatList } from "react-native";
import { DATA } from "../constants/Doctor-inboxvalues";
import { Avatar } from "react-native-paper";

const Patientinboxdata = (props) => {
  const Item = ({ name, image, date, info, rating, qna, confirmed }) => (
    <View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("PatientChatting", {
          qna,
          confirmed
        })}
      >
        <View style={styles.main}>
          <Text style={styles.date1}>{date}</Text>
          <View style={styles.mainouter}>
            <View style={styles.inner}>
              <View>
                <View
                  style={{
                    width: 65,
                    height: 65,
                    backgroundColor: "gray",
                    borderRadius: 100,
                  }}
                >
                  {!image ? (
                    <Avatar.Text
                      style={{ backgroundColor: "#74CBD4" }}
                      size={65}
                      label={name ? name[0] : "Dr."}
                      color="#fff"
                    />
                  ) : (
                    <Image
                      source={image}
                      style={styles.image2}
                      resizeMode="cover"
                    />
                  )}
                </View>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: "600",
                    marginTop: 4,
                  }}
                >
                  {" "}
                  Dr. {name}
                </Text>
              </View>
              <View style={{ marginLeft: 30 }}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text>{date}</Text>
                  <Rating
                    style={{ marginLeft: 13 }}
                    startingValue={rating}
                    readonly
                    type="star"
                    ratingColor="#74CBD4"
                    ratingCount={5}
                    imageSize={15}
                  />
                </View>
                <View style={styles.down}>
                  <Text>{info[0].answer}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => {
    const date = new Date(item.date).toDateString();
    return (
      <Item
        name={item.doctor?.name}
        image={item.doctor?.profilePicture}
        date={date}
        info={item.qna}
        rating={item.doctor?.rating}
        qna={item.qna}
        confirmed={item.confirmed}
      />
    );
  };
  return (
    <FlatList
      horizontal={false}
      data={props.appointments}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
};
const styles = StyleSheet.create({
  date1: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    marginTop: 34,
    marginBottom: 7,
  },
  down: {
    width: 180,
    marginTop: 12,
  },
  mainouter: {
    display: "flex",
    width: 343,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 10,
    padding: 20,
  },
  main: {
    display: "flex",
    flex: 1,
  },
  inner: {
    display: "flex",
    flexDirection: "row",
  },
  image2: {
    width: 65,
    height: 65,
  },
});
export default Patientinboxdata;
