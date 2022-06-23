import { useState } from "react";
import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";

const { width, height } = Dimensions.get("window");

const CreatingAccount3 = () => {
  const [height, setHeight] = useState(undefined);
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState("");
  const genderList = [
    {
      label: "Cardiology",
      value: "Cardiology",
    },
    {
      label: "Family Medicine",
      value: "Family Medicine",
    },
    {
      label: "Emergency Medicine",
      value: "Emergency Medicine",
    },
  ];

  const changepage = () => {
    setclicked(true);
  };
  return (
    <View>
      <View style={styles.dropdownlistview}>
        <Text style={styles.textspeciality}>Speciality</Text>
        <DropDown
          label={"Chose Your Speciality"}
          mode={"outlined"}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          value={gender}
          setValue={setGender}
          list={genderList}
        />
      </View>
      <View>
        <Text style={styles.textspeciality}>Years of work experience</Text>
        <TextInput
          style={styles.textarea}
          multiline
          placeholder="Text Area"
          onContentSizeChange={(event) => {
            setHeight(event.nativeEvent.contentSize.height);
          }}
        />
      </View>
      <View style={styles.abouttext}>
        <Text style={styles.textspeciality}>About</Text>
        <TextInput
          style={styles.textarea}
          multiline
          placeholder="Describe About Yourself"
          onContentSizeChange={(event) => {
            setHeight(event.nativeEvent.contentSize.height);
          }}
        />
      </View>
      <Button
        style={{
          marginBottom: 5,
          borderRadius: 10,
          backgroundColor: "#D9D9D9",
          width: 302,
          height: 45,
          justifyContent: "center",
        }}
        mode="contained"
        onPress={changepage}
      >
        Sign Up
      </Button>
      <View style={styles.lasttextview}>
        <Text style={styles.lasttext}>
          You can always edit these on the profile page.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  abouttext: {
    marginBottom: 65,
  },
  lasttext: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 22,
    marginBottom: 52,
  },
  lasttextview: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputbox: {
    width: 256,
    height: 40,
    marginBottom: 19,
  },
  textspeciality: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    color: "#515767",
  },
  dropdownlist: {
    width: 256,
    height: 40,
    marginBottom: 16,
    borderColor: "#CBD5E0",
  },
  dropdownlistview: {
    marginBottom: 160,
    marginTop: 50,
  },
  textarea: {
    height: 84,
    borderColor: "#E2E8F0",
    borderWidth: 1,
  },
});

export default CreatingAccount3;

