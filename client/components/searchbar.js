import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const Searchbars = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
        style={styles.bar}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};
const styles = StyleSheet.create({
    bar:{
        borderWidth:4,
        fontSize:14,
        fontWeight:"600",
        borderColor:"#A0AEC0",
        borderRadius:100,
        width:321,
        height:44
    }
})
export default Searchbars;