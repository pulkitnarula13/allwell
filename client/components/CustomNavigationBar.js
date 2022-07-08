import { Appbar } from "react-native-paper";
import App from "../App";

const CustomNavigationBar = (props) => {
  return (
    <Appbar.Header>
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
      <Appbar.Action
        icon="bookmark"
        onPress={() => console.log("Pressed mail")}
      />

      <Appbar.Action
        icon="calendar"
        onPress={() => console.log("Pressed label")}
      />

      {props.route.name === "Home" ? (
        <Appbar.Action
          icon="bell-badge-outline"
          onPress={() => props.navigation.navigate("Notfication")}
        />
      ) : null}
    </Appbar.Header>
  );
};

export default CustomNavigationBar;
