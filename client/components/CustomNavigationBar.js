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
      {props.route.name === "Home" ? (
        
        <Image 
        style={{
          width: 24,
          height: 24
        }} 
        source={require("../assets/icons/medico_icon_noti.png")}  />
      ) : null }
    </Appbar.Header>
  );
};

export default CustomNavigationBar;
