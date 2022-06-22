import { Appbar } from "react-native-paper";

const CustomNavigationBar = ({ navigation, back }) => {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={back ? back.title : "Welcome"} />
    </Appbar.Header>
  );
};

export default CustomNavigationBar;