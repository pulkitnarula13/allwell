import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useEffect } from "react";
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
import { ScrollView } from "react-native";

const DoctorInbox = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: `Inbox`,
    })
  }, []);
  const windowWidth = Dimensions.get("window").width;

  function ExploreWitHookExamples() {
    return (
      <View
        style={{
          width: windowWidth,
          backgroundColor: "blue",
        }}
      >
        <Doctorinboxdata />
      </View>
    );
  }
  

  return (
    <View style={styles.main}>
      <View style={styles.search}>
        <Searchbars />
      </View>
      <Tabs>
        <TabScreen label="Current">
          
          <View>
          <View style={{ padding:14,marginBottom:34,display:"flex",justifyContent:"center",alignItems:"center"}}>
          
          <Doctorinboxdata/>
          </View>
          </View>
          
        </TabScreen>
        <TabScreen label="Compeleted">
        <View style={{ padding:14,marginBottom:34,display:"flex",justifyContent:"center",alignItems:"center"}}>
          <View>
          <Doctorinboxdata/>
          </View>
          </View>

          {/* <ExploreWitHookExamples1 /> */}
        </TabScreen>
      </Tabs>
    </View>
    // <View style={styles.Header}>
    //   <View style={styles.headermain}>
    //     <View style={styles.align}>
    //       <Text style={styles.text2}>Inbox</Text>
    //       <View style={styles.btnview}>
    //         <Button style={styles.btnsetting}>
    //           <Feather name="bookmark" size={24} color="black" />
    //         </Button>
    //         <Button style={styles.btnsetting}>
    //           <Feather name="shopping-bag" size={24} color="black" />
    //         </Button>
    //       </View>
    //     </View>
    //   </View>
    //   <View>

    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  
  main: {
    flex: 1,
  },
  Header: {
    display: "flex",
    // flex: "1",
    // flexDirection: "column",
  },
  search: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 34,
    marginBottom: 34,
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
