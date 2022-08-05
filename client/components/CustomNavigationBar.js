import { Appbar } from "react-native-paper";
import App from "../App";
import { Image } from "react-native";

const CustomNavigationBar = (props) => {
  return (
    <Appbar.Header style={{backgroundColor:"white"}}>
      {props.back ? (
        <Appbar.BackAction onPress={props.navigation.goBack} />
      ) : null}
      <Appbar.Content
        title={
          props.back
            ? props.back.title
            : props.options.title
            ? props.options.title
            : "Medico"
        }
      />
      {/* <Appbar.Action
        icon="bookmark"
        onPress={() => console.log("Pressed mail")}
      />

      <Appbar.Action
        icon="calendar"
        onPress={() => console.log("Pressed label")}
      /> */}

      {props.route.name === "Home" ? (
        
        <Image 
        style={{
          width: 24,
          height: 24
        }} 
        source={require("../assets/icons/medico_icon_location.png")}  />
      ) : null }
    </Appbar.Header>
  );
};

export default CustomNavigationBar;
