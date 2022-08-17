import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet } from "react-native";
import { Searchbar, TextInput } from "react-native-paper";

const Searchbars = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      style={styles.bar}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  //   <TextInput
  //   label="Search"
  //   value={searchQuery}
  //   style={styles.bar}
  //   onChangeText={text => onChangeSearch(text)}
  // />
  );
};
const styles = StyleSheet.create({
  bar: {
    fontSize: 14,
    borderColor: "#A0AEC0",
    width: 321,
    height: 44,
  },
});
export default Searchbars;
