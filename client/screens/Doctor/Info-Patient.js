import { View, Text, StyleSheet, FlatList, Image, ImageBackground, TouchableWithoutFeedback } from "react-native";
import { React, useState } from "react";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Dialog, { DialogContent, SlideAnimation } from 'react-native-popup-dialog';




const DATA = [
  {
    name: "Headache",
    image: "../../assets/icon.png",
  },
  {
    name: "Cough",
    image: "../../assets/icon.png",
  },
  {
    name: "Sore Throad",
    image: "../../assets/icon.png",
  },
];

const PatientPhotoData = [
  {
    name: 'bd7acbea-c1b-46c2-aed5-3ad53abb21ba',
    image: "../../assets/icon.png",
  },
  {
    name: 'bd7acbea-c1b1-46c2-aed5-3ad53abb22ba',
    image: "../../assets/icon.png",
  },
  {
    name: 'bd7acbea-c1b1-46c2-aed5-3ad53abb23ba',
    image: "../../assets/icon.png",
  },
];

const images = [
  {
    uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
  },
  {
    uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
  },
  {
    uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
  },
];

const Item = ({ name, image }) => (
  <View style={styles.item}>
    <Image
      style={styles.image1}
      source={require("../../assets/icon.png")}
      resizeMode="center"
    />
    <Text style={styles.name1}>{name}</Text>
  </View>
);

const InfoPatient = (props) => {
  const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;
  const renderImage = ({ item }) => <Item image={item.image} />;
  const [dialogbox, setDialogbox] = useState(false);

  return (
    <ScrollView>
      <View style={styles.outerview1}>
        <View style={styles.outerview}>
          <Text style={styles.textHeader}>Patient Info</Text>
        </View>
        <View style={styles.innerview}>
          <View style={styles.imagecenter}>
            <Image
              style={styles.image2}
              source={require("../../assets/icon.png")}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.text2}>Atif Aslam</Text>
          <Text style={styles.text3}>Male, 32 years</Text>
          <Text style={styles.textComponentsHead}>Symptoms</Text>
          <View style={styles.flatlistView}>
            <FlatList
              horizontal={true}
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.name}
            />
          </View>
          <Text style={styles.textComponentsHead}>Photos/ Videos</Text>
          <View style={styles.flatlistView}>
            <FlatList
              horizontal={true}
              data={PatientPhotoData}
              renderItem={({renderImage}) => (

                <TouchableWithoutFeedback onPress={ () => this.setDialogbox(true)}>
  
                    <View>
                      <Text>{renderImage}</Text>
                       <ImageBackground src={renderImage}></ImageBackground>
                    </View>
  
               </TouchableWithoutFeedback>
              )}
            />
            <Dialog
            visible= {dialogbox}
            dialogAnimation={new SlideAnimation({
              slideFrom: 'bottom',
            })}
            onTouchOutside={() => {
              setDialogbox(false);
            }}
            rounded
            width={1}
            dialogStyle = {styles.dialogStyles}
            >
              <DialogContent>
                <View>
                  <Text>Hello world</Text>
                  <ImageBackground src={PatientPhotoData} resizeMode="cover" style={styles.imageFScreen}></ImageBackground>
                </View>
              </DialogContent>

            </Dialog>

         

           
          </View>
          <Text style={styles.textComponentsHead}>Description</Text>
          <Text style={styles.textDescriptionData}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in officia deserunt mollit anim id est laborum
          </Text>
        </View>

        <View style={styles.buttonSingle}>
          <Button
            style={styles.btnRespond}
            mode="contained"
            onPress={() => props.navigation.navigate("Patient-Chat")}
          >
            Respond
          </Button>
        </View>

        <View style={styles.buttons}>
          <Button
            style={styles.btnReschedule}
            mode="contained"
            onPress={() => props.navigation.navigate("Accept-Patient-Schedule")}
          >
            Reschedule
          </Button>
          <Button
            style={styles.btnCancel}
            mode="contained"
            onPress={() => console.log("Cancel Pressed")}
          >
            Cancel
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outerview: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  imagecenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image2: {
    width: 159,
    height: 159,
    marginBottom: 39,
  },
  TimeSlot: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 270,
  },
  buttonSingle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  btnRespond: {
    width: 310,
    height: 40,
    backgroundColor: "#DADADA",
    marginBottom: 20,
  },
  btnReschedule: {
    width: 140,
    height: 40,
    marginRight: 29,
    backgroundColor: "#DADADA",
  },
  btnCancel: {
    width: 140,
    height: 40,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    borderWidth: 1,
  },
  textDescriptionData: {
    width: 349,
    height: 150,
    fontSize: 16,
    lineHeight: 18,
    marginBottom: 17,
  },

  description: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 11,
  },
  textComponentsHead: {
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
  },
  innerview: {
    paddingLeft: 19,
    marginTop: 44.66,
  },
  outerview1: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  flatlistView: {
    marginTop: 9,
  },
  textHeader: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 28,
    marginTop: 38,
  },
  text2: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 22,
    lineHeight: 22,
    marginBottom: 4,
  },
  text3: {
    marginBottom: 11,
    textAlign: "center",
  },
  image1: {
    width: 50,
    height: 50,
    marginRight: 28,
  },
  name1: {
    width: 67,
    textAlign: "center",
    marginBottom: 10,
  },
  dialogStyles: {
    width: '90%',
    width: '90%',
  },
  imageFScreen: {
    flex: 1,
    justifyContent: "center",
  }

});

export default InfoPatient;
