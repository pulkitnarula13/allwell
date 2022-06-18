import { Appbar } from "react-native-paper";

const CustomNavigationBar = ({ navigation, back }) => {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="My awesome app" />
    </Appbar.Header>
  );
};

export default CustomNavigationBar;
