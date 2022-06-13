

import {View, Text} from 'react-native';
import React from 'react';


const DoctorInfoConnect = () => {
    console.log("connect")
  return (
    <View
    style={{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
       }}>
      <Text>Connect Screen</Text>
    </View>
  );
};

export default DoctorInfoConnect;