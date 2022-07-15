import { useEffect, useState } from "react";
import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
import { TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import axios from "axios";
import { BASE_URL_DEV } from "@env";
import { certificationsList } from "../constants/certifications";
import { languagesList } from "../constants/languages";
import * as Location from "expo-location";

const CreatingAccount3 = (props) => {
  const [height, setHeight] = useState(undefined);
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [specialities, setSpecialities] = useState([]);
  const [yearOfExperience, setYearOfExperience] = useState(0);
  const [description, setDescription] = useState("");
  const [certification, setCertifications] = useState(certificationsList);
  const [languages, setLanguages] = useState(languagesList);
  const [latitude, setlatitude] = useState("0");
  const [longitude, setlongitude] = useState("0");
  const [userLocation, setUserLocation] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCertification, setSelectedCertification] = useState("");
  const [showCertificationDropDown, setShowCertificationDropDown] =
    useState(false);
  const [showLangaugesDropdown, setShowLanguagesDropdown] = useState(false);

  useState(false);

  useEffect(() => {
    getSpeciallityList();
  }, []);

  const getSpeciallityList = async () => {
    const response = await axios.get(`${BASE_URL_DEV}/doctors/specialities`);

    const manipulatedData = response.data.data.map((val) => {
      return {
        label: val.name,
        value: val._id,
      };
    });

    console.log(manipulatedData, "data");
    setSpecialities(manipulatedData);
  };

  async function getlocationhandler() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      setlatitude(latitude);
      setlongitude(longitude);

      for (let item of response) {
        let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
        console.log(longitude, latitude, "longitude");
        setUserLocation(address);
        props.setThirdStepperData({
          ...props.mainData,
          location: {
            type: "Point",
            longitude,
            latitude,
          },
        });
      }
    }
  }

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
            console.log(data);
            setSelectedSpeciality(data);
            props.setThirdStepperData({
              ...props.mainData,
              specialities: data.split(",").filter((data) => data),
            });
          }}
          list={specialities}
        />

        {/* <Text style={styles.textspeciality}>Certifications</Text> */}
        {/* <DropDown
          label={"Chose Your Certifications"}
          mode={"outlined"}
          visible={showCertificationDropDown}
          showDropDown={() => setShowCertificationDropDown(true)}
          onDismiss={() => setShowCertificationDropDown(false)}
          value={selectedCertification}
          multiSelect
          setValue={(data) => {
            setSelectedCertification(data);
            props.setThirdStepperData({
              ...props.mainData,
              certifications: data.split(",")
              .filter((data) => data),
            });
          }}
          list={certification}
        /> */}

        {/* <Text style={styles.textspeciality}>Certifications</Text> */}
        {/* <DropDown
          label={"Chose Your Languages"}
          mode={"outlined"}
          visible={showLangaugesDropdown}
          showDropDown={() => setShowLanguagesDropdown(true)}
          onDismiss={() => setShowLanguagesDropdown(false)}
          value={selectedLanguage}
          multiSelect
          setValue={(data) => {
            setSelectedLanguage(data);
            props.setThirdStepperData({
              ...props.mainData,
              languages: data.split(",")
              .filter((data) => data),
            });
          }}
          list={languages}
        /> */}
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
              experience: data,
            });
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
            setDescription(data);
            props.setThirdStepperData({
              ...props.mainData,
              description: data,
            });
          }}
          placeholder="Describe About Yourself"
          onContentSizeChange={(event) => {
            setHeight(event.nativeEvent.contentSize.height);
          }}
        />
        <TextInput
          label="Address"
          value={userLocation}
          right={
            <TextInput.Icon onPress={getlocationhandler} name="map-marker" />
          }
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
