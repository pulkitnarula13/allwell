import { useEffect, useState } from "react";
import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import { BASE_URL_DEV } from "@env";

const CreatingAccount3 = (props) => {
  const [height, setHeight] = useState(undefined);
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [specialities, setSpecialities] = useState([]);
  const [yearOfExperience, setYearOfExperience] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    getSpeciallityList();
  }, []);
    
  const getSpeciallityList = async () => {
    const response = await axios.get(
      `${BASE_URL_DEV}/doctors/specialities`
    );

    console.log(response.data.data);
    const manipulatedData = response.data.data.map((val) => {
      return {
        label: val.name,
        value: val._id
      }
    })
    setSpecialities(manipulatedData);
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
          value={selectedSpeciality}
          multiSelect
          setValue={(data) => {
            setSelectedSpeciality(data);
            props.setThirdStepperData({
              ...props.mainData,
              specialities: data
            })
          }}
          list={specialities}
        />
      </View>
      <View>
        <Text style={styles.textspeciality}>Years of work experience</Text>
        <TextInput
          value={yearOfExperience}
          placeholder="Years of Work Experience"
          onChangeText={(data) => {
            setYearOfExperience(data);
            props.setThirdStepperData({
              ...props.mainData,
              experience: data
            })
          }}
        />
      </View>
      <View style={styles.abouttext}>
        <Text style={styles.textspeciality}>About</Text>
        <TextInput
          style={styles.textarea}
          multiline
          value={description}
          onChangeText={(data) => {
            setDescription(data)
            props.setThirdStepperData({
              ...props.mainData,
              description: data
            })
          }}
          placeholder="Describe About Yourself"
          onContentSizeChange={(event) => {
            setHeight(event.nativeEvent.contentSize.height);
          }}
        />
      </View>

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
    margin: 50,
  },
  textarea: {
    height: 84,
    borderColor: "#E2E8F0",
    borderWidth: 1,
  },
});

export default CreatingAccount3;
