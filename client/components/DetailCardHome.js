import { View, Text, StyleSheet, Image } from "react-native";
import React, {useState} from "react";
import { Button } from "react-native-paper";

const DetailCardHome = ({ config, item }) => {

  const [image, setImage] = useState({ image: require("../assets/new_icons/inbox-new.png") });

  // setImage(config);
  return (
    <View
      style={
        config.type === "solid"
          ? styles.solidContainerConfig
          : styles.outlineContainerConfig
      }
    >
      <View style={styles.buttonContainer}>
        <Button>
          {/* <MaterialCommunityIcons
            name="message-text-clock-outline"
            size={24}
            color="white"
          /> */}
          <Image
              style={{
                width: 24,
                height: 24,
              }}
              source={image.image}
            />
        </Button>
      </View>
      <View style={styles.textContainer}>
        <Text
          style={
            config.type === "solid"
              ? styles.solidTextConfig
              : styles.outlineTextConfig
          }
        >
          {item.length}
        </Text>
        <Text
          style={
            config.type === "solid"
              ? styles.solidTextConfig
              : styles.outlineTextConfig
          }
        >
          {config.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    display: "flex",
    gap: 20,
    alignItems: "center",
  },
  solidContainerConfig: {
    backgroundColor: "#74CBD4",
    flex: 1,
    height: 170,
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    borderRadius: 20,
    gap: 20,
    justifyContent: "space-evenly",
  },
  outlineContainerConfig: {
    backgroundColor: "#74CBD4",
    height: 170,
    flex: 1,
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    borderRadius: 20,
    gap: 20,
    justifyContent: "space-evenly",
  },
  solidTextConfig: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    // fontFamily:"Poppins",
    marginBottom: 42,
  },
  outlineTextConfig: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    // fontFamily:"Poppins",
    marginBottom: 42,
  },
  buttonContainer: {
    alignItems: "flex-start",
    display: "flex",
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default DetailCardHome;
