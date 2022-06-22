import React, { useState } from "react";
import StepIndicator from "react-native-step-indicator";
import CreatingAccount1 from "../../components/CreatingAccount1";
import { Text, View, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#A0AEC0",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#A0AEC0",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#A0AEC0",
  separatorUnFinishedColor: "#A0AEC0",
  stepIndicatorFinishedColor: "#A0AEC0",
  stepIndicatorUnFinishedColor: "#E2E8F0",
  stepIndicatorCurrentColor: "#A0AEC0",
  stepIndicatorLabelCurrentColor: "#A0AEC0",
  stepIndicatorLabelFinishedColor: "#ffffff",

  labelSize: 13,
};

const Medical_document = () => {
  const [currentposition, setcurrentposition] = useState(0);

  const changepage = () => {
    setcurrentposition(currentposition + 1);
  };

  return (
    <View>
      <View style={styles.indicatorContainer}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentposition}
          stepCount={3}
        />
      </View>
      <View>
        <CreatingAccount1 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstHeading: {
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 29.05,
    textAlign: "center",
  },
  outerview: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    height: height,
    flex: 1,
    padding: 32,
  },
  indicatorContainer: {
    height: 22,
    width: 348,
    padding: 20,
    margin: 15,
    elevation: 10,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  accountHeading: {
    fontSize: "20px",
    fontWeight: "600",
    color: "gray",
    marginTop: 20,
  },
  accountHeading1: {
    fontSize: 16,
    fontWeight: "400",
    color: "#718096",
    lineHeight: 19.36,
    marginTop: 20,
    marginBottom: 40,
  },
  accountImage: {
    width: 302,
    height: 194,
    marginRight: 21,
  },
  buttonview: {
    marginTop: 76,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Medical_document;
