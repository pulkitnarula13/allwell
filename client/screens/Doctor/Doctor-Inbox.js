import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { Title, Paragraph } from "react-native-paper";
import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from "react-native-paper-tabs";

import Searchbars from "../../components/searchbar";
import Doctorinboxdata from "../../components/Doctor-inbox-data";

const DoctorInbox = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowheight = Dimensions.get("window").height;
  function ExploreWitHookExamples() {
    return (
      <View
        style={{
          width: windowWidth,
          height: { windowheight },
          backgroundColor: "blue",
        }}
      >
        <Doctorinboxdata />
      </View>
    );
  }
  function ExploreWitHookExamples1() {
    const goTo = useTabNavigation();
    const index = useTabIndex();

    return (
      <View style={{ flex: 1, width: windowWidth }}>
        <Title>Current</Title>
      </View>
    );
  }

  return (
    <View style={styles.Header}>
      <View style={styles.headermain}>
        <View style={styles.align}>
          <Text style={styles.text2}>Inbox</Text>
          <View style={styles.btnview}>
            <Button style={styles.btnsetting}>
              <Feather name="bookmark" size={24} color="black" />
            </Button>
            <Button style={styles.btnsetting}>
              <Feather name="shopping-bag" size={24} color="black" />
            </Button>
          </View>
        </View>
        <View style={styles.search}>
          <Searchbars />
        </View>
      </View>
      <View>
        <Tabs>
          <TabScreen label="Current">
            <ExploreWitHookExamples />
          </TabScreen>

          <TabScreen label="Compeleted">
            <ExploreWitHookExamples1 />
          </TabScreen>
        </Tabs>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    display: "flex",
    flex: "1",
    flexDirection: "column",
  },
  search: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 34,
  },
  headermain: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#EDF2F7",
    width: 390,
    height: 142,
  },
  btnview: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  align: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text2: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24.2,
    marginLeft: 85,
    marginTop: 19,
  },
});

export default DoctorInbox;
